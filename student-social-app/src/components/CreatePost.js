import { useState } from "react";
import api from "../utils/api";

export default function CreatePost({ onPost }) {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    if (!content.trim()) return;
    const res = await api.post("/posts", { content });
    onPost(res.data);
    setContent("");
  };

  return (
    <div className="bg-white rounded shadow p-3">
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows="3"
        placeholder="คุณกำลังคิดอะไรอยู่?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handlePost}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        โพสต์
      </button>
    </div>
  );
}
