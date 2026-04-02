import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const contacts = [
  { icon: null, wa: true, label: "WhatsApp", value: "+91 99999 99999", sub: "Fastest way to reach us", href: "https://wa.me/919999999999", color: "#25D366", bg: "#dcfce7" },
  { icon: Phone, label: "Phone", value: "+91 99999 99999", sub: "Mon–Sat, 9 AM – 7 PM", href: "tel:+919999999999", color: "#1565C0", bg: "#dbeafe" },
  { icon: Mail, label: "Email", value: "info@almoonhr.com", sub: "We reply within 24 hours", href: "mailto:info@almoonhr.com", color: "#0288d1", bg: "#e0f2fe" },
  { icon: MapPin, label: "Office", value: "Your City, India", sub: "Visit by appointment", href: "#", color: "#7c3aed", bg: "#ede9fe" },
];

const WAIcon = ({ cls }) => (
  <svg viewBox="0 0 24 24" className={cls}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="contact" className="py-28 section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-bold tracking-widest uppercase">Get In Touch</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mt-3 text-slate-800">
            Contact <span className="gradient-text">Almoon HR</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-[15px] max-w-md mx-auto">
            No forms, no waiting. Just reach out directly — we're here to help.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contacts.map(({ icon: Icon, wa, label, value, sub, href, color, bg }, i) => (
            <motion.a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -5 }}
              className="card-light rounded-2xl p-7 flex flex-col gap-4 group cursor-pointer" style={{ textDecoration: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                {wa ? <WAIcon cls={`w-6 h-6`} style={{fill: color}} /> : <Icon size={22} style={{ color }} />}
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">{label}</span>
                <p className="text-slate-800 font-bold mt-1 text-base group-hover:text-blue-700 transition-colors">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{sub}</p>
              </div>
              {href !== "#" && <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors mt-auto self-end" />}
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}
          className="card-light rounded-2xl p-6 flex items-center gap-4 max-w-lg mx-auto text-center justify-center shadow-sm">
          <Clock size={16} className="text-blue-500 flex-shrink-0" />
          <p className="text-sm text-slate-500">
            Office Hours: <span className="text-slate-800 font-semibold">Monday – Saturday, 9:00 AM – 7:00 PM IST</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
