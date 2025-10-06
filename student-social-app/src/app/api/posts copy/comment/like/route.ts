import { NextResponse } from "next/server";

// local state posts
let posts: any[] = [
  { id: 1, content: "สวัสดีชาวโลก 🌍", likes: 2, liked: false, comments: [] },
];

export async function POST(req: Request) {
  const { postId } = await req.json();
  const post = posts.find((p: any) => p.id === postId);
  if (post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    return NextResponse.json({ liked: post.liked, likes: post.likes });
  }
  return NextResponse.json({ error: "Post not found" }, { status: 404 });
}
