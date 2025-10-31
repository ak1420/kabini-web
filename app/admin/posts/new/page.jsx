'use client';

import PostForm from '../../../../components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Add New Post</h1>
      <PostForm mode="create" onSaved={(slug) => { window.location.href = `/admin/posts/${slug}/edit`; }} />
    </div>
  );
}


