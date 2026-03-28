const categories = [
  {
    title: "Coffee",
    description: "Pilihan kopi berkualitas untuk teman kerja, meeting, atau menikmati suasana MOSAC dengan santai.",
    items: ["Latte", "Americano", "Cappuccino"],
  },
  {
    title: "Non-Coffee",
    description: "Minuman yang tetap nyaman dinikmati semua kalangan, dari yang creamy sampai yang refreshing.",
    items: ["Matcha Latte", "Chocolate", "Special Drinks"],
  },
  {
    title: "Food",
    description: "Menu makanan berat yang cocok untuk isi tenaga saat work from cafe atau kumpul lebih lama.",
    items: ["Rice Bowl", "Nasi Goreng", "Pasta"],
  },
  {
    title: "Snacks",
    description: "Pilihan makanan ringan untuk teman ngobrol, sharing, atau pencuci mood sambil santai.",
    items: ["French Fries", "Mix Platter", "Snack Bites"],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Pilihan Menu
          </p>
          <h2 className="section-title mt-4">
            Bukan cuma kopi, tapi pilihan menu yang bikin betah berlama-lama.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="glass-panel rounded-[1.5rem] border border-white/35 p-5 sm:rounded-[1.75rem] sm:p-6 md:p-8"
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-5">
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{category.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full bg-primary/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-deep sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                  Popular
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:mt-6">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-white/55 px-4 py-3.5 sm:py-4"
                  >
                    <span className="min-w-0 text-sm font-medium sm:text-base">{item}</span>
                    <span className="shrink-0 text-xs text-muted sm:text-sm">Ramah di kantong</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20MOSAC%2C%20boleh%20minta%20menu%20lengkap%3F"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-[#24160d] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#3a2619] sm:w-auto"
          >
            Lihat Menu Lengkap
          </a>
        </div>
      </div>
    </section>
  );
}
