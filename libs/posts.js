import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontmatter = {
    title: data.title || realSlug,
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    coverImage: data.coverImage || null,
    author: data.author || null,
    draft: Boolean(data.draft),
    // Extended fields
    tags: Array.isArray(data.tags)
      ? data.tags
      : typeof data.tags === 'string'
        ? data.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
    seoTitle: data.seoTitle || null,
    seoDescription: data.seoDescription || null,
    keywords: Array.isArray(data.keywords)
      ? data.keywords
      : typeof data.keywords === 'string'
        ? data.keywords.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
    socialImage: data.socialImage || null,
    twitterCard: data.twitterCard || null,
    canonicalUrl: data.canonicalUrl || null,
    slug: realSlug
  };

  return { frontmatter, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p) => !p.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
  return posts;
}


