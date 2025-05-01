"use server";

import { readComments, writeComments } from "@/lib/comments";

export async function addComment(postId: string, user: string, message: string) {
    const allComments = await readComments();
    if (!allComments[postId]) allComments[postId] = [];
    allComments[postId].push({ user, message });
    await writeComments(allComments);
}

