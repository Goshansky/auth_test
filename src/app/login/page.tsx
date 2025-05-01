// src/app/login/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import LoginClientComponent from "@/app/components/LoginClientComponent";

export default async function LoginPage() {
    const session = await getServerSession(authOptions);
    if (session) {
        redirect("/account");
    }

    return <LoginClientComponent />;
}

