// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { readComments } from "@/lib/comments";
import CommentForm from "./CommentForm";
import { getPostById } from "@/utils/posts"; // Импортируйте функцию из файла утилит

export const dynamic = "force-dynamic";

export default async function PostPage(props: never) {
    const { id } = props.params;
    const post = await getPostById(id);
    const allComments = await readComments();
    const postComments = allComments[id] || [];
    const session = await getServerSession(authOptions);

    if (!post) return notFound();

    return (
        <main className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="mb-8">{post.content}</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Комментарии</h2>
                {postComments.length === 0 ? (
                    <p className="text-gray-500">Комментариев пока нет.</p>
                ) : (
                    <ul className="space-y-3">
                        {postComments.map((c, i) => (
                            <li key={i} className="border rounded p-3">
                                <p className="font-semibold">{c.user}</p>
                                <p>{c.message}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {session?.user ? (
                <CommentForm postId={id} user={session.user.name || "Аноним"} />
            ) : (
                <p className="text-gray-600">Войдите, чтобы оставить комментарий.</p>
            )}
        </main>
    );
}
