import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactDetails = [
    { icon: FaPhoneAlt, title: "Phone Numbers", value1: "+91 89766 663732", value2: "+91 70456 663732", link: "tel:+918976663732", bg: "from-blue-500 to-[#1871db]" },
    { icon: FaWhatsapp, title: "WhatsApp", value1: "+91 89766 663732", value2: null, link: "https://wa.me/918976663732", bg: "from-green-500 to-green-600" },
    { icon: FaEnvelope, title: "Email Address", value1: "Info@almoonhr.com", value2: null, link: "mailto:Info@almoonhr.com", bg: "from-purple-500 to-purple-600" },
    { icon: FaClock, title: "Working Hours", value1: "Monday - Saturday", value2: "10:00 AM - 7:00 PM", link: null, bg: "from-orange-500 to-orange-600" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
              Connect With Us
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-800">How to Reach</span>{" "}
              <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-4"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-6 text-center shadow-md border border-[#1871db]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.bg} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <item.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <p className="font-['DM_Sans'] text-[#1871db] font-medium text-sm hover:underline">{item.value1}</p>
                  {item.value2 && <p className="font-['DM_Sans'] text-gray-600 text-sm">{item.value2}</p>}
                </a>
              ) : (
                <>
                  <p className="font-['DM_Sans'] text-gray-800 font-medium text-sm">{item.value1}</p>
                  <p className="font-['DM_Sans'] text-gray-600 text-sm">{item.value2}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Office Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#1871db] to-[#1460b8] flex items-center justify-center flex-shrink-0">
                <FaBuilding className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-3">Office Address</h3>
                <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed mb-2">
                  Office no 30-A, 3rd Floor, Eastern Chamber Premises,<br />
                  Dana Bunder, Poona Street, Masjid (E),<br />
                  Mumbai - 400009, Maharashtra, India
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <FaClock className="text-[#1871db]" />
                  <span>Mon - Sat: 10:00 AM - 7:00 PM | Sunday: Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-[#1871db]/10 to-transparent rounded-2xl p-6 border-l-4 border-[#1871db]"
          >
            <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-3">Quick Response</h3>
            <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed mb-4">
              Our team typically responds within 2-4 hours during business hours. For urgent inquiries, please WhatsApp us.
            </p>
            <a
              href="https://wa.me/918976663732"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white px-5 py-2 rounded-full font-['DM_Sans'] text-sm font-semibold hover:shadow-lg transition-all duration-300 group"
            >
              <FaWhatsapp className="text-sm" />
              WhatsApp Now
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;