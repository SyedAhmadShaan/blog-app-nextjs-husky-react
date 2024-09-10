// app/components/BlogPostCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface BlogPostCardProps {
  id: string;
  title: string;
  description: string;
  image: string | null;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-slate-500 rounded-lg shadow-lg overflow-hidden fade-in">
      {image && (
        <Image
          src={image}
          alt={title}
          width={720}
          height={480}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-100 mb-4">{description}</p>
        <Button className="bg-gray-400 rounded p-2">
          <Link href={`/blogs/${id}`} className="text-white hover:underline">
            Read more
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogPostCard;
