// src/app/api/comments/[postId]/route.ts
import { comments } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: never) {
    const { postId } = params;
    return NextResponse.json(comments[postId] || []);
}







