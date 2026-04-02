import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const WAIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 120vh means window.innerHeight * 1.2
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 1.1; // 120vh
      
      if (scrollPosition > triggerPoint) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10, scale: hovered ? 1 : 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl px-4 py-3 shadow-xl border border-blue-100 pointer-events-none"
            style={{ whiteSpace: "nowrap" }}
          >
            <div className="text-sm font-bold text-slate-800">Chat with us!</div>
            <div className="text-xs text-slate-500">We respond within hours</div>
          </motion.div>

          <motion.a
            href="https://wa.me/919999999999?text=Hello%20Almoon%20HR%2C%20I%20am%20interested%20in%20Gulf%20job%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 0.5
            }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
            style={{ 
              background: "linear-gradient(135deg, #25D366, #128C7E)", 
              boxShadow: "0 6px 30px rgba(37,211,102,0.5)" 
            }}
          >
            <WAIcon />
            <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#25D366" }} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}