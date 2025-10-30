'use client';

import { useEffect, useState } from 'react';
import PostForm from '../../../../../components/admin/PostForm';
import { Button as UIButton } from '../../../../../components/ui/button';
import { useRouter } from 'next/navigation';

export default function EditPostPage({ params }) {
  const { slug } = params;
  const [initial, setInitial] = useState(null);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
  const res = await fetch(`/api/admin/posts/${slug}`, { cache: 'no-store', credentials: 'same-origin' });
        if (res.status === 401) {
          window.location.href = '/admin/login';
          return;
        }
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setInitial({
          slug: data.slug,
          title: data.frontmatter.title || '',
          description: data.frontmatter.description || '',
          date: (data.frontmatter.date || '').slice(0, 10),
          coverImage: data.frontmatter.coverImage || '',
          author: data.frontmatter.author || '',
          draft: Boolean(data.frontmatter.draft),
          content: data.content || ''
        });
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [slug]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Edit Post</h1>
        <div className="flex items-center gap-2">
          <a href="/admin/posts"><UIButton size="sm" variant="outline">Back</UIButton></a>
          <UIButton size="sm" variant="destructive" onClick={async () => {
            if (!confirm('Delete this post?')) return;
            try {
              setDeleting(true);
              const res = await fetch(`/api/admin/posts/${slug}`, { method: 'DELETE', credentials: 'same-origin' });
              if (res.status === 401) {
                window.location.href = '/admin/login';
                return;
              }
              if (!res.ok) throw new Error('Delete failed');
              router.push('/admin/posts');
            } catch (e) {
              alert('Could not delete post: ' + (e?.message || 'unknown'));
            } finally {
              setDeleting(false);
            }
          }} disabled={deleting}>{deleting ? 'Deleting...' : 'Delete'}</UIButton>
        </div>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {initial ? (
        <PostForm mode="edit" initial={initial} onSaved={() => { /* stay on page */ }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


