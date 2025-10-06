"use client";
import Navbar from "../../components/Navbar";
import MemberList from "../../components/MemberList";
import CreatePost from "../../components/CreatePost";
import PostCard from "../../components/PostCard";
import { fetcher } from "../../utils/api";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [members, setMembers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  const loadMembers = async () => {
    const data = await fetcher("/api/members?year=2566");
    setMembers(data);
  };

  const loadPosts = async () => {
    const data = await fetcher("/api/posts");
    setPosts(data);
  };

  useEffect(() => {
    loadMembers();
    loadPosts();
  }, []);

  const handlePost = async (content: string) => {
    const newPost = await fetcher("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">สมาชิกปี 2566</h2>
          <MemberList members={members} />
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">โพสต์ล่าสุด</h2>
          <CreatePost onPost={handlePost} />
          <div className="space-y-4 mt-4">
            {posts.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
