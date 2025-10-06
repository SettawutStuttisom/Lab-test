import { useState } from "react";

export default function CommentList({ comments = [], onComment }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onComment(text);
      setText("");
    }
  };

  return (
    <div className="mt-3">
      <div className="space-y-1 mb-2">
        {comments.map((c, i) => (
          <p key={i} className="text-sm text-gray-700">
            💬 {c}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={text}
          placeholder="พิมพ์ความคิดเห็น..."
          className="flex-1 border p-1 rounded-l"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-3 rounded-r"
        >
          ส่ง
        </button>
      </div>
    </div>
  );
}
