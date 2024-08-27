import React from 'react';
import BlogPostCard from './BlogPostCard'; // Import the BlogPostCard component

interface BlogListProps {
  blogs: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogPostCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default BlogList;
