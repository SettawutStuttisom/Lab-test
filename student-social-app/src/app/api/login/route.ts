import { NextResponse } from "next/server";

const USERS = [
  { email: "test@example.com", password: "1234", name: "สมชาย" },
  { email: "user2@example.com", password: "abcd", name: "สมหญิง" },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = USERS.find(u => u.email === email && u.password === password);
  if (user) return NextResponse.json({ success: true, name: user.name });
  return NextResponse.json({ success: false });
}
