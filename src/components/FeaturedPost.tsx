import React from 'react';
import Image from 'next/image';

interface FeaturedPostProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ id, title, description, image, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 fade-in">
      <div className="p-6">
        <h3 className="flex justify-center text-3xl font-semibold mb-4">{title}</h3>
        <p className="flex justify-center text-gray-600 mb-4">{description}</p>
      </div>
      <Image
        src={image}
        alt={title}
        width={1200}
        height={600}
        className="w-full max-h-lvh object-cover"
      />
      <div className="p-6">
        <a href={`/blogs/${id}`} className="text-blue-500 hover:underline flex justify-center">
          Read more
        </a>
      </div>
    </div>
  );
};

export default FeaturedPost;
