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

      <div className="section-shell relative z-10 flex min-h-screen items-center py-24 sm:py-28">
        <div className="grid w-full gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-3xl text-white lg:max-w-2xl"
          >
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] font-medium tracking-[0.24em] uppercase backdrop-blur-md sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.32em]">
              Modern Space di Citeureup, Bogor
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-balance sm:text-5xl md:text-7xl lg:text-[4.4rem]">
              Tempat Nongkrong Paling Nyaman di Mayor Oking
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              MOSAC menggabungkan coffee shop, food space, dan area produktif
              dalam satu tempat. Dengan desain modern-industrial yang hangat dan
              lokasi strategis dekat pintu Tol Citeureup, MOSAC cocok untuk work
              from cafe, nongkrong santai, sampai kumpul bareng teman.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row sm:gap-4">
              <a
                href="#lokasi"
                className="rounded-full bg-primary px-4 py-3.5 text-center text-sm font-semibold text-[#24160d] transition hover:bg-[#d5b894] sm:px-7 sm:py-4"
              >
                Kunjungi Sekarang
              </a>
              <a
                href="#galeri"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16 sm:px-7 sm:py-4"
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
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-8, 10, -8] }}
              transition={floatingTransition}
              className="mx-auto grid w-full max-w-md gap-4 rounded-[1.75rem] border border-white/12 bg-black/22 p-5 text-white shadow-[0_24px_70px_rgba(16,10,7,0.14)] backdrop-blur-md sm:gap-5 sm:rounded-[2rem] sm:p-6 lg:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    MOSAC Atmosphere
                  </p>
                  <p className="mt-2 text-xl font-semibold sm:text-2xl">
                    Luas, hangat, dan nyaman untuk beraktivitas.
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-[#24160d]">
                  4.5
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs text-white/76 sm:gap-3 sm:text-sm">
                <div className="rounded-2xl border border-white/8 bg-white/4 p-3 sm:p-4">
                  <p className="text-lg font-semibold text-white sm:text-xl">WiFi</p>
                  <p className="mt-1">Untuk kerja nyaman</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-3 sm:p-4">
                  <p className="text-lg font-semibold text-white sm:text-xl">Indoor</p>
                  <p className="mt-1">Dan outdoor luas</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-3 sm:p-4">
                  <p className="text-lg font-semibold text-white sm:text-xl">PS</p>
                  <p className="mt-1">Area hiburan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
