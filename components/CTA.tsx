export function CTA() {
  return (
    <section className="pb-20 pt-8 md:pb-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#24160d] px-6 py-12 text-white shadow-[0_30px_90px_rgba(34,22,14,0.32)] md:px-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                Final Invitation
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl">
                Tempat nongkrong bukan cuma soal kopi, tapi soal pengalaman.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72">
                Kalau kamu cari tempat yang terasa hangat, terlihat berkelas,
                dan nyaman untuk kembali lagi, MOSAC siap jadi destinasi favorit
                berikutnya.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20MOSAC%2C%20saya%20ingin%20berkunjung."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-[#24160d] transition hover:bg-[#d5b894]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=MOSAC+Mayor+Oking+Space+and+Coffee+Bogor"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/8 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/12"
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
