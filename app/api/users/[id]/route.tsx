import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  if (id > 10)
    return NextResponse.json(
      { error: "User not found" },
      {
        status: 404,
      }
    );

  return NextResponse.json({ id: 1, name: "Tushar" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const { id } = await params;

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name });
}
