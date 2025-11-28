import type { JournalPost } from "@/types";
import Link from "next/link";

type BlogPostCardProps = {
  post: JournalPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-5">
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        {post.date} · {post.author}
      </p>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-sm text-neutral-600">{post.excerpt}</p>
      <Link className="text-sm font-medium underline" href={`/journal/${post.slug}`}>
        Continue reading
      </Link>
    </article>
  );
}

