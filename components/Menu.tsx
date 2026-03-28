import mosacData from "@/data/mosac.json";

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
          {mosacData.menu_categories.map((category) => (
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
            href={"https://drive.google.com/file/d/11RNEKxre5hcEVHgQ1wbBbGQBJRi_Gclp/view?usp=drivesdk"}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-[#24160d] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#3a2619] sm:w-auto"
          >
            Lihat Menu Lengkap
          </a>
          {mosacData.delivery.map((delivery) => (
            <a
              key={delivery.name}
              href={delivery.url}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-[var(--border)] bg-white/70 px-7 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-white sm:w-auto"
            >
              {delivery.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
