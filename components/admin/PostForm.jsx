'use client';

import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Checkbox } from '../../components/ui/checkbox';
import { Button as UIButton } from '../../components/ui/button';

export default function PostForm({ initial, onSaved, mode = 'create' }) {
  const [form, setForm] = useState({
    slug: initial?.slug || '',
    title: initial?.title || '',
    description: initial?.description || '',
    date: (initial?.date || new Date().toISOString().slice(0, 10)),
    coverImage: initial?.coverImage || '',
    author: initial?.author || '',
    draft: Boolean(initial?.draft) || false,
    content: initial?.content || '',
    tags: Array.isArray(initial?.tags) ? initial.tags.join(', ') : (initial?.tags || ''),
    seoTitle: initial?.seoTitle || '',
    seoDescription: initial?.seoDescription || '',
    keywords: Array.isArray(initial?.keywords) ? initial.keywords.join(', ') : (initial?.keywords || ''),
    socialImage: initial?.socialImage || '',
    twitterCard: initial?.twitterCard || 'summary_large_image',
    canonicalUrl: initial?.canonicalUrl || ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const method = mode === 'edit' ? 'PUT' : 'POST';
    const url = mode === 'edit' ? `/api/admin/posts/${form.slug}` : '/api/admin/posts';
    const payload = {
      ...form,
      // Keep comma strings for tags/keywords to be stored as-is; server will persist.
    };
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload),
      cache: 'no-store'
    });
    setLoading(false);
    if (res.status === 401) {
      window.location.href = '/admin/login';
      return;
    }
    if (!res.ok) {
      const t = await res.text();
      setMessage(`Error: ${t}`);
      return;
    }
    setMessage('Saved');
    onSaved?.(form.slug);
  }

  async function commitToGithub(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const payload = {
        title: form.title,
        slug: form.slug,
        description: form.description,
        date: form.date,
        tags: form.tags,
        coverImage: form.coverImage,
        author: form.author,
        draft: form.draft,
        seoTitle: form.seoTitle,
        seoDescription: form.seoDescription,
        keywords: form.keywords,
        socialImage: form.socialImage,
        twitterCard: form.twitterCard,
        canonicalUrl: form.canonicalUrl,
        content: form.content,
      };
      const res = await fetch('/api/admin/github-commit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
        cache: 'no-store'
      });
      setLoading(false);
      if (res.status === 401) {
        window.location.href = '/admin/login';
        return;
      }
      const json = await res.json();
      if (!res.ok) {
        setMessage(`Commit failed: ${json.error || 'Unknown error'}`);
        return;
      }
      setMessage('Committed to GitHub. Your site will rebuild on push.');
      onSaved?.(form.slug);
    } catch (err) {
      setLoading(false);
      setMessage(`Commit failed: ${String(err)}`);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="rounded-lg border bg-white p-4">
        <h2 className="mb-4 text-base font-semibold">Basic Information</h2>
        <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <Label>Slug</Label>
          <Input value={form.slug} onChange={(e) => updateField('slug', e.target.value)} required disabled={mode === 'edit'} />
        </div>
        <div>
          <Label>Date</Label>
          <Input type="date" value={form.date} onChange={(e) => updateField('date', e.target.value)} required />
        </div>
        </div>
        <div className="mt-3">
          <Label>Title</Label>
          <Input value={form.title} onChange={(e) => updateField('title', e.target.value)} required />
        </div>
        <div className="mt-3">
          <Label>Description</Label>
          <Textarea value={form.description} onChange={(e) => updateField('description', e.target.value)} rows={3} />
        </div>
        <div className="mt-3">
          <Label>Banner Image URL</Label>
          <Input value={form.coverImage} onChange={(e) => updateField('coverImage', e.target.value)} placeholder="https://example.com/banner.jpg" />
        </div>
        <div className="mt-3">
          <Label>Tags (comma-separated)</Label>
          <Input value={form.tags} onChange={(e) => updateField('tags', e.target.value)} placeholder="intro, welcome" />
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <h2 className="mb-4 text-base font-semibold">SEO & Metadata Settings</h2>
        <div className="grid gap-3">
          <div>
            <Label>SEO Title</Label>
            <Input value={form.seoTitle} onChange={(e) => updateField('seoTitle', e.target.value)} placeholder="Optional; defaults to post title" />
          </div>
          <div>
            <Label>SEO Description</Label>
            <Textarea value={form.seoDescription} onChange={(e) => updateField('seoDescription', e.target.value)} rows={3} placeholder="Optional; defaults to post description" />
          </div>
          <div>
            <Label>Keywords</Label>
            <Input value={form.keywords} onChange={(e) => updateField('keywords', e.target.value)} placeholder="blog, guide, ai" />
          </div>
          <div>
            <Label>Author Name</Label>
            <Input value={form.author} onChange={(e) => updateField('author', e.target.value)} />
          </div>
          <div>
            <Label>Social Share Image URL</Label>
            <Input value={form.socialImage} onChange={(e) => updateField('socialImage', e.target.value)} placeholder="https://example.com/social.jpg" />
          </div>
          <div>
            <Label>Twitter Card Type</Label>
            <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm" value={form.twitterCard} onChange={(e) => updateField('twitterCard', e.target.value)}>
              <option value="summary">Summary</option>
              <option value="summary_large_image">Summary Large Image</option>
            </select>
          </div>
          <div>
            <Label>Canonical URL</Label>
            <Input value={form.canonicalUrl} onChange={(e) => updateField('canonicalUrl', e.target.value)} placeholder="https://yourblog.com/blog/post-slug" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <h2 className="mb-4 text-base font-semibold">Content (Markdown)</h2>
        <Textarea className="h-64 font-mono" value={form.content} onChange={(e) => updateField('content', e.target.value)} required />
        <div className="mt-3 flex items-center gap-2">
          <Checkbox id="draft" checked={form.draft} onChange={(e) => updateField('draft', e.target.checked)} />
          <label htmlFor="draft" className="text-sm">Draft (hidden from public)</label>
        </div>
      </div>
      {message ? <p className="text-sm text-green-700">{message}</p> : null}
      <div className="flex items-center gap-3">
        <UIButton type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save (DB)'}</UIButton>
        <UIButton type="button" onClick={commitToGithub} disabled={loading} className="bg-blue-600 text-white hover:bg-blue-700">{loading ? 'Committing...' : 'Commit to GitHub'}</UIButton>
      </div>
    </form>
  );
}


