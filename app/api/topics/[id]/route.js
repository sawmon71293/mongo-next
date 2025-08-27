import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { title, description } = await request.json();
    await connectDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic Edited" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to edit topic, ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    console.log("id is ===>", params.id);
    const { id } = await params;
    await connectDB();
    const topic = await Topic.findOne({ _id: id });
    console.log("Topic was fetched>>>>", topic);
    return NextResponse.json({ topic }, { status: 200 });
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
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to delete topic, ${error}` },
      { status: 500 }
    );
  }
}
