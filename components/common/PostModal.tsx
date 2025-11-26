// components/common/PostModal.tsx
import React from "react";
import { Post } from "../../interfaces";

interface Props { post?: Post; onClose: () => void; }

const PostModal: React.FC<Props> = ({ post, onClose }) => {
  if (!post) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="mt-4">{post.body}</p>
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
