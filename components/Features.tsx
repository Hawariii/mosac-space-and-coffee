"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  text: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Tempat aesthetic & nyaman",
    text: "Interior hangat dengan spot yang fotogenik untuk santai atau bikin konten.",
    icon: (
      <path
        d="M12 3l6.5 4v10L12 21l-6.5-4V7L12 3zm0 3.2L8.5 8.4v5.2L12 15.8l3.5-2.2V8.4L12 6.2z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Harga terjangkau",
    text: "Pilihan menu favorit mulai dari kisaran Rp25k sampai Rp50k.",
    icon: (
      <path
        d="M12 3a9 9 0 100 18 9 9 0 000-18zm.75 4.5v1.06c1.17.2 2.25.95 2.25 2.44 0 1.76-1.47 2.37-2.85 2.7-1.31.32-1.9.6-1.9 1.24 0 .49.48.83 1.2.83.88 0 1.6-.39 2.13-.85l1.12 1.4c-.7.6-1.55 1.03-2.7 1.16v1.02h-1.5v-1.09c-1.54-.27-2.7-1.3-2.77-2.83h1.9c.08.8.68 1.28 1.67 1.28.9 0 1.43-.34 1.43-.92 0-.57-.5-.8-1.62-1.08-1.5-.37-3.13-.92-3.13-2.84 0-1.42 1.04-2.43 2.62-2.73V7.5h1.5z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Free WiFi",
    text: "Internet stabil untuk kerja, streaming, meeting, dan upload konten.",
    icon: (
      <path
        d="M12 17.5a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zm0-3.7a4.7 4.7 0 013.32 1.38l-1.06 1.06a3.22 3.22 0 00-4.52 0l-1.06-1.06A4.7 4.7 0 0112 13.8zm0-3.8c2.53 0 4.82.99 6.52 2.6l-1.06 1.06a7.76 7.76 0 00-10.92 0L5.48 12.6A9.2 9.2 0 0112 10zM12 6.2c3.55 0 6.77 1.39 9.16 3.64L20.1 10.9a11.5 11.5 0 00-16.2 0L2.84 9.84A13 13 0 0112 6.2z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Indoor & outdoor",
    text: "Pilih suasana yang pas, dari sudut teduh indoor sampai area outdoor yang hidup.",
    icon: (
      <path
        d="M12 2l7 5v13h-4v-5H9v5H5V7l7-5zm0 2.45L7 8v10h.5v-5h9v5H17V8l-5-3.55z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "PlayStation area",
    text: "Spot gaming untuk seru-seruan bareng setelah jam kerja atau akhir pekan.",
    icon: (
      <path
        d="M7.5 8.5c0-.83.67-1.5 1.5-1.5h6a1.5 1.5 0 010 3h-6c-.83 0-1.5-.67-1.5-1.5zM9 12h1.5v1.5H12V15h-1.5v1.5H9V15H7.5v-1.5H9V12zm7.25.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm2.5 2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6 5h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3zm0 2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1H6z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Lokasi strategis",
    text: "Mudah dijangkau dari kawasan Mayor Oking dan sekitarnya di Bogor.",
    icon: (
      <path
        d="M12 2a6.5 6.5 0 016.5 6.5c0 4.69-6.5 13.5-6.5 13.5S5.5 13.19 5.5 8.5A6.5 6.5 0 0112 2zm0 3a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill="currentColor"
      />
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Features() {
  return (
    <section id="fasilitas" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
              Fasilitas Unggulan
            </p>
            <h2 className="section-title mt-4">
              Semua yang bikin orang betah berlama-lama ada di sini.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted lg:ml-auto lg:text-base">
            MOSAC dirancang sederhana tapi lengkap. Fokusnya bukan menumpuk
            gimmick, melainkan menghadirkan ruang yang nyaman dipakai berulang
            kali untuk kerja, ngobrol, dan menikmati suasana.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={card}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.5rem] border border-[rgba(75,54,38,0.08)] bg-white/72 p-6 shadow-[0_14px_36px_rgba(32,24,21,0.06)] transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2c1d12] text-primary transition group-hover:bg-primary group-hover:text-[#24160d]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold lg:text-xl">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-7 text-muted">{feature.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
