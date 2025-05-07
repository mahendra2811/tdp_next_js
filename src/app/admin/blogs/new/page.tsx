'use client';

import React from 'react';
import AuthGuard from '@/components/admin/AuthGuard';
import BlogForm from '@/components/admin/BlogForm';

export default function NewBlogPage() {
  return (
    <AuthGuard>
      <BlogForm />
    </AuthGuard>
  );
}