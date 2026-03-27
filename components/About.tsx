"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="tentang" className="py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <div className="premium-ring relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Suasana cafe dengan meja kayu dan dekor modern industrial"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Space & Coffee
              </p>
              <p className="mt-2 max-w-xs text-lg font-medium">
                Desain hangat dengan detail industrial yang bikin betah dari
                siang sampai malam.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Tentang MOSAC
          </p>
          <h2 className="section-title max-w-2xl">
            Ruang nyaman untuk kerja fokus, ngobrol santai, dan recharge dengan
            kopi yang proper.
          </h2>
          <p className="section-copy">
            Berlokasi di area Mayor Oking, MOSAC dirancang sebagai coffee shop
            yang terasa premium namun tetap approachable. Material hangat,
            pencahayaan lembut, dan layout yang lega membuat setiap sudut terasa
            pas untuk laptopan, meeting kecil, sampai quality time bareng teman.
          </p>
          <p className="section-copy">
            Vibe modern industrial yang bersih dipadukan dengan pelayanan
            ramah, menu yang easy to enjoy, dan fasilitas lengkap menjadikan
            MOSAC lebih dari sekadar tempat ngopi.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Modern vibe", "Interior clean dan stylish"],
              ["Work friendly", "Nyaman untuk WFC dan meeting"],
              ["Social hub", "Pas buat nongkrong sampai malam"],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="glass-panel rounded-3xl border border-white/40 p-5"
              >
                <p className="text-lg font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
