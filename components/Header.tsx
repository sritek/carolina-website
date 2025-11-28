import Link from "next/link";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

// export default function Header() {
//   return (
//     <header className="border-b border-black/20 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue text-white">
//       <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
//         <Link className="text-lg font-semibold uppercase tracking-[0.2em]" href="/">
//           Carolina · The Luminary Lounge
//         </Link>
//         <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold">
//           {primaryNav.map((item) => (
//             <Link
//               key={item.href}
//               className="transition-opacity hover:opacity-80"
//               href={item.href}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

export default function Header() {
  return (
    // Replaced 'bg-gradient-to-r...' with 'bg-black' (or 'bg-gray-900')
    // Replaced 'text-white' with 'text-cyan-400' for a bright blue neon glow
    <header className="border-b border-white/20 bg-black text-cyan-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        {/* The main logo text color is now set by the parent */}
        <Link className="text-lg font-semibold uppercase tracking-[0.2em]" href="/">
          Carolina · The Luminary Lounge
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              className="transition-opacity hover:opacity-80"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

