import { NextResponse } from "next/server";

// local state posts
let posts: any[] = [
  { id: 1, content: "สวัสดีชาวโลก 🌍", likes: 2, liked: false, comments: [] },
];

export async function POST(req: Request) {
  const { postId, comment } = await req.json();
  const post = posts.find((p: any) => p.id === postId);
  if (post) {
    post.comments.push(comment);
    return NextResponse.json({ comments: post.comments });
  }
  return NextResponse.json({ error: "Post not found" }, { status: 404 });
}
