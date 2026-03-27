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
      <div className="section-shell pt-4">
        <div
          className={[
            "flex items-center justify-between rounded-full px-4 py-3 text-sm transition-all duration-300 md:px-6",
            scrolled
              ? "glass-panel border border-white/35 text-[#24160d]"
              : "border border-white/15 bg-black/15 text-white",
          ].join(" ")}
        >
          <a href="#beranda" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-[#24160d]">
              MS
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-current/70">
                Bogor
              </p>
              <p className="text-sm font-semibold">
                MOSAC - Mayor Oking Space and Coffee
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
            className="rounded-full bg-primary px-4 py-2 font-semibold text-[#24160d] transition hover:bg-[#d5b894]"
          >
            Visit / WhatsApp
          </a>
        </div>
      </div>
    </motion.header>
  );
}
