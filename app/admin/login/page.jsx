"use client";

import { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button as UIButton } from '../../../components/ui/button';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        // go straight to posts listing
        window.location.href = '/admin/posts';
        return;
      }
      if (res.status === 401) setError('Invalid credentials');
      else setError('Login failed');
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label>Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <UIButton className="w-full" type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</UIButton>
        <p className="mt-2 text-xs text-gray-500">Credentials come from environment variables (ADMIN_EMAIL / ADMIN_PASSWORD) or local defaults.</p>
      </form>
    </div>
  );
}


