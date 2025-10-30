import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { verifyAdminRequest } from '../../../../../libs/adminAuth';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export async function GET(request, { params }) {
  if (!verifyAdminRequest(request)) return NextResponse.json({}, { status: 401 });
  const { slug } = params;
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return NextResponse.json({}, { status: 404 });
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return NextResponse.json({ slug, frontmatter: data, content });
}

export async function PUT(request, { params }) {
  if (!verifyAdminRequest(request)) return NextResponse.json({}, { status: 401 });
  const { slug } = params;
  const body = await request.json();
  const {
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
  if (!title || !date) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return NextResponse.json({}, { status: 404 });
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
  const fileContent = matter.stringify(content, fm);
  fs.writeFileSync(filePath, fileContent, 'utf8');
  return NextResponse.json({ ok: true });
}

export async function DELETE(request, { params }) {
  if (!verifyAdminRequest(request)) return NextResponse.json({}, { status: 401 });
  const { slug } = params;
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return NextResponse.json({}, { status: 404 });
  fs.unlinkSync(filePath);
  return NextResponse.json({ ok: true });
}


