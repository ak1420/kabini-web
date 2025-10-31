"use client";

import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();

  async function logout() {
    try {
      await fetch('/api/admin/logout', { method: 'POST', credentials: 'same-origin' });
    } finally {
      router.push('/admin/login');
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between rounded-lg border bg-white p-4">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold">Admin</div>
          <nav className="hidden gap-2 text-sm md:flex">
            <a className="rounded-md px-3 py-1 hover:bg-gray-100" href="/admin/posts">Posts</a>
            <a className="rounded-md px-3 py-1 hover:bg-gray-100" href="/admin/posts/new">Add New</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/')} className="rounded-md px-3 py-1 text-sm hover:bg-gray-100">View Site</button>
          <button onClick={logout} className="rounded-md bg-red-50 px-3 py-1 text-sm text-red-700">Sign out</button>
        </div>
      </header>

      <div className="grid min-h-[60vh] grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
        <aside className="rounded-lg border bg-white p-4 text-sm">
          <div className="mb-4 text-base font-semibold">Dashboard</div>
          <nav className="grid gap-1">
            <a className="rounded-md px-3 py-2 hover:bg-gray-100" href="/admin/posts">Posts</a>
            <a className="rounded-md px-3 py-2 hover:bg-gray-100" href="/admin/posts/new">Add New</a>
          </nav>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}


