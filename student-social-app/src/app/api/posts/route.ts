import { NextResponse } from "next/server";

let posts: any[] = [
  { id: 1, content: "สวัสดีชาวโลก 🌍", likes: 2, liked: false, comments: [] },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const { content } = await req.json();
  const newPost = { id: Date.now(), content, likes: 0, liked: false, comments: [] };
  posts.unshift(newPost);
  return NextResponse.json(newPost);
}
