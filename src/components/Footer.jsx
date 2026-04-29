import { useRef, useState, useEffect } from "react";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
  FaShieldAlt
} from "react-icons/fa";
import logo from "../assets/logo.svg";

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Jobs", href: "/jobs" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Job Placement",
    "Visa Processing",
    "Documentation",
    "Pre-deployment Training",
    "Post-landing Support",
  ];

  const socialLinks = [
    { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/almoon_hr", bg: "from-pink-500 to-purple-600" },
    { icon: FaFacebook, name: "Facebook", link: "https://www.facebook.com/share/1LNXLn8bsA/", bg: "from-blue-600 to-blue-700" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  return (
    <footer ref={sectionRef} className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1871db] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1871db] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column with Logo in White Card */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            {/* White Card for Logo */}
            <div className="bg-white rounded-xl p-3 mb-4 inline-block shadow-md">
              <img 
                src={logo} 
                alt="ALMOON HR" 
                className="h-10 md:h-12 w-auto"
              />
            </div>
            
            <p className="font-['DM_Sans'] text-gray-400 text-sm leading-relaxed mb-4">
              Bridging talent beyond boundaries. Your trusted partner for global career opportunities.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <span className="font-['DM_Sans'] text-xs text-gray-400">Govt. Registered • MSME Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
            }}
          >
            <h3 className="font-['Sora'] text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="font-['DM_Sans'] text-gray-400 text-sm hover:text-[#1871db] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 -translate-x-2" />
                    <span className="group-hover:translate-x-1 transition-all duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
            }}
          >
            <h3 className="font-['Sora'] text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <span className="font-['DM_Sans'] text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1871db]"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s'
            }}
          >
            <h3 className="font-['Sora'] text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a href="tel:+918976663732" className="flex items-center gap-3 font-['DM_Sans'] text-gray-400 text-sm hover:text-[#1871db] transition-all duration-300 group">
                <FaPhoneAlt className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span>+91 89766 663732 | 70456 663732</span>
              </a>
              <a href="mailto:Info@almoonhr.com" className="flex items-center gap-3 font-['DM_Sans'] text-gray-400 text-sm hover:text-[#1871db] transition-all duration-300 group">
                <FaEnvelope className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span>Info@almoonhr.com</span>
              </a>
              <a href="https://wa.me/918976663732" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-['DM_Sans'] text-gray-400 text-sm hover:text-[#1871db] transition-all duration-300 group">
                <FaWhatsapp className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.bg} flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:rotate-6`}
                >
                  <social.icon className="text-white text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s'
          }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800"
        >
          <p className="font-['DM_Sans'] text-gray-500 text-xs">
            © {new Date().getFullYear()} ALMOON HR Consultancy. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-['DM_Sans'] text-gray-500 text-xs hover:text-[#1871db] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <p className="font-['DM_Sans'] text-gray-500 text-xs">
            Bridging Talent Beyond Boundaries
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-[#1871db] text-white flex items-center justify-center shadow-lg hover:bg-[#1460b8] transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-5 h-5 transform rotate-0 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default EndingSection;