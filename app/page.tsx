import Link from "next/link";
import NeonButton from "@/components/NeonButton";

const HERO_IMAGE =
  "https://b.zmtcdn.com/data/pictures/9/21244629/e4775668ce79000af75f4570e6d216d9.jpeg";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-black text-neutral-100">
      <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-neon-teal">
            The most 
          </p>
          <h1 className="text-5xl font-bold tracking-tight  #2596be md:text-7xl">
          Carolina Luminary Lounge 
          </h1>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neon-teal">
            NEON Luminary Lounge
          </p>
          <p className="max-w-2xl text-lg text-neutral-100/90">
            An immersive black-label experience with cyan laser lights, bespoke cocktails, and
            curated performances that glow long after midnight.
          </p>
          <NeonButton
            className="border border-neon-pink/80 bg-black/40 px-10 py-3 text-base font-semibold uppercase tracking-[0.4em] text-neon-pink shadow-[0_0_25px_rgba(255,75,255,0.3)] transition hover:border-neon-pink hover:bg-neon-pink/15 hover:text-white"
            href="/menu"
          >
            View Menu
          </NeonButton>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-300">
            About Us
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Carolina, The Luminary Lounge
          </h2>
          <p className="text-lg text-neutral-300">
            Carolina’s lounge flows from espresso-lit mornings into late night neon frequencies.
            Our team curates chef residencies, kinetic soundscapes, and a service ritual infused
            with hospitality for creatives, families, and the late-night crowd alike.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.3em]">
            <Link className="text-neon-teal transition hover:text-white" href="/about">
              Discover Our Story →
            </Link>
            <Link className="text-neon-pink transition hover:text-white" href="/reservations">
              Plan a Visit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
