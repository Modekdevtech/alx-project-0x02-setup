// components/common/PostCard.tsx
import React from "react";
import { Post } from "../../interfaces";

interface Props { post: Post; onOpen?: (post: Post) => void; }

const PostCard: React.FC<Props> = ({ post, onOpen }) => {
  return (
    <div className="border rounded p-4 hover:shadow-md">
      <h3 className="font-semibold text-lg">{post.title}</h3>
      <p className="mt-2 text-sm line-clamp-3">{post.body}</p>
      {onOpen && (
        <button className="mt-3 text-sm text-blue-600 underline" onClick={() => onOpen(post)}>
          Read more
        </button>
      )}
    </div>
  );
};

export default PostCard;
