import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const year = searchParams.get("year") || "2566";

  const members = [
    { id: 1, name: "สมชาย", year },
    { id: 2, name: "สมหญิง", year },
    { id: 3, name: "อานันท์", year },
  ];

  return NextResponse.json(members);
}
