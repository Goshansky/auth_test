// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
    title: "Блог с комментариями",
    description: "Next.js блог с Auth.js и комментариями",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="ru">
        <body className={inter.className}>
        <SessionProvider session={session}>
            <Navbar />
            {children}
        </SessionProvider>
        </body>
        </html>
    );
}



