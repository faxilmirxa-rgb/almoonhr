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
  FaBolt,
  FaArrowRight
} from "react-icons/fa";

const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const sectors = [
    { name: "CONSTRUCTION & INFRASTRUCTURE", icon: FaBuilding, color: "from-blue-500 to-[#1871db]" },
    { name: "MANUFACTURING & ENGINEERING", icon: FaIndustry, color: "from-[#1871db] to-blue-600" },
    { name: "HOSPITALITY & TOURISM", icon: FaHotel, color: "from-blue-600 to-[#1871db]" },
    { name: "HEALTHCARE", icon: FaHospital, color: "from-[#1871db] to-blue-500" },
    { name: "RETAIL & CONSUMER SERVICES", icon: FaShoppingCart, color: "from-blue-500 to-[#1871db]" },
    { name: "TECHNOLOGY & BUSINESS SERVICES", icon: FaMicrochip, color: "from-[#1871db] to-blue-600" },
    { name: "LOGISTICS & SUPPLY CHAIN", icon: FaTruck, color: "from-blue-600 to-[#1871db]" },
    { name: "ENERGY & UTILITIES", icon: FaBolt, color: "from-[#1871db] to-blue-500" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1871db]/5 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header - No animation on mount, just fade when in view */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
          }}
          className="text-center mb-6"
        >
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Workforce Solutions Across</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Key Sectors
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-[#1871db] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Description */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
          }}
          className="text-center"
        >
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            AlMoon supports organizations across a wide range of industries where talent plays a critical role in operational success.
          </p>
        </div>

        {/* Sectors Grid - Simple no-stagger animation */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s'
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-4 shadow-sm border border-[#1871db]/10 hover:shadow-md hover:border-[#1871db]/30 transition-all duration-300 cursor-default"
              style={{
                transition: 'all 0.3s ease-out'
              }}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105`}>
                  <sector.icon className="text-white text-sm transition-all duration-300" />
                </div>
                
                {/* Sector Name */}
                <h3 className="font-['Sora'] text-xs md:text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#1871db] leading-tight flex-1">
                  {sector.name}
                </h3>
                
                {/* Arrow indicator on hover */}
                <FaArrowRight className="text-[#1871db] text-xs opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom subtle line */}
        <div
          style={{
            width: isInView ? '60px' : '0px',
            opacity: isInView ? 1 : 0,
            transition: 'width 0.6s ease-out 0.5s, opacity 0.4s ease-out 0.5s'
          }}
          className="h-0.5 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-12"
        />
      </div>
    </section>
  );
};

export default SectorsSection;