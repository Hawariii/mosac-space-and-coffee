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
                Coffee, Food, and Productive Space
              </p>
              <p className="mt-2 max-w-xs text-lg font-medium">
                Gaya modern-industrial dengan sentuhan hangat dan area hijau
                yang terasa nyaman sepanjang hari.
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
            Destinasi nongkrong modern di Citeureup yang dibuat untuk kerja,
            santai, makan, dan menciptakan momen.
          </h2>
          <p className="section-copy">
            MOSAC - Mayor Oking Space and Coffee hadir sebagai tempat singgah
            yang menggabungkan coffee shop, food space, dan area produktif dalam
            satu pengalaman yang utuh. Lokasinya strategis dekat pintu Tol
            Citeureup, jadi mudah dijangkau untuk meeting santai, work from
            cafe, atau sekadar rehat sejenak dari rutinitas.
          </p>
          <p className="section-copy">
            Desain modern-industrial yang dipadukan dengan sentuhan hangat,
            area hijau, serta pilihan indoor dan outdoor membuat MOSAC terasa
            estetik tanpa kehilangan kenyamanan. Tempat ini bukan cuma soal
            kopi, tapi ruang untuk beraktivitas, bersosialisasi, dan berlama-lama.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Strategis", "Dekat pintu Tol Citeureup"],
              ["Luas", "Pilihan area indoor dan outdoor"],
              ["Multifungsi", "Pas untuk kerja dan nongkrong"],
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
