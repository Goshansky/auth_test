import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import AccountClient from "./AccountClient";

export default async function AccountPage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");

    return <AccountClient session={session} />;
}

