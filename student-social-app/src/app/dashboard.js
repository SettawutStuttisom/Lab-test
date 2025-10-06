import { useEffect, useState } from "react";
import api from "../../utils/api";
import Navbar from "../../components/Navbar";
import MemberList from "../../components/MemberList";
import PostCard from "../../components/PostCard";
import CreatePost from "../../components/CreatePost";

export default function Dashboard() {
  const [members, setMembers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/members?year=2566").then((res) => setMembers(res.data));
    api.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">สมาชิกในชั้นปี 2566</h2>
          <MemberList members={members} />
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">โพสต์ล่าสุด</h2>
          <CreatePost onPost={(p) => setPosts([p, ...posts])} />
          <div className="space-y-4 mt-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
