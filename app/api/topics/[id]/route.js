import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = await params;
    const { title, description } = await request.json();
    await connectDB();
    console.log(id)
    console.log(title)
    console.log(description)
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic Edited" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = await params;
    await connectDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ topic }, { status: 200 });
}