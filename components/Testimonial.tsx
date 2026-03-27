"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dina Rahma",
    role: "Content Creator",
    text: "Tempatnya estetik banget tapi tetap nyaman buat duduk lama. Lighting malamnya bikin suasana berasa premium.",
  },
  {
    name: "Arga Pratama",
    role: "Remote Worker",
    text: "WiFi lancar, kursinya enak, dan suasananya pas buat kerja. Jarang nemu cafe yang balance antara produktif dan cozy.",
  },
  {
    name: "Nadia & Friends",
    role: "Weekend Hangout",
    text: "Kami suka karena pilihan tempat duduknya banyak dan ada area buat main juga. Cocok buat nongkrong rame-rame.",
  },
  {
    name: "Rizky H",
    role: "Coffee Lover",
    text: "Kopinya proper, makanannya aman, dan ambience-nya punya karakter. Tempat kayak gini gampang jadi langganan.",
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
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Testimoni
          </p>
          <h2 className="section-title mt-4">
            Pengalaman pengunjung yang bikin MOSAC terasa semakin nyata.
          </h2>
        </div>

        <div className="glass-panel rounded-[2rem] border border-white/35 p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={testimonials[active].name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
            >
              <div>
                <Stars />
                <p className="mt-6 max-w-3xl text-2xl leading-[1.6] tracking-[-0.03em] text-balance md:text-3xl">
                  “{testimonials[active].text}”
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/60 p-6">
                <p className="text-xl font-semibold">{testimonials[active].name}</p>
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
