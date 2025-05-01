// src/app/components/Navbar.tsx
"use client"; // Эта директива должна быть первой строкой

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="bg-gray-100 px-6 py-4 shadow-md flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">Блог</Link>

            <div className="space-x-4">
                {session ? (
                    <>
                        <Link href="/account" className="text-blue-600 hover:underline">
                            {session.user?.name || "Аккаунт"}
                        </Link>
                        <button
                            onClick={() => signOut()}
                            className="text-red-600 hover:underline"
                        >
                            Выйти
                        </button>
                    </>
                ) : (
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Войти
                    </Link>
                )}
            </div>
        </nav>
    );
}
