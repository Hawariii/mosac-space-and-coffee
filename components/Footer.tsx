import mosacData from "@/data/mosac.json";

const footerLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#lokasi" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/6 bg-[#efe7df] py-12 text-[#2b1d13]">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-[#24160d]">
              MS
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#7d644f]">
                Bogor
              </p>
              <p className="text-sm font-semibold">{mosacData.name}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#5f4a3a]">
            Destinasi nongkrong modern di Citeureup yang menggabungkan coffee
            shop, food space, dan area produktif dalam suasana modern-industrial
            yang nyaman untuk kerja, santai, dan berkumpul.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7d644f]">
            Navigasi
          </h2>
          <nav className="mt-4 grid gap-3 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-primary-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7d644f]">
            Informasi
          </h2>
          <div className="mt-4 grid gap-4 text-sm text-[#5f4a3a]">
            <p>{mosacData.address}</p>
            <div className="grid gap-1">
              {mosacData.hours.map((hour) => (
                <p key={hour.days}>
                  {hour.days}: {hour.time}
                </p>
              ))}
            </div>
            <a
              href={mosacData.contact.whatsapp_reservation_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#2b1d13] transition hover:text-primary-deep"
            >
              WhatsApp: {mosacData.contact.whatsapp_label}
            </a>
            <a
              href={mosacData.contact.instagram_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#2b1d13] transition hover:text-primary-deep"
            >
              Instagram: {mosacData.contact.instagram_handle}
            </a>
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-black/8 pt-5 text-sm text-[#7d644f]">
        <p>© 2026 {mosacData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
