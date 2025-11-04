import { NextResponse } from 'next/server';
import { verifyAdminRequest } from '../../../../libs/adminAuth';

const GH_API = 'https://api.github.com';

function toArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return String(val)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function esc(str = '') {
  return String(str).replace(/"/g, '\\"');
}

function buildMdxFrontmatter(data) {
  const {
    title,
    slug,
    description,
    date,
    tags,
    coverImage,
    author,
    draft,
    seoTitle,
    seoDescription,
    keywords,
    socialImage,
    twitterCard,
    canonicalUrl,
  } = data;

  const tagArr = toArray(tags);
  const kwArr = toArray(keywords);

  const lines = [
    '---',
    `title: "${esc(title)}"`,
    `slug: "${esc(slug)}"`,
    description ? `description: "${esc(description)}"` : null,
    date ? `date: "${esc(date)}"` : null,
    tagArr.length ? `tags: [${tagArr.map((t) => `"${esc(t)}"`).join(', ')}]` : null,
    coverImage ? `coverImage: "${esc(coverImage)}"` : null,
    author ? `author: "${esc(author)}"` : null,
    typeof draft === 'boolean' ? `draft: ${draft}` : null,
    seoTitle ? `seoTitle: "${esc(seoTitle)}"` : null,
    seoDescription ? `seoDescription: "${esc(seoDescription)}"` : null,
    kwArr.length ? `keywords: [${kwArr.map((k) => `"${esc(k)}"`).join(', ')}]` : null,
    socialImage ? `socialImage: "${esc(socialImage)}"` : null,
    twitterCard ? `twitterCard: "${esc(twitterCard)}"` : null,
    canonicalUrl ? `canonicalUrl: "${esc(canonicalUrl)}"` : null,
    '---',
    '',
  ].filter(Boolean);

  return lines.join('\n');
}

async function getExistingFileSha({ owner, repo, path, branch, token }) {
  const url = `${GH_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'kabini-admin',
    },
    cache: 'no-store',
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub get file failed: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.sha || null;
}

async function putFile({ owner, repo, path, branch, token, message, contentBase64, sha, committer }) {
  const url = `${GH_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const body = { message, content: contentBase64, branch, committer };
  if (sha) body.sha = sha;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'kabini-admin',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub commit failed: ${res.status} ${await res.text()}`);
  return res.json();
}

export async function POST(request) {
  // Protect with existing admin session
  if (!verifyAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const {
      title,
      slug,
      description,
      date,
      tags,
      coverImage,
      author,
      draft,
      seoTitle,
      seoDescription,
      keywords,
      socialImage,
      twitterCard = 'summary_large_image',
      canonicalUrl,
      content = '',
      branch = process.env.GITHUB_DEFAULT_BRANCH || 'main',
    } = body || {};

    if (!title || !slug) {
      return NextResponse.json({ error: 'title and slug are required' }, { status: 400 });
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const contentDir = process.env.GITHUB_CONTENT_DIR || 'content/posts';
    const committer = {
      name: process.env.GIT_COMMIT_NAME || 'Kabini Admin Bot',
      email: process.env.GIT_COMMIT_EMAIL || 'admin@kabini.ai',
    };
    if (!token || !owner || !repo) {
      return NextResponse.json({ error: 'GitHub env variables are not set' }, { status: 500 });
    }

    const frontmatter = buildMdxFrontmatter({
      title,
      slug,
      description,
      date,
      tags,
      coverImage,
      author,
      draft,
      seoTitle,
      seoDescription,
      keywords,
      socialImage,
      twitterCard,
      canonicalUrl,
    });
    const mdx = `${frontmatter}${content.trim()}\n`;

    const path = `${contentDir.replace(/\/$/, '')}/${slug}.mdx`;
    const sha = await getExistingFileSha({ owner, repo, path, branch, token });
    const contentBase64 = Buffer.from(mdx, 'utf-8').toString('base64');
    const message = sha ? `chore(blog): update post ${slug}` : `feat(blog): add post ${slug}`;

    const gh = await putFile({ owner, repo, path, branch, token, message, contentBase64, sha, committer });
    return NextResponse.json({ ok: true, path, commit: gh?.commit?.sha }, { status: 200 });
  } catch (err) {
    console.error('github-commit route error:', err);
    return NextResponse.json({ error: 'Commit failed', details: String(err) }, { status: 500 });
  }
}


