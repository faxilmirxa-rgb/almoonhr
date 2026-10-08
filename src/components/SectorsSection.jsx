import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaBuilding, 
  FaIndustry, 
  FaHotel, 
  FaHospital, 
  FaShoppingCart, 
  FaMicrochip, 
  FaTruck, 
  FaBolt
} from "react-icons/fa";

const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const sectors = [
    { name: "Construction & Infrastructure", icon: FaBuilding, color: "from-blue-500 to-[#1871db]" },
    { name: "Manufacturing & Engineering", icon: FaIndustry, color: "from-[#1871db] to-blue-600" },
    { name: "Hospitality & Tourism", icon: FaHotel, color: "from-blue-600 to-[#1871db]" },
    { name: "Healthcare & Medical", icon: FaHospital, color: "from-[#1871db] to-blue-500" },
    { name: "Retail & Consumer Services", icon: FaShoppingCart, color: "from-blue-500 to-[#1871db]" },
    { name: "Technology & IT Services", icon: FaMicrochip, color: "from-[#1871db] to-blue-600" },
    { name: "Logistics & Supply Chain", icon: FaTruck, color: "from-blue-600 to-[#1871db]" },
    { name: "Energy & Utilities", icon: FaBolt, color: "from-[#1871db] to-blue-500" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1871db]/5 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Sectors We </span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Staff Globally
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-[#1871db] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Description - Client focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
            From construction sites to healthcare facilities, we supply vetted, deployment-ready 
            manpower to organizations across the Gulf and Europe — matched to your sector, 
            your scale, and your timeline.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-5 shadow-sm border border-[#1871db]/10 hover:border-[#1871db]/30 hover:shadow-[0_12px_30px_-8px_rgba(24,113,219,0.25)] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Soft top-left blue glow on hover */}
              <span className="pointer-events-none absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#1871db]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Left accent bar */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] rounded-r-full bg-[#1871db] transition-all duration-400 group-hover:h-2/3" />

              <div className="relative flex items-center gap-4">
                {/* Icon Tile */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:shadow-[0_8px_20px_rgba(24,113,219,0.35)]`}>
                  <sector.icon className="text-white text-base" />
                </div>
                
                {/* Sector Name */}
                <h3 className="font-['Sora'] text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#1871db] leading-snug flex-1">
                  {sector.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom subtle line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "60px", opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-0.5 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-14"
        />
      </div>
    </section>
  );
};

export default SectorsSection;