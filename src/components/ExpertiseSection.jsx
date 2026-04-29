import { useRef, useState, useEffect } from "react";
import { 
  FaUserTie, 
  FaMicrochip, 
  FaHardHat, 
  FaConciergeBell,
  FaCheckCircle,
  FaArrowRight,
  FaBriefcase,
  FaWrench,
  FaTruck,
  FaHeadset
} from "react-icons/fa";

const ExpertiseSection = () => {
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

  const expertiseData = [
    {
      id: 1,
      title: "Professional Roles",
      icon: FaUserTie,
      bgGradient: "from-[#1871db] to-blue-600",
      lightBg: "bg-blue-50",
      roles: ["Engineers", "Project Managers", "Supervisors", "Administrative & Professionals"],
      count: "04+",
      color: "text-[#1871db]"
    },
    {
      id: 2,
      title: "Technical Specialists",
      icon: FaMicrochip,
      bgGradient: "from-blue-600 to-[#1871db]",
      lightBg: "bg-sky-50",
      roles: ["Electricians", "Technicians", "Machine Operators", "Mechanical Specialists"],
      count: "04+",
      color: "text-blue-600"
    },
    {
      id: 3,
      title: "Operational Workforce",
      icon: FaHardHat,
      bgGradient: "from-[#1871db] to-blue-700",
      lightBg: "bg-indigo-50",
      roles: ["Drivers", "Warehouse Personnel", "Construction Teams", "Production Staff"],
      count: "04+",
      color: "text-[#1871db]"
    },
    {
      id: 4,
      title: "Service Professionals",
      icon: FaConciergeBell,
      bgGradient: "from-blue-500 to-[#1871db]",
      lightBg: "bg-teal-50",
      roles: ["Hospitality Staff", "Customer Service Teams", "Retail Personnel"],
      count: "03+",
      color: "text-teal-600"
    }
  ];

  

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 bg-gradient-to-br from-gray-50 via-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
           
          </div>
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Expertise Across</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Multiple Workforce Levels
            </span>
          </h2>
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our recruitment capabilities extend across diverse professional and technical categories
          </p>
        </div>

       

        {/* Main Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertiseData.map((item, idx) => (
            <div
              key={item.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease-out ${0.2 + idx * 0.1}s, transform 0.6s ease-out ${0.2 + idx * 0.1}s`
              }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} style={{ padding: '2px' }} />
              
              <div className="relative bg-white rounded-3xl p-6 m-[1px]">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <item.icon className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800">{item.title}</h3>
                      <span className={`font-['DM_Sans'] text-sm ${item.color} font-semibold`}>{item.count} Categories</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1871db]/10 transition-all duration-300">
                    <FaArrowRight className={`text-[#1871db] text-sm transition-all duration-300 group-hover:translate-x-1`} />
                  </div>
                </div>

                {/* Roles List */}
                <div className="grid grid-cols-2 gap-3">
                  {item.roles.map((role, roleIdx) => (
                    <div 
                      key={roleIdx} 
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 group/role cursor-default"
                    >
                      <div className={`w-5 h-5 rounded-full ${item.lightBg} flex items-center justify-center transition-all duration-300 group-hover/role:scale-110`}>
                        <FaCheckCircle className={`${item.color} text-xs`} />
                      </div>
                      <span className="font-['DM_Sans'] text-gray-700 text-sm transition-all duration-300 group-hover/role:translate-x-1">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Indicator */}
                <div className={`mt-5 pt-4 border-t border-gray-100 flex justify-between items-center`}>
                  <span className="text-xs font-['DM_Sans'] text-gray-400">Immediate joining available</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote Card */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s`
          }}
          className="bg-gradient-to-r from-[#1871db] to-[#1460b8] rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <p className="font-['DM_Sans'] text-lg md:text-xl italic max-w-3xl mx-auto">
            "This diverse talent network allows us to support organizations at every level of workforce development."
          </p>
          <div className="w-12 h-0.5 bg-white/50 mx-auto rounded-full mt-4"></div>
          <p className="font-['Sora'] font-semibold text-white/90 text-sm mt-3">
            - ALMOON HR Consultancy
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;