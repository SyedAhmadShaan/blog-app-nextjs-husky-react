import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import BlogList from '../components/BlogList';
import { getBlogPosts } from '../utils/blogUtils'; 
import path from 'path';

export default function HomePage() {
  const dataDir = path.join(process.cwd(), 'data');
  const blogs = getBlogPosts(dataDir);
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPost = sortedBlogs[0];
  const otherPosts = sortedBlogs.slice(1);

  return (
    <div className="container mx-auto p-6">
      {featuredPost && (
        <FeaturedPost 
          id={featuredPost.id}
          title={featuredPost.title}
          description={featuredPost.description}
          image={featuredPost.image}
          date={featuredPost.date}
        />
      )}

      <h1 className="text-4xl font-bold text-center mb-8 fade-in">Latest Blog Posts</h1>
      <BlogList blogs={otherPosts} />
    </div>
  );
}
