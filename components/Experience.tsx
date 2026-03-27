"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Work from Cafe",
    copy: "Meja nyaman, koneksi stabil, dan ambience yang bantu kamu tetap fokus lebih lama.",
    tone: "from-[#f2dfc5] to-[#f8f5f2]",
  },
  {
    title: "Hangout Time",
    copy: "Spot duduk yang fleksibel untuk quality time santai, ngobrol panjang, atau mini celebration.",
    tone: "from-[#dcc2a2] to-[#f6eee4]",
  },
  {
    title: "Gaming Session",
    copy: "Area PlayStation yang bikin nongkrong terasa lebih hidup dan punya alasan buat balik lagi.",
    tone: "from-[#c8a97e] to-[#f1e4d2]",
  },
];

export function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Experience
          </p>
          <h2 className="section-title mt-4">
            Satu tempat, banyak alasan buat datang lagi.
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`min-w-[85%] snap-start rounded-[2rem] bg-gradient-to-br ${experience.tone} p-8 shadow-[0_24px_60px_rgba(63,39,24,0.12)] md:min-w-[32%]`}
            >
              <div className="flex h-full flex-col justify-between gap-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5d402c]">
                    MOSAC Mood {index + 1}
                  </p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">
                    {experience.title}
                  </h3>
                </div>
                <p className="max-w-xs text-sm leading-8 text-[#4f3a2d]">
                  {experience.copy}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
