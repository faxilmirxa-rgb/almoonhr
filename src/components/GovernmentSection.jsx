import { useRef, useState, useEffect } from "react";
import { FaShieldAlt, FaCheckCircle, FaBuilding, FaRegGem, FaArrowRight } from "react-icons/fa";
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

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="px-4 py-1 bg-[#1871db]/10 rounded-full">
              <span className="font-['DM_Sans'] text-sm text-[#1871db] font-semibold">Government Approved</span>
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

        {/* Main Content - Left Text + Right Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
            className="flex-1"
          >
            {/* Description */}
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
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${0.3 + idx * 0.1}s, transform 0.5s ease-out ${0.3 + idx * 0.1}s`
                  }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm border border-[#1871db]/10 hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1871db]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1871db] transition-all duration-300">
                    <point.icon className="text-[#1871db] text-lg group-hover:text-white transition-all duration-300" />
                  </div>
                  <div>
                    <h4 className="font-['Sora'] font-semibold text-gray-800 text-sm">{point.title}</h4>
                    <p className="font-['DM_Sans'] text-gray-500 text-xs">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/+918976663732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white px-6 py-3 rounded-full font-['DM_Sans'] font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                Verify Our Registration
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Side - Udyam Image */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
            }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative blur background */}
              <div className="absolute inset-0 bg-[#1871db]/10 rounded-full blur-3xl"></div>
              
              {/* Certificate Card Effect */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-[#1871db]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img 
                  src={udhyamImage} 
                  alt="Udyam Registration Certificate" 
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
                />
                
                {/* Badge Overlay */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg font-['DM_Sans'] font-semibold">
                  Verified ✓
                </div>
                
                {/* Certificate Seal Effect */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full border-2 border-[#1871db]/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#1871db]/10 flex items-center justify-center">
                    <FaShieldAlt className="text-[#1871db] text-xl" />
                  </div>
                </div>
              </div>
              
              {/* MSME Tag */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white text-xs px-4 py-1.5 rounded-full shadow-md font-['DM_Sans'] font-semibold whitespace-nowrap">
                Udyam (MSME) Registered
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s'
          }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#1871db]/20">
            <FaCheckCircle className="text-green-500 text-sm" />
            <span className="font-['DM_Sans'] text-xs text-gray-600">Government Recognized</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#1871db]/20">
            <FaCheckCircle className="text-green-500 text-sm" />
            <span className="font-['DM_Sans'] text-xs text-gray-600">Legally Compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#1871db]/20">
            <FaCheckCircle className="text-green-500 text-sm" />
            <span className="font-['DM_Sans'] text-xs text-gray-600">Transparent Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;