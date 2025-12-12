"use client";

import type { JSX } from "react";
import { useMemo, useRef, useState } from "react";

import FlipGallery from "@/components/ui/flip-gallery";
import { GlowCard } from "@/components/ui/spotlight-card";
import {
  Baby,
  Coffee,
  Flame,
  Martini,
  Salad,
  Sunrise,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

type GalleryImage = { title: string; url: string };

type MenuCategory = {
  id: string;
  name: string;
  description: string;
  accent: string;
  glowColor: "blue" | "purple" | "green" | "red" | "orange";
  images: GalleryImage[];
  icon: JSX.Element;
};

const neonBlue = "var(--neon-blue, #00eaff)";
const neonGreen = "var(--neon-green, #00ff9d)";

const menuCategories: MenuCategory[] = [
  {
    id: "cocktails",
    name: "Cocktails",
    description: "Signature pours, shaken or stirred.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <Martini className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Cosmopolitan",
        url: "/carolina%20images/drinks/2.jpg",
      },
      {
        title: "Ocean Glass",
        url: "/carolina%20images/drinks/3.jpg",
      },
      {
        title: "Classics Night",
        url: "/carolina%20images/drinks/4.jpg",
      },
      {
        title: "Cosmopolitan",
        url: "/carolina%20images/drinks/5.jpg",
      },
      {
        title: "Ocean Glass",
        url: "/carolina%20images/drinks/6.jpg",
      },
      {
        title: "Classics Night",
        url: "/carolina%20images/drinks/7.jpg",
      },
      {
        title: "Cosmopolitan",
        url: "/carolina%20images/drinks/8.jpg",
      },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    description: "Zero-proof refreshers with a neon twist.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "green",
    icon: <Coffee className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Virgin Margarita",
        url: "/carolina%20images/drinks/9.jpg",
      },
      {
        title: "Signature Mocktails",
        url: "/carolina%20images/drinks/12.jpg",
      },
      {
        title: "Summer Chill",
        url: "/carolina%20images/drinks/13.jpeg",
      },
      {
        title: "Virgin Margarita",
        url: "/carolina%20images/drinks/14.jpg",
      },
      {
        title: "Signature Mocktails",
        url: "/carolina%20images/drinks/15.jpg",
      },
      {
        title: "Summer Chill",
        url: "/carolina%20images/drinks/16.jpg",
      },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "Comfort brews for every mood.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <Coffee className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Lounge Comfort",
        url: "/carolina%20images/drinks/17.jpg",
      },
      {
        title: "Pineapple Twist",
        url: "/carolina%20images/drinks/18.jpg",
      },
      {
        title: "Sunset Unwind",
        url: "/carolina%20images/drinks/19.jpg",
      },
    ],
  },
  {
    id: "beers",
    name: "Beers",
    description: "Crisp pours and easy sips.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <Wine className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Evening Colors",
        url: "/carolina%20images/drinks/6.jpg",
      },
      {
        title: "Good Vibes",
        url: "/carolina%20images/drinks/20.jpg",
      },
      {
        title: "Chilled Pour",
        url: "/carolina%20images/drinks/Where%20good%20wine%20meets%20good%20vibes.%20%F0%9F%8D%BE%E2%9C%A8%20Unwind%20with%20a%20chilled%20pour%20and%20the%20perfect%20Carolina%20ambien%20(1).jpg",
      },
    ],
  },
  {
    id: "starters",
    name: "Starters",
    description: "Bright bites to wake up the palate.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <Salad className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Crispy Corn",
        url: "/carolina%20images/food/Crispy%20Corn%20Snack.jpg",
      },
      {
        title: "Perfect Starter",
        url: "/carolina%20images/food/Bite-sized%20Perfection%20Starter.jpg",
      },
      {
        title: "Crispy Toast",
        url: "/carolina%20images/food/Crispy%20Toast%20Starter.jpg",
      },
    ],
  },
  {
    id: "mains",
    name: "Main Course",
    description: "Hearty plates that headline the night.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <UtensilsCrossed className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Chicken Tikka",
        url: "/carolina%20images/food/Carolina%20Chicken%20Tikka.jpg",
      },
      {
        title: "Alfredo Pasta",
        url: "/carolina%20images/food/Creamy%20Alfredo%20Pasta.jpg",
      },
      {
        title: "Comfort Plate",
        url: "/carolina%20images/food/Comfort%20on%20a%20Plate.jpg",
      },
    ],
  },
  {
    id: "pizzas-burgers",
    name: "Pizzas & Burgers",
    description: "Cheesy, toasty, and stacked favorites.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <Flame className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Burger Bite",
        url: "/carolina%20images/food/Carolina%20Lounge%20Take%20a%20Bite%20Share%20the%20Love.webp",
      },
      {
        title: "Garlic Bread & More",
        url: "/carolina%20images/food/Cheesy%20Herby%20Pasta%20with%20Garlic%20Bread.jpg",
      },
      {
        title: "Take a Bite",
        url: "/carolina%20images/food/Take%20a%20Bite%20Share%20the%20Love.webp",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet finishes for every table.",
    accent: `from-[${neonBlue}]/80 via-[${neonGreen}]/70 to-[${neonBlue}]/60`,
    glowColor: "blue",
    icon: <Wine className="h-5 w-5 text-emerald-200" />,
    images: [
      {
        title: "Celebration Platter",
        url: "/carolina%20images/food/Diwali%20Mezze%20Platter%20at%20Carolina.jpg",
      },
      {
        title: "Evening Vibe",
        url: "/carolina%20images/food/Carolina%20Evening%20Vibe.jpg",
      },
      {
        title: "Flavor Moments",
        url: "/carolina%20images/food/Carolina%20Flavours%20Instagram%20Photo.jpg",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | null>(null);
  const gallerySectionRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (category: MenuCategory) => {
    setActiveCategory(category);
    gallerySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const cards = useMemo(
    () =>
      menuCategories.map((category) => {
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => handleSelect(category)}
            className="group relative text-left focus:outline-none"
          >
            <GlowCard
              glowColor={category.glowColor}
              customSize
              className={`w-full h-full min-h-[230px] overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--neon-shadow-color,rgba(0,234,255,0.6))] [--card-border-color:var(--neon-green,#00ff9d)] hover:[--card-border-color:var(--neon-blue,#00eaff)] [--card-fg:var(--neon-green,#00ff9d)] group-hover:[--card-fg:var(--neon-blue,#00eaff)] bg-gradient-to-b ${category.accent} backdrop-blur`}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-start sm:justify-between">
                  <div
                    className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--neon-blue,#00eaff)]"
                    style={{ color: "var(--card-fg)" }}
                  >
                    <span
                      className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-[var(--neon-blue,#00eaff)]"
                      style={{ color: "var(--card-fg)" }}
                    >
                      {category.name}
                    </span>
                    <span className="transition-colors hover:text-[var(--neon-blue,#00eaff)]" style={{ color: "var(--card-fg)" }}>
                      {category.icon}
                    </span>
                  </div>
                  <span className="hidden text-xs transition-colors hover:text-[var(--neon-blue,#00eaff)] sm:inline" style={{ color: "var(--card-fg)" }}>
                    {category.images.length} item{category.images.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="space-y-2">
                  <p
                    className="text-xl font-semibold drop-shadow transition-colors hover:text-[var(--neon-blue,#00eaff)]"
                    style={{ color: "var(--card-fg)" }}
                  >
                    {category.name}
                  </p>
                  <p
                    className="text-sm leading-relaxed transition-colors hover:text-[var(--neon-blue,#00eaff)]"
                    style={{ color: "var(--card-fg)" }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          </button>
        );
      }),
    [activeCategory?.id]
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/condo-chic-mastering-the-art-of-table-setting-from-casual-to-formal-elegance~2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/100 to-black/105" />
      <div className="relative space-y-12 pb-8 px-4 sm:px-6 md:px-10">

        {/* soft neon glow background */}
        <div className="pointer-events-none absolute inset-0 mx-auto opacity-30 blur-[120px]">
          <div className="mx-auto h-[200px] w-[200px] rounded-full" style={{ background: `radial-gradient(circle at 50% 50%, ${neonBlue}33, transparent 60%)` }} />
        </div>

        {/* Header */}
        <div className="relative text-center space-y-2 pt-2">
          <h1
            className="neon-flicker text-4xl sm:text-4xl md:text-6xl font-semibold tracking-wide transition-colors hover:text-[#00f0ff]"
            style={{
              color: "#ffffff",
              textShadow: "0 0 8px rgba(10,102,255,0.8), 0 0 18px rgba(0,255,243,0.6)",
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
          >
            Our Menu
          </h1>

          {/* <p
            className="text-sm md:text-base max-w-xl mx-auto px-4 transition-colors hover:text-[#00ff9d]"
            style={{ color: neonGreen }}
          >
            Tap a category to preview its highlights — neon blue & green glow.
          </p> */}

          <div
            className="mx-auto mt-3 h-[2px] w-20 rounded-full shadow-[0_0_12px_rgba(0,255,255,0.5)]"
            style={{ backgroundImage: `linear-gradient(90deg, ${neonBlue}, ${neonGreen})` }}
          />
        </div>

        {/* Category cards */}
        <div className="relative mt-10">
          <p
            className="text-xs uppercase tracking-[0.35em] text-center transition-colors hover:text-[var(--neon-blue,#00eaff)]"
            style={{ color: neonGreen }}
          >
            Explore by Course
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards}
          </div>
        </div>

        {/* Flip gallery preview */}
        {activeCategory ? (
          <div ref={gallerySectionRef} className="relative mt-12 flex flex-col items-center gap-4">
            <p
              className="text-xs uppercase tracking-[0.35em] transition-colors hover:text-[var(--neon-blue,#00eaff)]"
              style={{ color: neonGreen }}
            >
              {activeCategory.name}
            </p>
            <div className="w-full">
              <FlipGallery
                images={activeCategory.images}
                width="min(1100px, 100vw)"
                aspectRatio={2.1}
                className="mx-auto"
              />
            </div>
          </div>
        ) : (
          <div className="relative mt-12 flex flex-col items-center gap-4 text-center">
            <p
              className="text-xs uppercase tracking-[0.35em] transition-colors hover:text-[var(--neon-blue,#00eaff)]"
              style={{ color: neonGreen }}
            >
              Choose a category
            </p>
            <p
              className="text-sm max-w-md transition-colors hover:text-[var(--neon-blue,#00eaff)]"
              style={{ color: neonGreen }}
            >
              Pick any card above to open the menu.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
