import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "topic created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed creating topic, ${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to find topic, ${error}` },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Topic Deleted!" },
      { statusCode: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to delete topic, ${error}` },
      { status: 500 }
    );
  }
}
