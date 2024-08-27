import React from 'react';
import Image from 'next/image';

interface BlogPostCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ id, title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in">
      <Image
        src={image}
        alt={title}
        width={720}
        height={480}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={`/blogs/${id}`} className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
