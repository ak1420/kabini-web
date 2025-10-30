
export const metadata = {
  title: 'About',
  description: 'About this blog'
};

export default function AboutPage() {
  return (
    <section className="prose prose-slate max-w-none">
        <h1>About</h1>
        <p>
          This MDX-powered blog is built with Next.js App Router. It supports React components inside
          Markdown, fast static generation, and a simple admin to create and publish posts.
        </p>
        <h2>What we built</h2>
        <ul>
          <li>MDX posts with frontmatter</li>
          <li>SEO metadata per post</li>
          <li>Responsive, clean Tailwind UI</li>
          <li>Admin for creating, editing, and deleting posts</li>
        </ul>
    </section>
  );
}


