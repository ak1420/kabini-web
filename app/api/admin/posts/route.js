import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { verifyAdminRequest } from '../../../../libs/adminAuth';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export async function GET(request) {
    if (!verifyAdminRequest(request)) return NextResponse.json({}, { status: 401 });
    if (!fs.existsSync(postsDirectory)) fs.mkdirSync(postsDirectory, { recursive: true });
    const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));
    const posts = files.map((file) => {
        const full = path.join(postsDirectory, file);
        const raw = fs.readFileSync(full, 'utf8');
        const { data } = matter(raw);
        const slug = file.replace(/\.mdx$/, '');
        return { frontmatter: { ...data, slug } };
    });
    return NextResponse.json({ posts });
}

export async function POST(request) {
    if (!verifyAdminRequest(request)) return NextResponse.json({}, { status: 401 });
    const body = await request.json();
  const {
    slug,
    title,
    description = '',
    date,
    coverImage = '',
    author = '',
    draft = false,
    content = '',
    tags = '',
    seoTitle = '',
    seoDescription = '',
    keywords = '',
    socialImage = '',
    twitterCard = '',
    canonicalUrl = ''
  } = body;
    if (!slug || !title || !date) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    if (!fs.existsSync(postsDirectory)) fs.mkdirSync(postsDirectory, { recursive: true });
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    if (fs.existsSync(filePath)) return NextResponse.json({ error: 'Exists' }, { status: 409 });
  const fm = {
    title,
    description,
    date,
    coverImage,
    author,
    draft,
    tags,
    seoTitle,
    seoDescription,
    keywords,
    socialImage,
    twitterCard,
    canonicalUrl
  };
  const frontmatter = matter.stringify(content, fm);
    fs.writeFileSync(filePath, frontmatter, 'utf8');
    return NextResponse.json({ ok: true });
}


