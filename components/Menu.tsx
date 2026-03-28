const categories = [
  {
    title: "Espresso Based Coffee",
    description:
      "Pilihan kopi klasik dan signature dengan rasa yang kuat, elegan, dan cocok dinikmati dari pagi sampai malam.",
    items: [
      "Espresso - 12k",
      "Americano - 16-18k",
      "Latte (Hazelnut / Vanilla) - 20-22k",
      "Kopi Susu Gula Aren - 20-22k",
      "Kopi Susu Butterscotch - 24-26k",
      "Kopi Susu Klepon - 25-27k",
    ],
  },
  {
    title: "Nitro Crafts & Refreshers",
    description:
      "Signature drinks dengan rasa unik, creamy, segar, dan cocok buat chill sore atau nongkrong santai.",
    items: [
      "Apple Mint - 24k",
      "Snowberry Tea - 24k",
      "Summer Tea - 24k",
      "Tropical Coffee - 24k",
      "Blue Ocean Mojito - 24k",
      "Lychee Yakult - 26k",
    ],
  },
  {
    title: "Tea & Non Espresso Based",
    description:
      "Pilihan ringan untuk yang ingin tetap menikmati vibes MOSAC tanpa espresso, dari tea based sampai latte non kopi.",
    items: [
      "Lychee Tea - 25-26k",
      "Lemongrass Tea - 25-26k",
      "Black Charcoal Latte - 24k",
      "Chocolate Latte - 18k",
      "Matcha Latte - 16k",
      "Taro Latte - 16k",
    ],
  },
  {
    title: "Light Snacks",
    description:
      "Teman nongkrong yang wajib ada, cocok buat sharing atau nemenin kopi tanpa bikin suasana terlalu berat.",
    items: [
      "French Fries - 5k",
      "Ice Cream - 8k",
      "Nuggets - 12k",
      "Chicken Wings - 7k",
      "Sausage - 15k",
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Pilihan Menu
          </p>
          <h2 className="section-title mt-4">
            Bukan cuma kopi, tapi pilihan menu yang bikin betah berlama-lama.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            Dari espresso based coffee, nitro crafts, tea, refreshers, sampai
            light snacks, menu MOSAC dirancang untuk nemenin kerja, nongkrong,
            dan kumpul santai dengan harga yang tetap ramah di kantong.
          </p>
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
                    <span className="shrink-0 text-xs text-muted sm:text-sm">MOSAC Menu</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:flex sm:flex-wrap sm:justify-center">
          <a
            href="https://wa.me/6285173383437?text=Halo%20MOSAC%2C%20boleh%20minta%20menu%20lengkap%3F"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-[#24160d] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#3a2619] sm:w-auto"
          >
            Lihat Menu Lengkap
          </a>
          <a
            href="https://gofood.link/a/Gx5XPJQ?utm_source=linktree_admin_share&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQ0dS9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadh8WdjHwlYKVM1FTN4uOyE-OkinerIFZxxDbvZtuhYe8W2oWHppDAf5TiWgA_aem_zdFkxFXPtXkXcjNsBPX_yQ"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-[var(--border)] bg-white/70 px-7 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-white sm:w-auto"
          >
            GoFood
          </a>
          <a
            href="https://r.grab.com/g/6-20260328_154914_6a6dc38a1f8f4a2c84b0dc7938749b71_MEXMPS-6-C36WANLWKBTYFE"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-[var(--border)] bg-white/70 px-7 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-white sm:w-auto"
          >
            GrabFood
          </a>
          <a
            href="https://shopee.co.id/universal-link/now-food/shop/21159289?deep_and_deferred=1&shareChannel=copy_link"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-[var(--border)] bg-white/70 px-7 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-white sm:w-auto"
          >
            ShopeeFood
          </a>
        </div>
      </div>
    </section>
  );
}
