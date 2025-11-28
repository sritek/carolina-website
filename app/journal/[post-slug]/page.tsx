import { getPostBySlug, journalPosts } from "@/lib/data";
import { notFound } from "next/navigation";

type JournalSlugParams = {
  "post-slug": string;
};

export function generateStaticParams(): JournalSlugParams[] {
  return journalPosts.map((post) => ({
    "post-slug": post.slug,
  }));
}

export default function JournalDetailPage({ params }: { params: JournalSlugParams }) {
  const post = getPostBySlug(params["post-slug"]);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p>
        <strong>Date:</strong> {post.date} · <strong>Author:</strong> {post.author}
      </p>
      <p>{post.excerpt}</p>
      <p>
        Replace this placeholder with full article content, imagery, and call-to-action
        modules for {post.title}.
      </p>
    </div>
  );
}

