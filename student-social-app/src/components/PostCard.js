"use client";
import { useState } from "react";
import { fetcher } from "../utils/api"; // แก้ไขจาก default import
import CommentList from "./CommentList";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = async () => {
    const data = await fetcher("/api/posts/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: post.id }),
    });
    setLiked(data.liked);
    setLikes(data.likes);
  };

  return (
    <div className="border p-4 rounded bg-white">
      <p className="mb-2">{post.content}</p>
      <button
        onClick={handleLike}
        className={`mr-2 ${liked ? "text-red-500" : "text-gray-500"}`}
      >
        {liked ? "❤️" : "🤍"} {likes}
      </button>
      <CommentList post={post} />
    </div>
  );
}
