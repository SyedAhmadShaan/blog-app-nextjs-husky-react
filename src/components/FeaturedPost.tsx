// app/components/FeaturedPosts.tsx

import React from "react";
import BlogPostCard from "./BlogPostCard";

interface Post {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  published_at: string;
}

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className="py-8 bg-slate-500 text-gray-100">
      {" "}
      {/* Adjusted padding here */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          {" "}
          {/* Adjusted margin here */}
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id.toString()}
              title={post.title}
              description={post.description || "No description available"}
              image={post.cover_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
