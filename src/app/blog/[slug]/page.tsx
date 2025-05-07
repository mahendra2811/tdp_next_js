import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';

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

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | Thar Desert Photography',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${blog.title} | Thar Desert Photography`,
    description: blog.description,
  };
}

// Fetch blog post by slug
async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/blogs/slug/${slug}`,
      { cache: 'no-store' }
    );
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }
    
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch related blog posts
async function getRelatedBlogs(slug: string): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/blogs/related/${slug}`,
      { cache: 'no-store' }
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch related blog posts');
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching related blog posts:', error);
    return [];
  }
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }
  
  const relatedBlogs = await getRelatedBlogs(params.slug);
  
  // Format date
  const formattedDate = new Date(blog.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="relative bg-black">
        <Header />
      </div>
      
      {/* Blog Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center text-sm md:text-base">
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <span>{blog.author}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          
          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <RelatedBlogCard key={relatedBlog._id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Back to Blog */}
      <div className="py-8 text-center">
        <Link 
          href="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
}

function RelatedBlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative h-48 w-full">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
}