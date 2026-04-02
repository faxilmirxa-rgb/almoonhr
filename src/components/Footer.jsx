import { Mail, Phone, MapPin } from "lucide-react";

const WAIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

const links = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  "Job Seekers": [
    { label: "Current Openings", href: "#jobs" },
    { label: "How It Works", href: "#process" },
    { label: "Apply on WhatsApp", href: "https://wa.me/919999999999" },
  ],
  Locations: [
    { label: "🇦🇪 Dubai, UAE", href: "#" },
    { label: "🇰🇼 Kuwait City", href: "#" },
    { label: "🇸🇦 Riyadh, KSA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-blue-100"
      style={{ background: "linear-gradient(180deg, #e8f0fe 0%, #dbeafe 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-black tracking-wider mb-1"
                style={{ background: "linear-gradient(135deg, #1565C0, #42A5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                ALMOON
              </div>
              <div className="text-[10px] tracking-[0.3em] text-blue-400 font-semibold">HR CONSULTANCY</div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Trusted Gulf recruitment partner. Connecting Indian talent with verified Gulf employers since 2010+.
            </p>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white">
              <WAIcon /> WhatsApp Us
            </a>
          </div>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-blue-700 transition-colors font-medium">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Almoon HR Consultancy. All rights reserved.</p>
          <p className="text-xs text-slate-400">Registered Recruitment Agency · India</p>
        </div>
      </div>
    </footer>
  );
}
