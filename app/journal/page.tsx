import BlogPostCard from "@/components/BlogPostCard";
import SectionHeading from "@/components/SectionHeading";
import { journalPosts } from "@/lib/data";

export default function JournalPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Journal</h1>
      <p>Use this feed for stories, playlists, behind-the-scenes notes, and press.</p>
      <div className="space-y-4">
        <SectionHeading
          eyebrow="Latest"
          title="Notes, interviews, and announcements"
          description="Update lib/data.ts or connect to a CMS once ready."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {journalPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

