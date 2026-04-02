import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Licensed & government-registered recruitment agency",
  "Direct tie-ups with Gulf manufacturers & factories",
  "End-to-end support from selection to departure",
  "Transparent process with zero hidden charges",
  "Free guidance — no fees from candidates upfront",
];

const countries = [
  { flag: "🇦🇪", name: "Dubai", sub: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&auto=format&fit=crop" },
  { flag: "🇰🇼", name: "Kuwait", sub: "Kuwait City", img: "https://images.unsplash.com/photo-1559060017-445fb9313244?w=400&q=80&auto=format&fit=crop" },
  { flag: "🇸🇦", name: "Riyadh", sub: "Saudi Arabia", img: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=400&q=80&auto=format&fit=crop" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="about" className="py-28 section-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1565C0 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}
              className="text-blue-600 text-sm font-bold tracking-widest uppercase">About Almoon HR</motion.span>
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight text-slate-800">
              Bridging Talent with <span className="gradient-text">Gulf Opportunity</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              className="text-slate-500 leading-relaxed mb-5 text-[15px]">
              Almoon HR Consultancy is a trusted recruitment agency based in India, specializing in placing skilled workers with reputed companies across the Gulf. We work directly with factories, manufacturing units, and industrial firms in Dubai, Kuwait, and Riyadh.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.28 }}
              className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              Our team manages the complete journey — from sourcing the right opportunity to documentation, visa processing, and ensuring you reach your destination safely and confidently.
            </motion.p>
            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Country image cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Countries We Operate In</p>
            <div className="grid grid-cols-3 gap-4">
              {countries.map(({ flag, name, sub, img }, i) => (
                <motion.div key={name}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="rounded-2xl overflow-hidden card-light group cursor-default">
                  <div className="relative h-28 overflow-hidden">
                    <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl">{flag}</span>
                  </div>
                  <div className="px-3 py-3 text-center">
                    <div className="font-bold text-slate-800 text-sm">{name}</div>
                    <div className="text-xs text-slate-400">{sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Industries pill cloud */}
            <div className="mt-6 card-light rounded-2xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Industries We Recruit For</p>
              <div className="flex flex-wrap gap-2">
                {["CNC Operations","Factory Helper","Manufacturing","General Labour","Industrial Work","Skilled Trades","Machine Operator"].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{ background: "rgba(21,101,192,0.08)", color: "#1565C0", border: "1px solid rgba(21,101,192,0.2)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
