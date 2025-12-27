// /app/blog/[id]/page.tsx

import { API_URL } from "@/api/api";
import Image from "next/image";

export default async function BlogPage({ params }) {
    const { id } = await params;
    const res = await fetch(`${API_URL}/blog/${id}`);

    if (!res.ok) {
        return <div>Ошибка загрузки поста</div>;
    }

    const post = await res.json();
    const { sections } = post;
    console.log(sections);

    return (
        <div>
            <Image src={post.backgroundImage} alt='image' width={1000} height={500} />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div>
                {sections.map((item, index) => {
                    return <div key={index}>{item.title}</div>; // добавлен return
                })}
            </div>
        </div>
    );
}
