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
        <p className="font-script text-2xl text-brand-accent mb-2">
          notes and things i&apos;m figuring out

        </p>
        <h1 className="font-serif text-2xl font-medium text-brand-text mb-6">
          Blog
        </h1>
        <p className="text-brand-text-secondary">
          Got lazy...but come back soon!.
        </p>
      </div>
    </Container>
    // <Container>
    //   <div className="py-20 max-w-2xl">
    //     <p className="font-script text-2xl text-brand-accent mb-2">
    //       notes and things i&apos;m figuring out
    //     </p>
    //     <h1 className="font-serif text-2xl font-medium text-brand-text mb-12">
    //       Blog
    //     </h1>

    //     <div className="divide-y divide-brand-border">
    //       {blogPosts.map((post, i) => (
    //         <Link
    //           key={post.slug}
    //           href={`/blog/${post.slug}`}
    //           className={`group flex gap-6 py-6 ${
    //             i % 2 === 0 ? "tilt-hover" : "tilt-hover-alt"
    //           }`}
    //         >
    //           <span className="font-mono text-xs text-brand-text-muted w-24 shrink-0 pt-1">
    //             {post.date}
    //           </span>
    //           <div className="flex-1">
    //             <h2 className="font-serif text-lg text-brand-text link-squiggle group-hover:text-brand-accent mb-1">
    //               {post.title}
    //             </h2>
    //             <p className="text-sm text-brand-text-secondary leading-relaxed">
    //               {post.excerpt}
    //             </p>
    //             <p className="mt-2 text-xs text-brand-text-muted">{post.readingTime}</p>
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </Container>
  );
}
