import React from "react";

interface CommentButtonProps {
  onClick: () => void;
}

function CommentButton({ onClick }: CommentButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
    >
      Comment
    </button>
  );
}

export default CommentButton;
