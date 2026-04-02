import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, ClipboardList, UserCheck, FileText, Plane, CheckCircle } from "lucide-react";

const WA = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

const steps = [
  { icon: MessageCircle, step: "01", title: "Send WhatsApp Message", desc: "Message us on WhatsApp with your name, work experience, and the type of job you're interested in. Our team responds within hours.", duration: "Same Day", color: "#25D366", bg: "#dcfce7" },
  { icon: ClipboardList, step: "02", title: "Profile Review", desc: "We review your profile and match you with available Gulf positions that fit your skills and experience level.", duration: "1–2 Days", color: "#1565C0", bg: "#dbeafe" },
  { icon: UserCheck, step: "03", title: "Interview & Selection", desc: "Shortlisted candidates are scheduled for an interview with the Gulf employer — in-person or online.", duration: "1–2 Weeks", color: "#0288d1", bg: "#e0f2fe" },
  { icon: FileText, step: "04", title: "Documents Collection", desc: "We guide you through all required documents — passport, photos, medical fitness certificate, and more.", duration: "2–3 Weeks", color: "#7c3aed", bg: "#ede9fe" },
  { icon: Plane, step: "05", title: "Visa & Departure", desc: "Visa is processed by the employer. We coordinate your pre-departure briefing and flight booking assistance.", duration: "2–4 Weeks", color: "#d97706", bg: "#fef3c7" },
  { icon: CheckCircle, step: "06", title: "You're in the Gulf! ✈️", desc: "You fly to your new job. We remain available for any support after you arrive at your destination.", duration: "Done!", color: "#16a34a", bg: "#dcfce7" },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-bold tracking-widest uppercase">Step by Step</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mt-3 text-slate-800">
            How the <span className="gradient-text">Process Works</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-xl mx-auto text-[15px]">
            From your first WhatsApp message to working in the Gulf — here's the exact journey, step by step.
          </motion.p>
        </div>

        {/* Timeline banner */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 }}
          className="text-center mb-12">
          <div className="inline-flex items-center gap-4 glass-light rounded-full px-8 py-3 shadow-sm">
            <span className="text-sm text-slate-500">Total estimated time:</span>
            <span className="text-base font-black gradient-text">6 – 10 Weeks</span>
          </div>
        </motion.div>

        {/* Visual flow image */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-lg shadow-blue-100 relative">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop"
            alt="Flight journey" className="w-full h-44 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-blue-500/40 to-transparent flex items-center px-10">
            <div className="text-white">
              <div className="text-2xl font-black">India → Gulf</div>
              <div className="text-blue-100 text-sm mt-1">Your new journey starts with one WhatsApp message</div>
            </div>
          </div>
        </motion.div>

        {/* Steps — visual timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-blue-200 to-green-200" style={{zIndex:0}} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map(({ icon: Icon, step, title, desc, duration, color, bg }, i) => (
              <motion.div key={step}
                initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                className="card-light rounded-2xl p-7 relative overflow-hidden group">
                {/* Big bg number */}
                <div className="absolute -top-2 -right-2 text-7xl font-black select-none"
                  style={{ color: bg, opacity: 0.8 }}>{step}</div>

                {/* Step circle indicator */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: bg }}>
                  <Icon size={24} style={{ color }} />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color }}> Step {step}</span>
                </div>
                <h3 className="text-lg font-black text-slate-800 mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>

                <div className="flex items-center gap-2">
                  <div className="h-1 w-6 rounded-full" style={{ background: color }} />
                  <span className="text-xs font-bold" style={{ color }}>{duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA at end of process */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.0 }}
          className="text-center mt-14">
          <p className="text-slate-500 mb-5 font-medium">Ready to start your Gulf journey?</p>
          <a href="https://wa.me/919999999999?text=Hello%20Almoon%20HR%2C%20I%20want%20to%20start%20my%20Gulf%20job%20application."
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 px-9 py-4 rounded-full text-white font-bold text-base bounce-wa">
            <WA /> Start with a WhatsApp Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
