export function Location() {
  return (
    <section id="lokasi" className="py-24 md:py-32">
      <div className="section-shell grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div className="overflow-hidden rounded-[1.5rem] shadow-[0_30px_80px_rgba(30,20,12,0.12)] sm:rounded-[2rem]">
          <iframe
            title="Peta lokasi MOSAC - Mayor Oking Space and Coffee"
            src="https://www.google.com/maps?q=MOSAC%20Mayor%20Oking%20Space%20and%20Coffee%20Bogor&z=15&output=embed"
            className="h-[300px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="glass-panel rounded-[1.5rem] border border-white/35 p-5 sm:rounded-[2rem] sm:p-7 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-deep">
            Lokasi
          </p>
          <h2 className="section-title mt-4">Singgah ke spot favorit baru di Bogor.</h2>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Alamat</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Kawasan Mayor Oking, Citeureup, Bogor, Indonesia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jam Operasional</h3>
              <p className="mt-2 text-sm leading-7 text-muted">Setiap hari, 10:00 - 22:00 WIB</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <div className="rounded-full bg-primary px-4 py-2 font-semibold text-[#24160d]">
                4.5/5
              </div>
              <p className="text-sm text-muted">
                Rating pelanggan untuk ambience, rasa, dan kenyamanan.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=MOSAC+Mayor+Oking+Space+and+Coffee+Bogor"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-[#24160d] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#3a2619] sm:w-auto"
            >
              Buka di Google Maps
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20MOSAC%2C%20saya%20mau%20tanya%20ketersediaan%20tempat."
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-primary/40 bg-primary/10 px-6 py-4 text-center text-sm font-semibold text-primary-deep transition hover:bg-primary/15 sm:w-auto"
            >
              Reservasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
