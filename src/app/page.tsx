// src/app/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import HomeClientComponent from "@/app/components/HomeClientComponent";

export default async function HomePage() {
    const session = await getServerSession(authOptions);

    return <HomeClientComponent session={session} />;
}

