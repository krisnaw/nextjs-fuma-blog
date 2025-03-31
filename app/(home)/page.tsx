import {blog} from '@/lib/source';
import Link from "next/link";

export default function Home() {

    const posts = blog.getPages();

    return (
        <div>
            <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                {posts.map((post) => (
                    <li key={post.url} className="mb-2 tracking-[-.01em]">
                        <Link href={post.url}>
                            {post.data.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
