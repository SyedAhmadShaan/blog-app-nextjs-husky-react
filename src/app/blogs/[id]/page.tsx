import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, `${id}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const blogPost = JSON.parse(fileContents) as BlogPost;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="flex justify-center w-full py-12 text-4xl font-bold mb-6 text-center sm:text-left">{blogPost.title}</h1>
      <div className="flex justify-center w-full rounded-lg overflow-hidden mb-8">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          width={500}
          height={500}
          
          className="w-8/12 h-4/12 object-cover rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mx-auto">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </div>
    </div>
  );
}
