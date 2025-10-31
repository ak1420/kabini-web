import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '../../../components/MDXComponents';
import { getAllPosts, getPostBySlug, getPostSlugs } from '../../../libs/posts';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const { frontmatter } = getPostBySlug(slug);
    const {
      title,
      description,
      coverImage,
      seoTitle,
      seoDescription,
      socialImage,
      twitterCard,
      canonicalUrl
    } = frontmatter;
    const metaTitle = seoTitle || title;
    const metaDesc = seoDescription || description;
    const ogImage = socialImage || coverImage || undefined;
    return {
      title: metaTitle,
      description: metaDesc,
      alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
      openGraph: {
        title: metaTitle,
        description: metaDesc,
        images: ogImage ? [ogImage] : []
      },
      twitter: {
        card: ogImage ? (twitterCard || 'summary_large_image') : 'summary',
        title: metaTitle,
        description: metaDesc,
        images: ogImage ? [ogImage] : []
      }
    };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="prose prose-slate max-w-none">
      <header className="not-prose mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">{frontmatter.title}</h1>
        <div className="mt-2 text-sm text-gray-500">
          <time className='py-2 px-4 bg-blue-200 text-neutral-900 font-medium rounded-full'>{new Date(frontmatter.date).toLocaleDateString()}</time>
          {frontmatter.author ? <span> • {frontmatter.author}</span> : null}
        </div>
        {frontmatter.coverImage ? (
          <div className="mt-6 overflow-hidden rounded-lg">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              width={1200}
              height={630}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}
      </header>
      <MDXRemote source={content} components={MDXComponents} />
    </article>
  );
}


