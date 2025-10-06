"use client";
import { useState } from "react";

export default function CreatePost({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="เขียนโพสต์..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
      >
        โพสต์
      </button>
    </div>
  );
}
