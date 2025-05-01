"use client";

import { signIn } from "next-auth/react";

export default function LoginClientComponent() {
    return (
        <main className="flex flex-col items-center justify-center h-screen px-4">
            <h1 className="text-3xl font-bold mb-6">Вход</h1>
            <button
                onClick={() => signIn("google")}
                className="bg-black text-white px-5 py-3 rounded hover:bg-gray-800"
            >
                Войти через Google
            </button>
        </main>
    );
}