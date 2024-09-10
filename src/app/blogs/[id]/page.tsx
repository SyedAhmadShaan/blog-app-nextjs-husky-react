"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CommentButton from "@/components/CommentButton";

interface Post {
  id: string;
  title: string;
  description: string;
  cover_image: string | null;
  published_at: string;
  body_html: string;
  tags: string[];
}

interface Comment {
  id: number;
  userName: string;
  text: string;
}

const PostPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const response = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await response.json();
        console.log("Fetched post data:", data); // Debug log
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewComment(event.target.value);
  };

  const handleCommentClick = () => {
    if (newComment.trim() === "") return;

    const comment: Comment = {
      id: comments.length + 1,
      userName: "User", // Replace with actual user name if available
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center text-gray-100 py-8">
      <div className="w-1/6 hidden lg:block">
        {/* Left Ad space */}
        <div className="bg-slate-700 h-full flex items-center justify-center">
          <span></span>
        </div>
      </div>
      <div className="w-full lg:w-2/3 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
        {post.cover_image && (
          <Image
            src={post.cover_image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto mb-6 rounded-lg shadow-lg"
          />
        )}
        <div className="prose max-w-none mb-8">
          {post.body_html ? (
            <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
          ) : (
            <p>No content available</p>
          )}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-slate-400 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4">
                <div className="bg-slate-400 w-10 h-10 rounded-full"></div>
                <div className="flex-1 bg-slate-300 p-4 rounded-lg">
                  <h3 className="text-lg text-black font-semibold">
                    {comment.userName}
                  </h3>
                  <p className="text-black">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <textarea
              className="w-full h-24 p-4 bg-slate-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <CommentButton onClick={handleCommentClick} />
          </div>
        </div>
      </div>
      <div className="w-1/6 hidden lg:block">
        {/* Right Ad space */}
        <div className="bg-slate-700 h-full flex items-center justify-center">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
