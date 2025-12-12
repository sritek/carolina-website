"use client";

import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = { title: string; url: string };

type FlipGalleryProps = {
  images: GalleryImage[];
  title?: string;
  width?: string;
  aspectRatio?: number | string;
  className?: string;
  showControls?: boolean;
  autoFlipDirection?: "forward" | "reverse";
  autoFlipTrigger?: number;
};

const FLIP_SPEED = 750;
const flipTiming: KeyframeAnimationOptions = { duration: FLIP_SPEED, iterations: 1 };

const flipAnimationTop: Keyframe[] = [
  { transform: "rotateY(0)" },
  { transform: "rotateY(90deg)" },
  { transform: "rotateY(90deg)" },
];

const flipAnimationBottom: Keyframe[] = [
  { transform: "rotateY(-90deg)" },
  { transform: "rotateY(-90deg)" },
  { transform: "rotateY(0)" },
];

const flipAnimationTopReverse: Keyframe[] = [
  { transform: "rotateY(90deg)" },
  { transform: "rotateY(90deg)" },
  { transform: "rotateY(0)" },
];

const flipAnimationBottomReverse: Keyframe[] = [
  { transform: "rotateY(0)" },
  { transform: "rotateY(-90deg)" },
  { transform: "rotateY(-90deg)" },
];

const flipGalleryCss = `
  #flip-gallery::before {
    display: none;
  }
  #flip-gallery > * {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .top,
  .overlay-top {
    left: 0;
    transform-origin: right;
    background-position: left;
  }
  .bottom,
  .overlay-bottom {
    right: 0;
    transform-origin: left;
    background-position: right;
  }
`;

