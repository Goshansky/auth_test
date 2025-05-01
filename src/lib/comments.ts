import { promises as fs } from "fs";
import path from "path";

const COMMENTS_PATH = path.join(process.cwd(), "@/lib/data/comments.json");

export type Comment = {
    user: string;
    message: string;
};

export async function readComments(): Promise<Record<string, Comment[]>> {
    try {
        const data = await fs.readFile(COMMENTS_PATH, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        if ((e as NodeJS.ErrnoException).code === "ENOENT") {
            // Создаём папку, если её нет
            const dir = path.dirname(COMMENTS_PATH);
            await fs.mkdir(dir, { recursive: true });

            // Пишем пустой JSON-файл
            await fs.writeFile(COMMENTS_PATH, JSON.stringify({}, null, 2));
            return {};
        }
        throw e;
    }
}

export async function writeComments(data: Record<string, Comment[]>) {
    await fs.writeFile(COMMENTS_PATH, JSON.stringify(data, null, 2));
}


