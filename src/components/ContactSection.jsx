import { useRef, useState, useEffect } from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaClock,
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

const ContactSection = () => {
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

  const contactInfo = [
    { icon: FaPhoneAlt, title: "Phone", value: "8976663732 | 7045663732", link: "tel:+918976663732" },
    { icon: FaEnvelope, title: "Email", value: "Info@almoonhr.com", link: "mailto:Info@almoonhr.com" },
    { icon: FaWhatsapp, title: "WhatsApp", value: "8976663732", link: "https://wa.me/918976663732" },
  ];

  const socialLinks = [
    { icon: FaInstagram, name: "almoon_hr", username: "@almoon_hr", link: "https://www.instagram.com/almoon_hr", color: "from-pink-500 to-purple-600" },
    { icon: FaFacebook, name: "Al Moon Hr Consultant", username: "Al Moon HR", link: "https://www.facebook.com/share/1LNXLn8bsA/", color: "from-blue-600 to-blue-700" },
  ];

  // Office address for Google Maps
  const officeAddress = "Office no 30-A 3rd Floor Eastern Chamber Premises Dana Bunder Poona Street Masjid (E) Mumbai - 400009";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(officeAddress)}`;

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
          className="text-center mb-12"
        >
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Get In</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We're here to help you with your global career journey
          </p>
          <div className="w-16 h-0.5 bg-[#1871db] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side - Contact Info */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
            className="flex-1"
          >
            {/* Office Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 mb-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#1871db] to-[#1460b8] flex items-center justify-center flex-shrink-0">
                  <FaBuilding className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-2">Office Address</h3>
                  <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed">
                    Office no 30-A 3rd Floor Eastern Chamber Premises Dana Bunder<br />
                    Poona Street Masjid (E) Mumbai - 400009
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 mb-6">
              <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-[#1871db]/5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1871db]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1871db]">
                      <item.icon className="text-[#1871db] text-lg transition-all duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-['DM_Sans'] text-xs text-gray-500">{item.title}</p>
                      <p className="font-['DM_Sans'] text-sm md:text-base font-medium text-gray-800">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20">
              <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Follow Us
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:bg-[#1871db]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                        <social.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <p className="font-['DM_Sans'] text-sm font-medium text-gray-800">{social.name}</p>
                        <p className="font-['DM_Sans'] text-xs text-gray-500">{social.username}</p>
                      </div>
                    </div>
                    <FaArrowRight className="text-gray-400 text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1871db]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
            }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl p-2 shadow-md border border-[#1871db]/20 h-full transition-all duration-300 hover:shadow-lg">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title="Almoon HR Office Location"
                  src={mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <FaMapMarkerAlt className="text-[#1871db] text-xl mx-auto mb-2" />
                <p className="font-['DM_Sans'] text-gray-600 text-sm">
                  30-A, Eastern Chamber Premises, Dana Bunder, Mumbai - 400009
                </p>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
                  <FaClock className="text-[#1871db]" />
                  <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s'
          }}
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/918976663732?text=Hello%20Almoon%20HR%2C%20I%20need%20assistance%20with%20my%20job%20search."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white px-6 py-3 rounded-full font-['DM_Sans'] font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <FaWhatsapp className="text-lg transition-all duration-300 group-hover:scale-110" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;