import { comments } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { postId: string } }) {
    return NextResponse.json(comments[params.postId] || []);
}
