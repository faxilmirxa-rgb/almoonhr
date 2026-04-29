import { useRef, useState, useEffect } from "react";

// Import client logos (place all SVG files in src/assets/clients/)
import client1 from "../assets/clients/company1.svg";
import client2 from "../assets/clients/company2.svg";
import client3 from "../assets/clients/company3.svg";
import client4 from "../assets/clients/company4.svg";
import client5 from "../assets/clients/company5.svg";
import client6 from "../assets/clients/company6.svg";
import client7 from "../assets/clients/company7.svg";
import client8 from "../assets/clients/company8.svg";
import client9 from "../assets/clients/company9.svg";
import client10 from "../assets/clients/company10.svg";
import client11 from "../assets/clients/company11.svg";
import client12 from "../assets/clients/company12.svg";
import client13 from "../assets/clients/company13.svg";
import client14 from "../assets/clients/company14.svg";
import client15 from "../assets/clients/company15.svg";

const ClienteleSection = () => {
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

  const clients = [
    { id: 1, logo: client1 },
    { id: 2, logo: client2 },
    { id: 3, logo: client3 },
    { id: 4, logo: client4 },
    { id: 5, logo: client5 },
    { id: 6, logo: client6 },
    { id: 7, logo: client7 },
    { id: 8, logo: client8 },
    { id: 9, logo: client9 },
    { id: 10, logo: client10 },
    { id: 11, logo: client11 },
    { id: 12, logo: client12 },
    { id: 13, logo: client13 },
    { id: 14, logo: client14 },
    { id: 15, logo: client15 },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Animation */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
          className="text-center mb-12"
        >
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Clientele
            </span>
          </h2>
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Trusted by industry leaders across the Gulf region and beyond
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client, idx) => (
            <div
              key={client.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.4s ease-out ${0.05 + idx * 0.02}s, transform 0.4s ease-out ${0.05 + idx * 0.02}s`
              }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#1871db]/10"
            >
              <div className="flex items-center justify-center">
                <div className="w-full h-20 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={`Client ${client.id}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;