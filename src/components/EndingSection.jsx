import { useRef, useState, useEffect } from "react";
import { 
  FaWhatsapp, 
  FaArrowRight, 
  FaGlobe, 
  FaRocket,
  FaHandshake,
  FaQuoteLeft,
  FaRegSmile,
  FaCheckCircle
} from "react-icons/fa";

const EndingSection = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: FaGlobe, text: "Global Opportunities", color: "from-blue-500 to-[#1871db]" },
    { icon: FaRocket, text: "Fast Processing", color: "from-[#1871db] to-blue-600" },
    { icon: FaHandshake, text: "100% Transparency", color: "from-blue-600 to-[#1871db]" },
    { icon: FaRegSmile, text: "Happy Placements", color: "from-[#1871db] to-blue-500" },
  ];

  const trustPoints = [
    "No Hidden Fees",
    "100% Verified Jobs",
    "End-to-End Support",
    "Fast Processing",
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#1871db]/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Background inside Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1871db] to-[#0f4a8a]">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-6 right-8 text-white/15 text-6xl hidden md:block">
            <FaQuoteLeft />
          </div>
          <div className="absolute bottom-6 left-8 text-white/10 text-5xl hidden md:block">
            <FaHandshake />
          </div>

          {/* Card Content */}
          <div className="relative z-10 text-center py-12 md:py-16 px-6 md:px-10">
            
            {/* Main Heading */}
            <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Ready to Take the
              <br />
              <span className="text-yellow-300">Next Step?</span>
            </h2>
            
            <div className="w-20 h-1 bg-yellow-300 mx-auto rounded-full my-5"></div>

            {/* Sub Heading */}
            <p className="font-['DM_Sans'] text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Build your career abroad with confidence. We're just a message away to help you begin your global journey.
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs md:text-sm font-['DM_Sans'] font-medium shadow-md hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  <feature.icon className="text-xs md:text-sm" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/918976663732?text=Hello%20Almoon%20HR%2C%20I%20want%20to%20start%20my%20global%20career%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#1871db] px-6 py-3 rounded-full font-['DM_Sans'] font-semibold text-sm md:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="text-base md:text-lg transition-all duration-300 group-hover:scale-110" />
                Start Your Journey
                <FaArrowRight className="text-xs md:text-sm transition-all duration-300 group-hover:translate-x-1" />
              </a>
              
              <a
                href="/jobs"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-['DM_Sans'] font-semibold text-sm md:text-base hover:bg-white hover:text-[#1871db] transition-all duration-300 hover:scale-105"
              >
                Explore Opportunities
                <FaArrowRight className="text-xs md:text-sm transition-all duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/75 text-xs md:text-sm font-['DM_Sans']">
              {trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndingSection;