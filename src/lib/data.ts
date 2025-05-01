export const posts = [
    { id: "1", title: "Первый пост", content: "Это контент первого поста." },
    { id: "2", title: "Второй пост", content: "А вот и второй пост!" }
];

export const comments: { [postId: string]: { user: string; message: string }[] } = {
    "1": [],
    "2": []
};