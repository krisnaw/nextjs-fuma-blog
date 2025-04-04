import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { blogPosts } from '@/.source';

export const blog = loader({
    baseUrl: '/blog',
    source: createMDXSource(blogPosts),
});