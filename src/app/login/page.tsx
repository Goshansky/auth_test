import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default async function LoginPage() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/account");

    return (
        <main className="flex flex-col items-center justify-center h-screen px-4">
            <h1 className="text-3xl font-bold mb-6">Вход</h1>
            <button
                onClick={() => signIn("github")}
                className="bg-black text-white px-5 py-3 rounded hover:bg-gray-800"
            >
                Войти через GitHub
            </button>
        </main>
    );
}

