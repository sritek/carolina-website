import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export default function GalleryImage({
  src,
  alt,
  caption,
  width = 640,
  height = 480,
}: GalleryImageProps) {
  return (
    <figure className="flex flex-col gap-2">
      <Image
        alt={alt}
        className="h-auto w-full rounded-2xl border border-neutral-200 object-cover"
        height={height}
        src={src}
        width={width}
      />
      {caption ? <figcaption className="text-sm text-neutral-600">{caption}</figcaption> : null}
    </figure>
  );
}

