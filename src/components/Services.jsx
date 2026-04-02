import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, FileCheck, Plane, Phone, Shield, Award } from "lucide-react";

const services = [
  { icon: Search, title: "Job Sourcing", desc: "We source verified openings from trusted Gulf employers — factories, manufacturing plants, and industrial companies.", color: "#1565C0", bg: "#dbeafe" },
  { icon: FileCheck, title: "Documentation Support", desc: "From passport verification to visa paperwork, we guide you through every document required for a smooth application.", color: "#0288d1", bg: "#e0f2fe" },
  { icon: Shield, title: "Candidate Screening", desc: "We match the right candidate to the right role. Skills and experience are evaluated to ensure the best fit.", color: "#1976D2", bg: "#e8f4fd" },
  { icon: Plane, title: "Pre-Departure Guidance", desc: "Before you fly, we brief you on the country, employer expectations, and what to expect — so you arrive prepared.", color: "#1565C0", bg: "#dbeafe" },
  { icon: Phone, title: "Ongoing Support", desc: "We stay connected even after placement. Any issues or queries are handled with care throughout your assignment.", color: "#0288d1", bg: "#e0f2fe" },
  { icon: Award, title: "Verified Employers Only", desc: "Every company we work with is verified and vetted. We never work with unregistered or unverified employers.", color: "#1976D2", bg: "#e8f4fd" },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="services" className="py-28 section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-bold tracking-widest uppercase">What We Do</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mt-3 text-slate-800">
            Full-Service <span className="gradient-text">Recruitment</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
            We handle everything — from finding the right job to helping you land safely in the Gulf.
          </motion.p>
        </div>
        {/* Image banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-xl shadow-blue-100 relative">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop"
            alt="Factory workers" className="w-full h-48 md:h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-700/30 to-transparent flex items-center px-10">
            <div>
              <div className="text-white font-black text-2xl md:text-3xl">We Place CNC Operators &</div>
              <div className="text-blue-200 font-black text-2xl md:text-3xl">Factory Helpers in the Gulf</div>
            </div>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="card-light rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: bg }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
