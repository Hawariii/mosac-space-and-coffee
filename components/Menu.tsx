const categories = [
  {
    title: "Coffee",
    description: "Espresso, latte, cappuccino, dan signature coffee dengan karakter roast hangat.",
    items: ["Americano", "Spanish Latte", "Butterscotch Latte"],
  },
  {
    title: "Non-Coffee",
    description: "Pilihan creamy, refreshing, dan nyaman buat semua mood nongkrong.",
    items: ["Matcha Latte", "Chocolate Velvet", "Lemon Tea Sparkling"],
  },
  {
    title: "Food",
    description: "Menu gurih dan mengenyangkan untuk brunch, dinner ringan, atau sharing.",
    items: ["Rice Bowl", "Pasta Creamy", "Chicken Sambal Matah"],
  },
  {
    title: "Snacks",
    description: "Teman ngobrol yang pas, dari yang renyah sampai manis buat pencuci mood.",
    items: ["French Fries", "Mix Platter", "Croffle Ice Cream"],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Pilihan Menu
          </p>
          <h2 className="section-title mt-4">
            Menu yang approachable, photogenic, dan cocok buat repeat order.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="glass-panel rounded-[1.75rem] border border-white/35 p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full bg-primary/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">
                  Popular
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white/55 px-4 py-4"
                  >
                    <span className="font-medium">{item}</span>
                    <span className="text-sm text-muted">Mulai 25k</span>
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
            className="rounded-full bg-[#24160d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#3a2619]"
          >
            Lihat Menu Lengkap
          </a>
        </div>
      </div>
    </section>
  );
}
