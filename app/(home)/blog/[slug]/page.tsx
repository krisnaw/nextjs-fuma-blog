import {notFound} from 'next/navigation';

import {blog} from '@/lib/source';
import Link from "next/link";

export default async function Page(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const page = blog.getPage([params.slug]);

    if (!page) notFound();

    const Mdx = page.data.body;

    console.log(Mdx);

    return (
        <>
            <div>
                <div>
                    <Link href="/blog">Back</Link>
                </div>

                <div className="border-b pb-2 mb-4">
                    <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
                        {page.data.title}
                    </h1>

                    <p className="font-mono flex text-xs text-gray-500 dark:text-gray-500">
                        <span className="flex-grow">
                            <span>
                                <span className="hover:text-gray-800 dark:hover:text-gray-400">
                                    {page.data.author}
                                </span>
                                <span className="mx-2">|</span>
                            </span>
                            <span>
                                {new Date(page.data.date).toDateString()}
                            </span>
                        </span>
                    </p>
                </div>

                <div>
                    Mdx content
                    {page.data.description}

                </div>
            </div>
        </>
    );
}

export function generateStaticParams(): { slug: string }[] {
    return blog.getPages().map((page) => ({
        slug: page.slugs[0],
    }));
}