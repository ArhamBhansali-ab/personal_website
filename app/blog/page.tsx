import PageHeader from "@/components/site/PageHeader";
import { latestPosts } from "@/content/blog";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Writing",
  description: "Notes and things I'm figuring out.",
};

export default function BlogPage() {
  const anyPublished = latestPosts.some((post) => post.published);

  return (
    <>
      <PageHeader
        label="Writing"
        title={
          <>
            notes and things i&apos;m <em className="text-accent">figuring out.</em>
          </>
        }
      >
        {!anyPublished && "Coming soon! These are the drafts in progress."}
      </PageHeader>

      <ol className="shell">
        {latestPosts.map((post, index) => (
          <li
            key={post.slug}
            className="grid grid-cols-[2.5rem_1fr] gap-x-2 gap-y-2 border-t border-line py-7 last:border-b md:grid-cols-[4rem_6rem_minmax(0,1fr)_auto] md:items-baseline md:gap-x-6"
          >
            <span className="label">{String(index + 1).padStart(2, "0")}</span>
            <time dateTime={post.date} className="label col-start-2 md:col-start-auto">
              {formatDate(post.date)}
            </time>
            <div className="col-start-2 md:col-start-auto">
              <h2 className="font-serif text-2xl leading-tight text-fg md:text-[1.9rem]">{post.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <span className="label col-start-2 md:col-start-auto">{post.published ? post.readingTime : "draft"}</span>
          </li>
        ))}
      </ol>
    </>
  );
}
