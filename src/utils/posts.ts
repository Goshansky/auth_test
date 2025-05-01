// src/utils/posts.ts

import { posts } from "@/lib/data";

export async function getPostById(id: string) {
    return posts.find((post) => post.id === id) ?? null;
}