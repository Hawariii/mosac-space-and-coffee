import mosacData from "@/data/mosac.json";

export function CTA() {
  return (
    <section className="pb-20 pt-8 md:pb-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-[#24160d] px-5 py-10 text-white shadow-[0_30px_90px_rgba(34,22,14,0.32)] sm:rounded-[2.5rem] sm:px-6 sm:py-12 md:px-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                Final Invitation
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl md:text-6xl">
                MOSAC bukan cuma tempat minum kopi, tapi ruang untuk beraktivitas dan menciptakan momen.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72">
                Kalau kamu cari tempat yang nyaman untuk work from cafe,
                nongkrong santai, makan, atau kumpul bareng teman di Citeureup,
                MOSAC siap jadi spot andalan yang ingin kamu kunjungi lagi.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={mosacData.contact.whatsapp_visit_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-[#d5b894] sm:w-auto"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=MOSAC+Mayor+Oking+Space+and+Coffee+Bogor"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-white/15 bg-white/8 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/12 sm:w-auto"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
