"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingTransition = {
  duration: 5.5,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

export function Hero() {
  return (
    <section
      id="beranda"
      className="grain-overlay relative flex min-h-screen items-end overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80"
        alt="Interior coffee shop modern dengan pencahayaan hangat"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,126,0.36),transparent_28%)]" />

      <div className="section-shell relative z-10 flex min-h-screen items-center py-28">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-3xl text-white"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.32em] uppercase backdrop-blur-md">
              Premium Coffee Space di Bogor
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-balance md:text-7xl">
              Tempat Nongkrong Paling Nyaman di Mayor Oking
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
              MOSAC menghadirkan ruang hangout bergaya modern industrial dengan
              kopi berkualitas, ambience hangat, dan sudut favorit untuk kerja,
              ngobrol, sampai main bareng.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lokasi"
                className="rounded-full bg-primary px-7 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-[#d5b894]"
              >
                Kunjungi Sekarang
              </a>
              <a
                href="#galeri"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16"
              >
                Lihat Tempat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex justify-end"
          >
            <motion.div
              animate={{ y: [-8, 10, -8] }}
              transition={floatingTransition}
              className="glass-panel premium-ring grid max-w-md gap-5 rounded-[2rem] p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Signature Mood
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    Cozy, aesthetic, and alive.
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-[#24160d]">
                  4.5
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-sm text-white/76">
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xl font-semibold text-white">WiFi</p>
                  <p className="mt-1">Cepat & stabil</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xl font-semibold text-white">PS</p>
                  <p className="mt-1">Area gaming</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xl font-semibold text-white">22:00</p>
                  <p className="mt-1">Setiap hari</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