export default function FlipGallery({
  images,
  title,
  width = "90vw",
  aspectRatio = 2,
  className = "",
  showControls = true,
  autoFlipDirection = "forward",
  autoFlipTrigger = 0,
}: FlipGalleryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const uniteRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const { leftImages, rightImages } = useMemo(() => {
    const left = images.filter((_, idx) => idx % 2 === 0);
    const rightBase = images.filter((_, idx) => idx % 2 === 1);
    const right = rightBase.length ? rightBase : left;
    return { leftImages: left.length ? left : right, rightImages: right.length ? right : left };
  }, [images]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!leftImages.length || !rightImages.length) return;

    uniteRef.current = containerRef.current.querySelectorAll<HTMLDivElement>(".unite");
    setLeftIndex(0);
    setRightIndex(0);

    uniteRef.current?.forEach((el) => setActiveForElement(el, 0, 0));
    setImageTitle(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftImages, rightImages]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const setActiveImage = (el: HTMLDivElement, imageUrl: string) => {
    el.style.backgroundImage = `url('${imageUrl}')`;
  };

  const setImageTitle = (leftIdx: number, rightIdx: number) => {
    const gallery = containerRef.current;
    if (!gallery) return;

    const leftTitle = leftImages[leftIdx % leftImages.length]?.title ?? "";
    const rightTitle = rightImages[rightIdx % rightImages.length]?.title ?? "";
    const combinedTitle = title || [leftTitle, rightTitle].filter(Boolean).join(" | ");

    gallery.setAttribute("data-title", combinedTitle);
    gallery.style.setProperty("--title-y", "0");
    gallery.style.setProperty("--title-opacity", "1");
  };

  const setActiveForElement = (el: HTMLDivElement, leftIdx: number, rightIdx: number) => {
    const isLeft = el.classList.contains("top") || el.classList.contains("overlay-top");
    const pool = isLeft ? leftImages : rightImages;
    if (!pool.length) return;

    const idx = isLeft ? leftIdx % pool.length : rightIdx % pool.length;
    const image = pool[idx];
    setActiveImage(el, image.url);
  };

  const updateGallery = (nextLeftIndex: number, nextRightIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery || !uniteRef.current?.length) return;

    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse ? flipAnimationBottomReverse : flipAnimationBottom;

    gallery.querySelector<HTMLDivElement>(".overlay-top")?.animate(topAnim, flipTiming);
    gallery.querySelector<HTMLDivElement>(".overlay-bottom")?.animate(bottomAnim, flipTiming);

    gallery.style.setProperty("--title-y", "-1rem");
    gallery.style.setProperty("--title-opacity", "0");
    gallery.setAttribute("data-title", "");

    uniteRef.current.forEach((el, idx) => {
      const delay =
        (isReverse && idx !== 1 && idx !== 2) || (!isReverse && (idx === 1 || idx === 2))
          ? FLIP_SPEED - 200
          : 0;

      setTimeout(() => setActiveForElement(el, nextLeftIndex, nextRightIndex), delay);
    });

    setTimeout(() => setImageTitle(nextLeftIndex, nextRightIndex), FLIP_SPEED * 0.5);
  };

  useEffect(() => {
    if (!autoFlipTrigger) return;
    if (!leftImages.length || !rightImages.length) return;

    const inc = autoFlipDirection === "reverse" ? -1 : 1;
    const isReverse = inc < 0;

    const newLeftIndex = (leftIndex + inc + leftImages.length) % leftImages.length;
    const newRightIndex = (rightIndex + inc + rightImages.length) % rightImages.length;

    setLeftIndex(newLeftIndex);
    setRightIndex(newRightIndex);
    updateGallery(newLeftIndex, newRightIndex, isReverse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFlipTrigger]);

  const updateIndex = (increment: number) => {
    if (!leftImages.length || !rightImages.length) return;

    const inc = Number(increment);
    const isReverse = inc < 0;

    const newLeftIndex = (leftIndex + inc + leftImages.length) % leftImages.length;
    const newRightIndex = (rightIndex + inc + rightImages.length) % rightImages.length;

    setLeftIndex(newLeftIndex);
    setRightIndex(newRightIndex);
    updateGallery(newLeftIndex, newRightIndex, isReverse);
  };

  const updateMobileIndex = (increment: number) => {
    if (!leftImages.length) return;
    const inc = Number(increment);
    const nextLeft = (leftIndex + inc + leftImages.length) % leftImages.length;
    const nextRight = rightImages.length ? (rightIndex + inc + rightImages.length) % rightImages.length : nextLeft;
    setLeftIndex(nextLeft);
    setRightIndex(nextRight);
  };

  if (!images.length) {
    return null;
  }

  const galleryStyles: CSSProperties = {
    ["--gallery-bg-color" as string]: "rgba(255 255 255 / 0.075)",
  };

  if (isMobile) {
    const mobileImage = leftImages[leftIndex % leftImages.length] ?? images[0];

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div
          className="relative w-[92vw] max-w-[440px] aspect-[4/5] overflow-hidden rounded-2xl border border-transparent bg-black/60 shadow-[0_20px_55px_rgba(0,0,0,0.55)]"
          style={{
            // default neon-green; in invert mode Header swaps CSS vars so this becomes neon-blue
            ["--fg1" as string]: "var(--neon-green,#00ff9d)",
            ["--fg2" as string]: "color-mix(in srgb, var(--neon-green,#00ff9d) 70%, var(--neon-blue,#00eaff) 30%)",
            backgroundImage:
              "linear-gradient(135deg, color-mix(in srgb, var(--fg1) 22%, transparent), color-mix(in srgb, var(--fg2) 22%, transparent)), linear-gradient(135deg, var(--fg1), var(--fg2))",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${mobileImage?.url ?? ""}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          {mobileImage?.title ? (
            <div
              className="absolute bottom-0 left-0 right-0 bg-black/55 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--fg1), var(--fg2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "var(--fg1)",
                textShadow:
                  "0 0 12px color-mix(in srgb, var(--fg1) 70%, transparent), 0 0 18px color-mix(in srgb, var(--fg2) 60%, transparent)",
              }}
            >
              {mobileImage.title}
            </div>
          ) : null}
        </div>

        {showControls ? (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => updateMobileIndex(-1)}
              title="Previous"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/60 backdrop-blur-sm transition hover:-translate-y-0.5 [--nav-fg:var(--neon-green,#00ff9d)] hover:[--nav-fg:var(--neon-blue,#00eaff)]"
              style={{ color: "var(--nav-fg)" }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-60 blur-md transition duration-300 group-hover:opacity-90"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.16), transparent 60%)" }}
              />
              <ArrowLeftCircle size={26} className="relative" />
            </button>
            <button
              type="button"
              onClick={() => updateMobileIndex(1)}
              title="Next"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/60 backdrop-blur-sm transition hover:-translate-y-0.5 [--nav-fg:var(--neon-green,#00ff9d)] hover:[--nav-fg:var(--neon-blue,#00eaff)]"
              style={{ color: "var(--nav-fg)" }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-60 blur-md transition duration-300 group-hover:opacity-90"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.16), transparent 60%)" }}
              />
              <ArrowRightCircle size={26} className="relative" />
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`min-h-[60vh] flex items-center justify-center bg-transparent font-sans ${className}`}>
      <div className="relative p-0" style={galleryStyles}>
        <div
          id="flip-gallery"
          ref={containerRef}
          className="relative text-center"
          style={{
            perspective: "1900px",
            width,
            aspectRatio: String(aspectRatio),
            maxWidth: "1300px",
          }}
        >
          <div className="top unite bg-cover bg-no-repeat" />
          <div className="bottom unite bg-cover bg-no-repeat" />
          <div className="overlay-top unite bg-cover bg-no-repeat" />
          <div className="overlay-bottom unite bg-cover bg-no-repeat" />
        </div>

        {showControls ? (
          <div className="absolute top-full left-1/2 mt-3 -translate-x-1/2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => updateIndex(-1)}
              title="Previous"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/50 backdrop-blur-sm transition hover:-translate-y-0.5 [--nav-fg:var(--neon-green,#00ff9d)] hover:[--nav-fg:var(--neon-blue,#00eaff)] [--nav-shadow:0_0_16px_var(--neon-shadow-green,rgba(0,255,157,0.55))] hover:[--nav-shadow:0_0_18px_var(--neon-shadow-blue,rgba(0,234,255,0.65))] drop-shadow-[var(--nav-shadow)] shadow-[0_0_18px_rgba(0,0,0,0.5)]"
              style={{ color: "var(--nav-fg)" }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-60 blur-md transition duration-300 group-hover:opacity-90"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.16), transparent 60%)" }}
              />
              <ArrowLeftCircle size={28} className="relative" />
            </button>
            <button
              type="button"
              onClick={() => updateIndex(1)}
              title="Next"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/50 backdrop-blur-sm transition hover:-translate-y-0.5 [--nav-fg:var(--neon-green,#00ff9d)] hover:[--nav-fg:var(--neon-blue,#00eaff)] [--nav-shadow:0_0_16px_var(--neon-shadow-green,rgba(0,255,157,0.55))] hover:[--nav-shadow:0_0_18px_var(--neon-shadow-blue,rgba(0,234,255,0.65))] drop-shadow-[var(--nav-shadow)] shadow-[0_0_18px_rgba(0,0,0,0.5)]"
              style={{ color: "var(--nav-fg)" }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-60 blur-md transition duration-300 group-hover:opacity-90"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.16), transparent 60%)" }}
              />
              <ArrowRightCircle size={28} className="relative" />
            </button>
          </div>
        ) : null}
      </div>

      <style dangerouslySetInnerHTML={{ __html: flipGalleryCss }} />
    </div>
  );
}

