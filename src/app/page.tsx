import Link from "next/link";
import { posts } from "@/lib/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
      <main className="max-w-2xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Блог</h1>
          {session ? (
              <Link
                  href="/account"
                  className="text-blue-600 hover:underline"
              >
                Аккаунт
              </Link>
          ) : (
              <Link
                  href="/login"
                  className="text-blue-600 hover:underline"
              >
                Войти
              </Link>
          )}
        </div>

        <ul className="space-y-4">
          {posts.map(post => (
              <li key={post.id} className="border p-4 rounded shadow-sm">
                <Link href={`/posts/${post.id}`} className="text-xl font-semibold hover:underline">
                  {post.title}
                </Link>
                <p className="text-gray-600 mt-1">{post.content.slice(0, 60)}...</p>
              </li>
          ))}
        </ul>
      </main>
  );
}

