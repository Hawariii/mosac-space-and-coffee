"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dina Rahma",
    role: "Content Creator",
    text: "Yang paling kerasa di MOSAC itu tempatnya luas dan estetik, tapi tetap nyaman dipakai lama. Cocok buat bikin konten tanpa kehilangan feel hangatnya.",
  },
  {
    name: "Arga Pratama",
    role: "Remote Worker",
    text: "Buat work from cafe, MOSAC enak banget. WiFi aman, tempat duduk lega, dan suasananya produktif tanpa terasa terlalu formal.",
  },
  {
    name: "Nadia & Friends",
    role: "Weekend Hangout",
    text: "Kami suka karena ada area indoor dan outdoor, jadi bisa pilih suasana. Ditambah ada PlayStation, nongkrong rame-rame jadi lebih seru.",
  },
  {
    name: "Rizky H",
    role: "Coffee Lover",
    text: "Bukan cuma kopinya enak, tapi kombinasi coffee, food, dan tempatnya bikin MOSAC terasa lengkap. Tempat seperti ini gampang jadi langganan.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-primary" aria-label="Rating 5 bintang">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
              Testimoni
            </p>
            <h2 className="section-title mt-4">
              Pengalaman pengunjung yang paling sering diingat dari MOSAC.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted lg:ml-auto lg:text-base">
            Yang menonjol dari MOSAC bukan cuma menunya, tapi kombinasi tempat,
            suasana, dan fleksibilitas aktivitas yang bikin orang betah kembali.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[rgba(75,54,38,0.08)] bg-white/76 p-5 shadow-[0_18px_48px_rgba(32,24,21,0.07)] sm:p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={testimonials[active].name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center"
            >
              <div>
                <Stars />
                <p className="mt-5 max-w-3xl text-xl leading-[1.7] tracking-[-0.03em] text-balance sm:mt-6 sm:text-2xl md:text-3xl">
                  “{testimonials[active].text}”
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[rgba(75,54,38,0.08)] bg-[#f7f1ea] p-5 sm:rounded-[1.5rem] sm:p-6">
                <p className="text-lg font-semibold sm:text-xl">{testimonials[active].name}</p>
                <p className="mt-2 text-sm text-muted">{testimonials[active].role}</p>
                <div className="mt-8 flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      aria-label={`Lihat testimoni ${testimonial.name}`}
                      onClick={() => setActive(index)}
                      className={[
                        "h-2 rounded-full transition-all",
                        index === active ? "w-10 bg-[#24160d]" : "w-2 bg-[#c7b3a0]",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
