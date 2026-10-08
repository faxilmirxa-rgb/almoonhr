import { useRef, useState, useEffect } from "react";
import { FaShieldAlt, FaCheckCircle, FaBuilding, FaRegGem } from "react-icons/fa";
import udhyamImage from "../assets/udhyam.svg";

const GovernmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trustPoints = [
    {
      icon: FaShieldAlt,
      title: "Government Recognized",
      description: "Officially registered recruitment consultancy"
    },
    {
      icon: FaBuilding,
      title: "Udyam (MSME) Registered",
      description: "Structured & legally compliant operations"
    },
    {
      icon: FaCheckCircle,
      title: "100% Transparent Process",
      description: "No hidden fees or surprises"
    },
    {
      icon: FaRegGem,
      title: "Trusted Pathway",
      description: "Safe & dependable career abroad"
    }
  ];

  const bottomBadges = [
    "Government Recognized",
    "Legally Compliant",
    "Transparent Operations",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden"
    >
      {/* Subtle animated background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#1871db]/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#1871db]/5 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="group relative px-4 py-1 bg-[#1871db]/10 rounded-full overflow-hidden">
              <span className="relative z-10 font-['DM_Sans'] text-sm text-[#1871db] font-semibold">
                Government Approved
              </span>
              {/* Soft shimmer on the pill */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Recognized &</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Government Registered
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-[#1871db] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
            className="flex-1"
          >
            <p className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              We operate as a <span className="font-bold text-[#1871db]">government-recognized recruitment consultancy</span>,
              ensuring credibility and trust in every step we take. Our registration under
              <span className="font-bold text-[#1871db]"> Udyam (MSME)</span> highlights our commitment to structured,
              transparent, and legally compliant operations.
            </p>

            <p className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              With a focus on integrity and professionalism, we provide candidates with a
              <span className="font-bold text-[#1871db]"> safe and dependable pathway</span> to build careers abroad.
            </p>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, idx) => (
                <div
                  key={idx}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${0.35 + idx * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.35 + idx * 0.1}s`,
                  }}
                  className="group relative flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-[#1871db]/10 hover:border-[#1871db]/30 hover:shadow-[0_10px_30px_-10px_rgba(24,113,219,0.25)] hover:-translate-y-1 transition-all duration-500 cursor-default overflow-hidden"
                >
                  {/* Soft blue glow on hover */}
                  <span className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#1871db]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Left accent bar */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] rounded-r-full bg-[#1871db] transition-all duration-500 group-hover:h-2/3" />

                  <div className="relative w-10 h-10 rounded-lg bg-[#1871db]/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#1871db] group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:shadow-[0_6px_18px_rgba(24,113,219,0.35)]">
                    <point.icon className="text-[#1871db] text-lg transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <div className="relative">
                    <h4 className="font-['Sora'] font-semibold text-gray-800 text-sm transition-colors duration-300 group-hover:text-[#1871db]">
                      {point.title}
                    </h4>
                    <p className="font-['DM_Sans'] text-gray-500 text-xs transition-colors duration-300 group-hover:text-gray-700">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Certificate */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Decorative blur background */}
              <div className="absolute inset-0 bg-[#1871db]/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-[#1871db]/20" />

              {/* Certificate Card */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-[#1871db]/20 transition-all duration-700 group-hover:shadow-[0_25px_60px_-15px_rgba(24,113,219,0.35)] group-hover:scale-[1.03] group-hover:-translate-y-1">
                <img
                  src={udhyamImage}
                  alt="Udyam Registration Certificate"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
                />

                {/* Verified Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg font-['DM_Sans'] font-semibold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(34,197,94,0.5)]">
                  Verified ✓
                </div>

                {/* Certificate Seal */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full border-2 border-[#1871db]/30 flex items-center justify-center transition-all duration-700 group-hover:border-[#1871db]/60 group-hover:rotate-[15deg]">
                  <div className="w-12 h-12 rounded-full bg-[#1871db]/10 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#1871db]/20">
                    <FaShieldAlt className="text-[#1871db] text-xl transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* MSME Tag */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white text-xs px-4 py-1.5 rounded-full shadow-md font-['DM_Sans'] font-semibold whitespace-nowrap transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(24,113,219,0.4)] group-hover:-translate-y-0.5">
                Udyam (MSME) Registered
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s",
          }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {bottomBadges.map((badge, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#1871db]/20 transition-all duration-400 hover:border-[#1871db]/40 hover:shadow-[0_8px_20px_-8px_rgba(24,113,219,0.3)] hover:-translate-y-0.5 cursor-default"
            >
              <FaCheckCircle className="text-green-500 text-sm transition-transform duration-400 group-hover:scale-125" />
              <span className="font-['DM_Sans'] text-xs text-gray-600 transition-colors duration-300 group-hover:text-[#1871db]">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;