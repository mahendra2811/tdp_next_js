import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import HeroWithHeader from '@/components/common/HeroWithHeader';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Thar Desert Photography',
  description:
    'Explore our blog for insights on wildlife photography, conservation efforts, and the natural beauty of the Thar Desert.',
};

// Define BlogPost interface
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
}

async function getBlogPosts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/blogs`,
      { cache: 'no-store' }
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="min-h-screen">
      <HeroWithHeader
        title="Our Blog"
        subtitle="Insights, Stories & Photography Tips"
        backgroundImage="/assets/Images/hero-gallery.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Server-side rendered blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.length > 0 ? (
              blogPosts.map((post: BlogPost) => <BlogCard key={post._id} post={post} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700">No blog posts found</h3>
                <p className="mt-2 text-gray-500">Check back soon for new content!</p>
              </div>
            )}
          </div>
          
          {/* Uncomment this to use client-side rendering with the BlogList component */}
          {/* <BlogList /> */}
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  // Format date
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
