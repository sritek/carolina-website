import GalleryImage from "@/components/GalleryImage";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Gallery</h1>
      <p>Showcase the space, menu, and events by swapping in curated photography.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {galleryImages.map((image) => (
          <GalleryImage
            alt={image.alt}
            caption={image.caption}
            height={image.height}
            key={image.id}
            src={image.src}
            width={image.width}
          />
        ))}
      </div>
    </div>
  );
}

