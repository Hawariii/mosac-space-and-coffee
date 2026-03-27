"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

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
            className="hidden shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#24160d] transition hover:bg-[#d5b894] md:inline-flex"
          >
            Visit / WhatsApp
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden",
              scrolled
                ? "border-[var(--border)] bg-white/70 text-[#24160d]"
                : "border-white/15 bg-white/10 text-white",
            ].join(" ")}
          >
            <span className="relative h-4 w-4">
              <span
                className={[
                  "absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition",
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] block h-0.5 w-4 rounded-full bg-current transition",
                  menuOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] block h-0.5 w-4 rounded-full bg-current transition",
                  menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
              className="glass-panel mt-3 rounded-[1.5rem] border border-white/40 p-3 text-[#24160d] md:hidden"
            >
              <nav aria-label="Navigasi mobile" className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/60"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="https://wa.me/6281234567890?text=Halo%20MOSAC%2C%20saya%20ingin%20reservasi."
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-[#24160d] transition hover:bg-[#d5b894]"
              >
                Visit / WhatsApp
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
