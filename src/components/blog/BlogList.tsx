'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogApi } from '@/utils/api';

// Import the BlogData type from the API
import type { BlogData } from '@/utils/api';

// Define a client-side version of BlogData with string dates
interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string[];
  publishedDate: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    currentPage: 1,
  });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await blogApi.getBlogs();

        if (response.success && response.data) {
          // Convert Date objects to strings for rendering
          const formattedPosts = (response.data.data || []).map((post) => ({
            ...post,
            publishedDate: post.publishedDate.toString(),
            createdAt: post.createdAt.toString(),
            updatedAt: post.updatedAt.toString(),
          }));

          setBlogPosts(formattedPosts);
          setPagination({
            total: response.data.total || 0,
            totalPages: response.data.totalPages || 0,
            currentPage: response.data.currentPage || 1,
          });
        } else {
          setError(response.message || 'Failed to fetch blog posts');
          setBlogPosts([]);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('An error occurred while fetching blog posts');
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">No blog posts found</p>
        <p className="text-gray-400">Check back soon for new content!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500 text-sm">
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-gray-500 text-sm">{post.author}</p>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
