import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton";

export default async function AccountPage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");

    return (
        <main className="flex flex-col items-center justify-center h-screen px-4">
            <h1 className="text-2xl font-semibold mb-2">Добро пожаловать, {session.user?.name}</h1>
            <p className="mb-6 text-gray-600">{session.user?.email}</p>
            <LogoutButton />
        </main>
    );
}

