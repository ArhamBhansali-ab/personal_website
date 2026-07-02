import Link from "next/link";
import Container from "@/components/Container";
import { blogPosts } from "@/content/blog";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Blog</h1>
        <p className="text-neutral-500 mb-12">
          Notes on projects, research, and things I&apos;m figuring out.
        </p>

        <div className="divide-y divide-neutral-100">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-6 py-6 hover:opacity-70 transition-opacity"
            >
              <span className="font-mono text-xs text-neutral-400 w-24 shrink-0 pt-1">
                {post.date}
              </span>
              <div className="flex-1">
                <h2 className="font-medium text-neutral-900 group-hover:underline underline-offset-2 mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mt-2 text-xs text-neutral-400">{post.readingTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
