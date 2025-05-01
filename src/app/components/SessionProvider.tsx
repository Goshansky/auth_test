// src/app/components/SessionProvider.tsx
"use client";

import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { Session } from "next-auth";

interface SessionProviderProps {
    children: React.ReactNode;
    session: Session | null;
}

export default function SessionProvider({ children, session }: SessionProviderProps) {
    return <NextAuthProvider session={session}>{children}</NextAuthProvider>;
}
