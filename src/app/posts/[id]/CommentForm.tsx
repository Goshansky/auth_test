"use client";

import { useState, useTransition } from "react";
import { addComment } from "./action";
import {useRouter} from "next/navigation";

type Props = {
    postId: string;
    user: string;
};

export default function CommentForm({ postId, user }: Props) {
    const [message, setMessage] = useState("");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            await addComment(postId, user, message);
            setMessage("");
            router.refresh(); // 🔁 перезагрузить серверные данные
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
                className="w-full border p-2 rounded"
                rows={3}
                placeholder="Оставьте комментарий..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button
                type="submit"
                disabled={isPending || !message}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
                Отправить
            </button>
        </form>
    );
}
