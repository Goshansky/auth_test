"use server";

import { comments } from "@/lib/data";

export async function addComment(postId: string, user: string, message: string) {
    if (!comments[postId]) comments[postId] = [];
    comments[postId].push({ user, message });
}
