import { useState } from "react";
import api from "../utils/api";
import CommentList from "./CommentList";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  const toggleLike = async () => {
    const res = await api.post("/posts/like", { postId: post.id });
    setLiked(res.data.liked);
    setLikes(res.data.likes);
  };

  const handleComment = async (text) => {
    const res = await api.post("/posts/comment", { postId: post.id, text });
    setComments(res.data.comments);
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <p className="mb-2">{post.content}</p>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleLike}
          className={`px-3 py-1 rounded ${
            liked ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          {liked ? "Unlike" : "Like"} ({likes})
        </button>
      </div>
      <CommentList comments={comments} onComment={handleComment} />
    </div>
  );
}
