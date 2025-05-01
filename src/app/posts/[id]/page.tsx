import { posts, comments } from "@/lib/data";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import CommentForm from "./CommentForm";

type Props = {
    params: { id: string };
};

export default async function PostPage({ params }: Props) {
    const post = posts.find((p) => p.id === params.id);
    const postComments = comments[params.id] || [];
    const session = await getServerSession(authOptions);

    if (!post) return notFound();

    return (
        <main className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="mb-8">{post.content}</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Комментарии</h2>
                {postComments.length === 0 && <p className="text-gray-500">Комментариев пока нет.</p>}
                <ul className="space-y-3">
                    {postComments.map((c, i) => (
                        <li key={i} className="border rounded p-3">
                            <p className="font-semibold">{c.user}</p>
                            <p>{c.message}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {session ? (
                <CommentForm postId={params.id} user={session.user?.name || "Аноним"} />
            ) : (
                <p className="text-gray-600">Войдите, чтобы оставить комментарий.</p>
            )}
        </main>
    );
}