// app/account/AccountClient.tsx
"use client";

import LogoutButton from "./LogoutButton";

type Props = {
    session: {
        user?: {
            name?: string | null;
            email?: string | null;
        };
    };
};

export default function AccountClient({ session }: Props) {
    return (
        <main className="flex flex-col items-center justify-center h-screen px-4">
            <h1 className="text-2xl font-semibold mb-2">
                Добро пожаловать, {session.user?.name}
            </h1>
            <p className="mb-6 text-gray-600">{session.user?.email}</p>
            <LogoutButton />
        </main>
    );
}
