'use client';

import React from 'react';
import AuthGuard from '@/components/admin/AuthGuard';
import BlogForm from '@/components/admin/BlogForm';

export default function EditBlogPage({ params }: { params: { id: string } }) {
  return (
    <AuthGuard>
      <BlogForm blogId={params.id} isEdit={true} />
    </AuthGuard>
  );
}