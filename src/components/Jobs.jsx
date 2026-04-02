import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";

const WA = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

const jobs = [
  { title: "CNC Operator", company: "Manufacturing Company", location: "Dubai, UAE", flag: "🇦🇪", flagImg: "https://flagcdn.com/w80/ae.png", type: "Full Time", experience: "1–3 Years", urgency: "Urgent Hiring", urgencyColor: "#ef4444", skills: ["CNC Machining", "G-Code", "Quality Control"], msg: "Hello Almoon HR, I am interested in the CNC Operator position in Dubai." },
  { title: "CNC Operator", company: "Industrial Firm", location: "Riyadh, Saudi Arabia", flag: "🇸🇦", flagImg: "https://flagcdn.com/w80/sa.png", type: "Full Time", experience: "2+ Years", urgency: "Now Hiring", urgencyColor: "#22c55e", skills: ["CNC Operations", "Blueprint Reading", "Metal Fabrication"], msg: "Hello Almoon HR, I am interested in the CNC Operator position in Riyadh." },
  { title: "Factory Helper", company: "Production Unit", location: "Kuwait City, Kuwait", flag: "🇰🇼", flagImg: "https://flagcdn.com/w80/kw.png", type: "Full Time", experience: "Fresher OK", urgency: "Urgent Hiring", urgencyColor: "#ef4444", skills: ["Production Support", "Material Handling", "Team Work"], msg: "Hello Almoon HR, I am interested in the Factory Helper position in Kuwait." },
  { title: "Factory Helper", company: "Manufacturing Plant", location: "Dubai, UAE", flag: "🇦🇪", flagImg: "https://flagcdn.com/w80/ae.png", type: "Full Time", experience: "0–1 Year", urgency: "Now Hiring", urgencyColor: "#22c55e", skills: ["Assembly Line", "Packaging", "Safety Compliance"], msg: "Hello Almoon HR, I am interested in the Factory Helper position in Dubai." },
];

export default function Jobs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="jobs" className="py-28 section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-bold tracking-widest uppercase">Current Openings</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mt-3 text-slate-800">
            Available <span className="gradient-text">Positions</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-xl mx-auto text-[15px]">
            Interested? Message us directly on WhatsApp — no form, no waiting.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-light rounded-2xl overflow-hidden flex flex-col">
              {/* Country image header */}
              <div className="relative h-28 overflow-hidden">
                <img
                  src={job.title === "CNC Operator"
                    ? "https://images.unsplash.com/photo-1565515636082-86a2060a93df?w=600&q=80&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop"}
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-600/20" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: job.urgencyColor }}>
                    {job.urgency}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <img src={job.flagImg} alt={job.location} className="h-5 rounded shadow" />
                </div>
              </div>
              {/* Card body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-xl font-black text-slate-800">{job.title}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">{job.company}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin size={12} className="text-blue-500" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Briefcase size={12} className="text-blue-500" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock size={12} className="text-blue-500" /> Exp: {job.experience}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: "rgba(21,101,192,0.08)", color: "#1565C0", border: "1px solid rgba(21,101,192,0.18)" }}>
                      {skill}
                    </span>
                  ))}
                </div>
                <a href={`https://wa.me/919999999999?text=${encodeURIComponent(job.msg)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-bold mt-auto">
                  <WA /> Apply via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="text-center mt-10">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            <ChevronRight size={14} className="text-blue-400" />
            New positions added regularly — WhatsApp us to know the latest openings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
