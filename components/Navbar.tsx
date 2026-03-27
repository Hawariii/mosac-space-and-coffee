"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Tentang", href: "#tentang" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Galeri", href: "#galeri" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#lokasi" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell pt-3 sm:pt-4">
        <div
          className={[
            "flex items-center justify-between gap-3 rounded-full px-3 py-2.5 text-sm transition-all duration-300 sm:px-4 md:px-6",
            scrolled
              ? "glass-panel border border-white/35 text-[#24160d]"
              : "border border-white/15 bg-black/15 text-white",
          ].join(" ")}
        >
          <a href="#beranda" className="min-w-0 flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-[#24160d] sm:h-10 sm:w-10 sm:text-sm">
              MS
            </span>
            <div className="min-w-0">
              <p className="hidden text-[11px] uppercase tracking-[0.35em] text-current/70 sm:block">
                Bogor
              </p>
              <p className="truncate text-xs font-semibold sm:text-sm">
                <span className="sm:hidden">MOSAC Coffee</span>
                <span className="hidden sm:inline">
                MOSAC - Mayor Oking Space and Coffee
                </span>
              </p>
            </div>
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-7 md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/6281234567890?text=Halo%20MOSAC%2C%20saya%20ingin%20reservasi."
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-[#24160d] transition hover:bg-[#d5b894] sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Visit</span>
            <span className="hidden sm:inline">Visit / WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
