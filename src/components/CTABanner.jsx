import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const WA = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 section-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d3b8c 0%, #1565C0 50%, #1976D2 100%)", boxShadow: "0 20px 80px rgba(21,101,192,0.35)" }}>
          {/* Background image */}
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80&auto=format&fit=crop"
            alt="Dubai skyline" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60" />

          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px"
          }} />

          <div className="relative z-10 text-center px-8 py-16 md:py-20">
            <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bounce-wa"
              style={{ background: "#25D366", boxShadow: "0 8px 30px rgba(37,211,102,0.4)" }}>
              <WA />
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Work in the Gulf?
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
              className="text-blue-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              One WhatsApp message is all it takes. Tell us your name and experience — we'll guide you through everything else.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919999999999?text=Hello%20Almoon%20HR%2C%20I%20am%20interested%20in%20Gulf%20job%20opportunities."
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-white font-black px-10 py-4 rounded-full text-base shadow-2xl"
                style={{ color: "#1565C0" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5" style={{fill:"#25D366"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/></svg>
                Chat on WhatsApp
                <ArrowRight size={18} />
              </motion.a>
              <a href="#jobs"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                View Open Positions
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
