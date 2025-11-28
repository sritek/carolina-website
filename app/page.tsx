import Image from "next/image";
import Link from "next/link";
import NeonButton from "@/components/NeonButton";

const HERO_IMAGE = "/hero-image.png";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-black text-neutral-100">
      <section className="relative min-h-screen w-full overflow-y-auto bg-black">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        Absolute Carolina neon overlay for DESKTOP/TABLET
        <div className="pointer-events-none absolute top-[20.8%] right-[23%] hidden md:block z-10 rotate-[-8deg]">
          <div className="relative select-none text-right">
            {/* Neon "Carolina" text */}
            {/* <span
              className="neon-flicker text-3xl font-bold tracking-[0.15em] uppercase text-white sm:text-4xl lg:text-3xl"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                textShadow:
                  "0 0 8px rgba(10,102,255,0.8), 0 0 18px rgba(0,255,243,0.6), 0 0 35px rgba(10,102,255,0.7)",
              }}
            >
              CAROLINA
            </span> */}

            {/* Small sub-label below
            <div
              className="mt-0 text-[8px] absolute right-[5%] tracking-[0.2em] uppercase text-green-400"
              style={{
                textShadow: "0 0 4px rgba(74, 222, 128, 0.6), 0 0 8px rgba(74, 222, 128, 0.4)",
              }}
            >
              LUMINARY LOUNGE
            </div> */}

            {/* Sparks dropping from the logo - varied positions */}
            <div className="pointer-events-none absolute -bottom-2 left-0 right-0">
              {/* Left side sparks */}
              {/* <span className="neon-spark absolute left-[5%] h-1.5 w-1.5 rounded-full bg-amber-300/90" />
              <span className="neon-spark absolute left-[15%] h-1 w-1 rounded-full bg-yellow-200/90" />
              <span className="neon-spark absolute left-[25%] h-1.5 w-1.5 rounded-full bg-white/90" /> */}
              
              {/* Center sparks */}
              {/* <span className="neon-spark absolute left-[40%] h-1 w-1 rounded-full bg-amber-200/90" />
              <span className="neon-spark absolute left-[50%] h-2 w-2 -translate-x-1/2 rounded-full bg-yellow-300/90" /> */}
              
              {/* Right side sparks */}
              {/* <span className="neon-spark absolute right-[30%] h-1 w-1 rounded-full bg-white/90" />
              <span className="neon-spark absolute right-[15%] h-1.5 w-1.5 rounded-full bg-amber-300/90" />
              <span className="neon-spark absolute right-[5%] h-1 w-1 rounded-full bg-yellow-200/90" /> */}
            </div>
          </div>
        </div>

        {/* Top navigation bar */}
        <header className="relative z-20 flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-16">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-neon-teal drop-shadow-[0_0_8px_rgba(75,225,255,0.5)]">
            CAROLINA · THE LUMINARY LOUNGE
          </span>
          <nav className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium text-neutral-100/80">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                className="py-2 transition-colors hover:text-neon-teal hover:drop-shadow-[0_0_8px_rgba(75,225,255,0.6)] sm:py-0"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Main hero content */}
        <div className="relative z-20 flex min-h-[calc(100vh-120px)] flex-col justify-between px-4 pb-16 pt-4 sm:px-6 sm:pb-20 md:px-8 lg:px-16 lg:pt-2">
          <div className="flex flex-1 flex-col gap-6 sm:gap-8 md:flex-row md:items-start">
            {/* Left: hook text */}
            <div className="max-w-xl pt-4 sm:pt-6 md:pt-10 lg:pt-16">
              {/* Mobile Carolina logo - simple, non-rotated */}
              <div className="mb-4 block md:hidden">
                <div className="relative select-none text-left">
                  <span
                    className="neon-flicker text-2xl font-bold tracking-[0.15em] uppercase text-white"
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      textShadow:
                        "0 0 8px rgba(10,102,255,0.8), 0 0 18px rgba(0,255,243,0.6), 0 0 35px rgba(10,102,255,0.7)",
                    }}
                  >
                    CAROLINA
                  </span>
                  <div
                    className="mt-0 text-[7px] tracking-[0.2em] uppercase text-green-400"
                    style={{
                      textShadow: "0 0 4px rgba(74, 222, 128, 0.6), 0 0 8px rgba(74, 222, 128, 0.4)",
                    }}
                  >
                    LUMINARY LOUNGE
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.5em] text-neon-teal mb-3 sm:mb-4">
                The most
              </p>
              <h1 className="retro-neon-flicker text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4">
                <span
                  style={{
                    color: "#ffffff",
                    textShadow:
                      "0 0 10px rgba(75, 225, 255, 0.8), 0 0 20px rgba(75, 225, 255, 0.6), 0 0 30px rgba(95, 125, 255, 0.5), 0 0 40px rgba(255, 75, 255, 0.3)",
                  }}
                >
                  Carolina Luminary Lounge
                </span>
        </h1>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-neon-teal mb-4 sm:mb-6">
                NEON Luminary Lounge
              </p>
              <p className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-100/90 mb-6 sm:mb-8">
                An immersive black-label experience with cyan laser lights, bespoke cocktails, and
                curated performances that glow long after midnight.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <NeonButton
                  className="w-full border border-neon-pink/80 bg-black/40 px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-[0.4em] text-neon-pink shadow-[0_0_25px_rgba(255,75,255,0.3)] transition hover:border-neon-pink hover:bg-neon-pink/15 hover:text-white sm:w-auto"
                  href="/menu"
                >
                  View Menu
          </NeonButton>
                <NeonButton
                  className="w-full border border-neon-teal/80 bg-black/40 px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-[0.4em] text-neon-teal shadow-[0_0_25px_rgba(75,225,255,0.3)] transition hover:border-neon-teal hover:bg-neon-teal/15 hover:text-white sm:w-auto"
                  href="/reservations"
                >
                  Reserve Table
          </NeonButton>
              </div>
            </div>
          </div>

          {/* Bottom: details scroll teaser bar */}
          <div className="mt-8 flex justify-center pb-4 sm:mt-6 sm:pb-0">
            <div className="flex flex-col items-center gap-2 text-sm text-neutral-100/70">
              <span className="text-xs uppercase tracking-[0.3em]">Details</span>
              <div className="h-8 w-px bg-gradient-to-b from-neon-teal/60 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:gap-6 text-left">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.5em] text-amber-300">
            About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Carolina, The Luminary Lounge
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
            Carolina's lounge flows from espresso-lit mornings into late night neon frequencies.
            Our team curates chef residencies, kinetic soundscapes, and a service ritual infused
            with hospitality for creatives, families, and the late-night crowd alike.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">
            <Link className="text-neon-teal transition hover:text-white" href="/about">
              Discover Our Story →
            </Link>
            <Link className="text-neon-pink transition hover:text-white" href="/reservations">
              Plan a Visit →
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Introduction */}
      <section className="border-b border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-teal sm:text-xs">
            Welcome to Carolina
          </p>
          <p className="text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl">
            A place where every dish tells a story, crafted with seasonal ingredients and served
            under the glow of neon lights. Where espresso mornings transform into late-night
            frequencies, and rooftop city views frame unforgettable moments. Carolina is more than a
            lounge—it's where Jaipur comes to glow.
          </p>
          <div className="divider-breathe mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-neon-teal/60 to-transparent" />
        </div>
      </section>

      {/* Highlight of the Restaurant - Experience Cards */}
      <section className="border-b border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-teal sm:text-xs">
            Our Philosophy
          </p>
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Experience Carolina
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Signature Neon Cocktails",
                desc: "Expertly crafted mixology with luminescent twists",
                image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop&q=80",
              },
              {
                title: "Rooftop City Views",
                desc: "Panoramic Jaipur skyline from our elevated deck",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80",
              },
              {
                title: "Live DJ & Performances",
                desc: "Curated beats and kinetic soundscapes nightly",
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80",
              },
              {
                title: "Private Cabanas & Events",
                desc: "Exclusive spaces for intimate gatherings",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group fade-up overflow-hidden rounded-lg border border-neon-teal/30 bg-black/40 transition-all hover:scale-[1.03] hover:border-neon-teal/60 hover:shadow-[0_0_25px_rgba(75,225,255,0.3)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-black/20 transition-all group-hover:bg-black/10" />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes - Menu Preview Cards */}
      <section className="border-b border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-pink sm:text-xs">
            Featured Dishes
          </p>
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Signature Offerings
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Midnight Mocha",
                desc: "Espresso, dark chocolate, smoked vanilla cream",
                price: "From ₹450",
                image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&q=80",
              },
              {
                name: "Luminary Tonic",
                desc: "Botanical gin, yuzu cordial, tonic mist",
                price: "From ₹650",
                image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop&q=80",
              },
              {
                name: "Stargazer Tart",
                desc: "Citrus curd, candied hibiscus, sable crust",
                price: "From ₹550",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80",
              },
              {
                name: "Neon Negroni",
                desc: "Classic with a luminescent twist",
                price: "From ₹600",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop&q=80",
              },
              {
                name: "Rooftop Risotto",
                desc: "Saffron-infused with seasonal vegetables",
                price: "From ₹750",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop&q=80",
              },
              {
                name: "Lounge Charcuterie",
                desc: "Artisanal selection with neon accompaniments",
                price: "From ₹950",
                image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop&q=80",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group fade-up overflow-hidden rounded-lg border border-neon-pink/20 bg-black/40 transition-all hover:scale-[1.02] hover:border-neon-pink/40 hover:shadow-[0_0_20px_rgba(255,75,255,0.2)]"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-black/30 transition-all group-hover:bg-black/10" />
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="text-base font-semibold text-neon-pink sm:text-lg">{item.name}</h3>
                    <span className="text-xs text-neutral-500">{item.price}</span>
                  </div>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              className="inline-block text-sm font-semibold uppercase tracking-[0.3em] text-neon-teal transition hover:text-white sm:text-base"
              href="/menu"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Experience - Horizontal Gallery Strip */}
      <section className="border-b border-white/5 bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-teal sm:text-xs">
            Visual Experience
          </p>
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            The Carolina Atmosphere
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide sm:gap-6">
            {[
              {
                caption: "Rooftop Deck",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop&q=80",
              },
              {
                caption: "Neon Bar",
                image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=800&fit=crop&q=80",
              },
              {
                caption: "Lounge Seating",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop&q=80",
              },
              {
                caption: "City Views",
                image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=800&fit=crop&q=80",
              },
              {
                caption: "Evening Ambiance",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop&q=80",
              },
              {
                caption: "Signature Cocktails",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop&q=80",
              },
              {
                caption: "Live Performances",
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=800&fit=crop&q=80",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative flex-shrink-0 overflow-hidden rounded-lg border border-neon-teal/20 transition-all hover:border-neon-teal/50 hover:shadow-[0_0_20px_rgba(75,225,255,0.2)]"
              >
                <div className="relative h-64 w-64 overflow-hidden sm:h-80 sm:w-80">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-center transition-transform group-hover:translate-y-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews / Social Proof */}
      <section className="border-b border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-green sm:text-xs">
            Reviews
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Loved by guests across Jaipur
          </h2>
          <div className="mb-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Priya M.",
                review: "The neon ambiance and rooftop views are absolutely stunning. Best cocktails in Jaipur!",
                rating: 5,
              },
              {
                name: "Rahul K.",
                review: "Perfect spot for a date night. The DJ sets and private cabanas made our evening unforgettable.",
                rating: 5,
              },
              {
                name: "Anjali S.",
                review: "Carolina exceeded all expectations. The food, drinks, and service are top-tier. Will definitely return!",
                rating: 5,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="fade-up rounded-lg border border-green-400/20 bg-black/40 p-6 transition-all hover:border-green-400/40 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
              >
                <div className="mb-3 flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-green-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-neutral-300 sm:text-base">"{item.review}"</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400 sm:text-sm">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 sm:text-sm">
            <span>Featured in</span>
            <span className="px-3 py-1 border border-white/10 rounded">Times Food</span>
            <span className="px-3 py-1 border border-white/10 rounded">Zomato</span>
            <span className="px-3 py-1 border border-white/10 rounded">Jaipur Times</span>
          </div>
        </div>
      </section>

      {/* Seasonal / Special Event Promo Band */}
      <section className="border-b border-white/5 bg-gradient-to-r from-black via-black/95 to-black px-4 py-8 sm:px-6 sm:py-12">
        <div className="shimmer mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-pink sm:text-xs">
              Seasonal Highlight
            </p>
            <p className="text-sm text-white sm:text-base md:text-lg">
              This Month at Carolina: Exclusive DJ residency with curated tasting menus
            </p>
          </div>
          <Link
            className="rounded-full border border-neon-pink/60 bg-black/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink transition hover:border-neon-pink hover:bg-neon-pink/10 sm:text-sm"
            href="/events"
          >
            View Events →
          </Link>
        </div>
      </section>

      {/* Events & Private Gatherings */}
      <section className="border-b border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-pink sm:text-xs">
              Events
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Events & Private Gatherings
            </h2>
            <p className="mb-6 text-sm text-neutral-300 sm:text-base">
              Transform Carolina into your private venue. From intimate birthday celebrations to
              corporate gatherings and exclusive takeovers, our rooftop space adapts to your vision
              with bespoke service and curated experiences.
            </p>
            <Link
              className="inline-block text-sm font-semibold uppercase tracking-[0.3em] text-neon-pink transition hover:text-white sm:text-base"
              href="/events"
            >
              Host an Event →
            </Link>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg border border-neon-pink/20 bg-gradient-to-br from-neon-pink/5 via-transparent to-neon-teal/5 sm:h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-4xl">✨</div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 sm:text-sm">
                  Private Events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Carolina - Location with neon map */}
      <section className="border-b border-white/5 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Left: Text block */}
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-neon-teal sm:text-xs">
                Location
              </p>
              <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Find Carolina
              </h2>
              <div className="mb-6 space-y-2 text-sm text-neutral-300 sm:text-base">
                <p className="font-medium text-white">Carolina – The Luminary Lounge</p>
                <p>123 Rooftop Avenue</p>
                <p>Jaipur, Rajasthan 302001</p>
                <p>India</p>
              </div>
              <div className="mb-6 space-y-2 text-sm text-neutral-300 sm:text-base">
                <p className="font-semibold uppercase tracking-[0.2em] text-neon-teal">Hours</p>
                <p>Monday – Thursday: 6:00 PM – 2:00 AM</p>
                <p>Friday – Saturday: 5:00 PM – 3:00 AM</p>
                <p>Sunday: 6:00 PM – 1:00 AM</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-full border border-neon-teal/60 bg-black/40 px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-neon-teal transition hover:border-neon-teal hover:bg-neon-teal/10 sm:text-sm"
                  href="https://maps.google.com/?q=Carolina+Luminary+Lounge+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps
                </a>
                <a
                  className="rounded-full border border-neon-pink/60 bg-black/40 px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink transition hover:border-neon-pink hover:bg-neon-pink/10 sm:text-sm"
                  href="tel:+911234567890"
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* Right: Neon circular map */}
            <div className="flex items-center justify-center">
              <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
                {/* Map circle container */}
                <div
                  className="relative h-full w-full rounded-full border-2 border-neon-teal/40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(5, 5, 5, 0.9) 0%, rgba(0, 0, 0, 1) 100%)",
                    boxShadow:
                      "inset 0 0 30px rgba(75, 225, 255, 0.1), 0 0 40px rgba(75, 225, 255, 0.2)",
                  }}
                >
                  {/* Radar sweep effect */}
                  <div
                    className="radar-sweep absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(75, 225, 255, 0.15) 30deg, transparent 60deg)",
                    }}
                  />

                  {/* Street lines (simplified map) */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 260 260">
                    {/* Main roads */}
                    <line
                      x1="130"
                      y1="20"
                      x2="130"
                      y2="240"
                      stroke="rgba(75, 225, 255, 0.3)"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="20"
                      y1="130"
                      x2="240"
                      y2="130"
                      stroke="rgba(75, 225, 255, 0.3)"
                      strokeWidth="1.5"
                    />
                    {/* Diagonal roads */}
                    <line
                      x1="50"
                      y1="50"
                      x2="210"
                      y2="210"
                      stroke="rgba(75, 225, 255, 0.2)"
                      strokeWidth="1"
                    />
                    <line
                      x1="210"
                      y1="50"
                      x2="50"
                      y2="210"
                      stroke="rgba(75, 225, 255, 0.2)"
                      strokeWidth="1"
                    />
                    {/* Side streets */}
                    <line
                      x1="80"
                      y1="40"
                      x2="180"
                      y2="40"
                      stroke="rgba(75, 225, 255, 0.15)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="40"
                      y1="80"
                      x2="40"
                      y2="180"
                      stroke="rgba(75, 225, 255, 0.15)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="220"
                      y1="80"
                      x2="220"
                      y2="180"
                      stroke="rgba(75, 225, 255, 0.15)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="80"
                      y1="220"
                      x2="180"
                      y2="220"
                      stroke="rgba(75, 225, 255, 0.15)"
                      strokeWidth="0.5"
                    />
                  </svg>

                  {/* Street labels */}
                  <div className="absolute left-[15%] top-[10%] text-[8px] uppercase tracking-[0.1em] text-neutral-500 sm:text-[10px]">
                    MAIN ST
                  </div>
                  <div className="absolute right-[15%] top-[10%] text-[8px] uppercase tracking-[0.1em] text-neutral-500 sm:text-[10px]">
                    PARK AVE
                  </div>
                  <div className="absolute bottom-[15%] left-[10%] text-[8px] uppercase tracking-[0.1em] text-neutral-500 sm:text-[10px]">
                    ROOFTOP
                  </div>
                  <div className="absolute bottom-[15%] right-[10%] text-[8px] uppercase tracking-[0.1em] text-neutral-500 sm:text-[10px]">
                    LOUNGE
                  </div>

                  {/* Location marker */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="location-pulse h-4 w-4 rounded-full bg-neon-teal"
                      style={{
                        boxShadow:
                          "0 0 10px rgba(75, 225, 255, 0.8), 0 0 20px rgba(75, 225, 255, 0.5), 0 0 30px rgba(75, 225, 255, 0.3)",
                      }}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                      style={{
                        boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA Footer */}
      <section className="border-t border-neon-teal/20 bg-black px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Ready for your night at Carolina?
          </h2>
          <p className="mb-8 text-sm text-neutral-400 sm:text-base">
            Reserve your table and experience Jaipur's most luminous rooftop lounge.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <NeonButton
              className="w-full border border-neon-pink/80 bg-black/40 px-10 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-neon-pink shadow-[0_0_25px_rgba(255,75,255,0.3)] transition hover:border-neon-pink hover:bg-neon-pink/15 hover:text-white sm:w-auto sm:text-base"
              href="/reservations"
            >
              Reserve a Table
            </NeonButton>
            <Link
              className="w-full rounded-full border border-neon-teal/60 bg-black/40 px-10 py-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-neon-teal transition hover:border-neon-teal hover:bg-neon-teal/10 hover:text-white sm:w-auto sm:text-base"
              href="/menu"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
