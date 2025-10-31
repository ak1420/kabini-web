'use client';

import { useEffect, useState } from 'react';
import { Button as UIButton } from '../../../components/ui/button';

export default function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState({});

  async function load() {
    try {
      const res = await fetch('/api/admin/posts', { cache: 'no-store', credentials: 'same-origin' });
      if (res.status === 401) {
        window.location.href = '/admin/login';
        return;
      }
      if (!res.ok) throw new Error('Failed to load');
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function remove(slug) {
    if (!confirm('Delete this post?')) return;
    try {
      setDeleting((d) => ({ ...d, [slug]: true }));
      const res = await fetch(`/api/admin/posts/${slug}`, { method: 'DELETE', cache: 'no-store', credentials: 'same-origin' });
      if (res.status === 401) {
        window.location.href = '/admin/login';
        return;
      }
      if (!res.ok) throw new Error('Failed to delete');
      // Optimistically remove from UI
      setPosts((prev) => prev.filter((p) => p.frontmatter.slug !== slug));
    } catch (e) {
      alert('Could not delete post: ' + (e?.message || 'unknown error'));
    } finally {
      setDeleting((d) => ({ ...d, [slug]: false }));
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <a href="/admin/posts/new"><UIButton>Add New</UIButton></a>
      </div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <ul className="divide-y rounded-md border">
        {posts.map((p) => (
          <li key={p.frontmatter.slug} className="flex items-center justify-between p-3">
            <div>
              <div className="font-medium">{p.frontmatter.title}</div>
              <div className="text-xs text-gray-500">/{p.frontmatter.slug} {p.frontmatter.draft ? '(draft)' : ''}</div>
            </div>
            <div className="flex gap-2 text-sm">
              <UIButton asChild size="sm" variant="outline"><a href={`/admin/posts/${p.frontmatter.slug}/edit`}>Edit</a></UIButton>
              <UIButton size="sm" variant="destructive" onClick={() => remove(p.frontmatter.slug)} disabled={Boolean(deleting[p.frontmatter.slug])}>
                {deleting[p.frontmatter.slug] ? 'Deleting...' : 'Delete'}
              </UIButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


