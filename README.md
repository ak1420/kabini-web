# Next.js Kabini.ai Blog (App Router)

A clean, modern blog system using Next.js App Router, MDX, gray-matter, Tailwind CSS, and next-mdx-remote. Posts are stored as `.mdx` files under `content/posts`.

## Getting Started

```bash
npm install
npm run dev
# production
npm run build && npm start
```

### Admin Login
- Visit `/admin/login` and sign in with:
  - Email: `admin.blog@kabini.ai`
  - Password: `kabini@2026`

## Add a New Post
1. Create `content/posts/your-post-slug.mdx`.
2. Include YAML frontmatter at the top:

```mdx
---
title: "Your Post Title"
description: "Short summary of the post"
date: "2025-10-15"
coverImage: "https://.../image.jpg" # optional
author: "Your Name" # optional
---

Your MDX content here. You can use React components like:

<Alert type="info">Informational box</Alert>
<Button href="/blog">Read more</Button>
```

3. Visit `/blog/your-post-slug`.

## Customize the UI
- Global layout: `app/layout.jsx`
- Styles: `app/globals.css` (Tailwind + `@tailwindcss/typography`)
- Blog list: `app/blog/page.jsx`
- Blog detail: `app/blog/[slug]/page.jsx`
- Reusable components: `components/` and `components/MDXComponents.js`

## How It Works
- MDX files live in `content/posts`.
- `libs/posts.js` parses frontmatter with `gray-matter` and exposes helpers.
- List page loads all posts, sorted by latest date.
- Detail page renders MDX via `next-mdx-remote/rsc` and maps React components.
- SEO metadata is generated from frontmatter.

## Notes
- Next Image supports remote images per `next.config.mjs`.
- Responsive grid and typography handled by Tailwind.
 - Admin routes and pages are protected via cookie-based token in `middleware.js`.
