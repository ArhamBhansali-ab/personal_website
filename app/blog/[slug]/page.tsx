import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { blogPosts } from "@/content/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <div className="mb-10">
          <div className="flex items-center gap-4 text-xs font-mono text-brand-text-muted mb-4">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="font-serif text-3xl font-medium text-brand-text mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-base text-brand-text-secondary leading-relaxed border-t border-brand-border pt-10">
          <p className="text-brand-text">{post.excerpt}</p>
          <p>{post.content}</p>
        </div>

        <div className="mt-14">
          <Button href="/blog" variant="secondary">← Back to blog</Button>
        </div>
      </div>
    </Container>
  );
}
