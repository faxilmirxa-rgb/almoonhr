import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt, FaClock, FaDirections } from "react-icons/fa";

const ContactMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const officeAddress = "Office no 30-A 3rd Floor Eastern Chamber Premises Dana Bunder Poona Street Masjid (E) Mumbai - 400009";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(officeAddress)}`;

  const nearbyLandmarks = [
    "Near Poona Street",
    "Close to Masjid Station",
    "Eastern Chamber Premises",
    "Dana Bunder Area"
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1871db]/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
              Find Us Here
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-800">Our</span>{" "}
              <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                Location
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-4"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-2 shadow-md border border-[#1871db]/20 transition-all duration-300 hover:shadow-lg">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title="Almoon HR Office Location"
                  src={mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Map Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1871db]/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#1871db] text-xl" />
                </div>
                <h3 className="font-['Sora'] text-lg font-bold text-gray-800">Address Details</h3>
              </div>
              <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed mb-4">
                Office no 30-A, 3rd Floor, Eastern Chamber Premises, Dana Bunder, Poona Street, Masjid (E), Mumbai - 400009
              </p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1871db] text-sm font-['DM_Sans'] font-medium hover:underline"
              >
                <FaDirections />
                Get Directions
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1871db]/10 flex items-center justify-center">
                  <FaClock className="text-[#1871db] text-xl" />
                </div>
                <h3 className="font-['Sora'] text-lg font-bold text-gray-800">Nearby Landmarks</h3>
              </div>
              <ul className="space-y-2">
                {nearbyLandmarks.map((landmark, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1871db]"></div>
                    <span className="font-['DM_Sans'] text-gray-600 text-sm">{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#1871db]/10 to-transparent rounded-2xl p-5 border-l-4 border-[#1871db]">
              <p className="font-['DM_Sans'] text-gray-600 text-sm italic">
                "Walk-ins are welcome during business hours. For a smoother experience, please schedule an appointment via WhatsApp."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;