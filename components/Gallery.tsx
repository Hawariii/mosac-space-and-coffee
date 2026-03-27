"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    title: "Signature brew",
    subtitle: "Roasted notes, warm finish",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    alt: "Close up secangkir kopi hitam di atas meja kayu",
    height: 760,
  },
  {
    title: "Industrial corner",
    subtitle: "Light, texture, atmosphere",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    alt: "Interior cafe dengan meja kayu dan kursi modern",
    height: 560,
  },
  {
    title: "Comfort food",
    subtitle: "Perfect pair for your coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    alt: "Minuman kopi creamy ditemani dessert",
    height: 620,
  },
  {
    title: "Outdoor mood",
    subtitle: "Fresh air for long hangouts",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80",
    alt: "Area outdoor cafe dengan suasana santai",
    height: 700,
  },
  {
    title: "Brunch moments",
    subtitle: "Simple, tasteful, photogenic",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    alt: "Makanan brunch yang ditata rapi di meja cafe",
    height: 520,
  },
  {
    title: "Evening scene",
    subtitle: "When MOSAC starts to glow",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    alt: "Suasana coffee shop di malam hari dengan lighting hangat",
    height: 660,
  },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
              Galeri Ruang
            </p>
            <h2 className="section-title mt-4">
              Visual yang bikin orang ingin langsung datang dan ngerasain sendiri.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted">
            Sudut-sudut terbaik MOSAC dirancang untuk terasa hidup di mata dan
            nyaman saat ditempati, dari kopi pagi sampai nongkrong malam.
          </p>
        </div>

        <div className="masonry-column">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="masonry-item group"
            >
              <div className="premium-ring relative overflow-hidden rounded-[1.75rem]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={item.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/78">{item.subtitle}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
