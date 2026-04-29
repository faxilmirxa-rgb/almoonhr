import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/918976663732?text=Hello%20Almoon%20HR%2C%20I%20am%20interested%20in%20Gulf%20job%20opportunities.", "_blank");
  };

  if (!showButton) return null;

  return (
    <>
      <style>{`
        /* SUPER SMALL for mobile */
        @media (max-width: 640px) {
          .wa-btn {
            width: 38px !important;
            height: 38px !important;
            bottom: 12px !important;
            right: 12px !important;
          }
          .wa-btn .wa-inner {
            width: 38px !important;
            height: 38px !important;
          }
          .wa-btn svg {
            width: 18px !important;
            height: 18px !important;
          }
          .wa-ring {
            width: 38px !important;
            height: 38px !important;
          }
          .wa-tooltip {
            display: none !important;
          }
        }
        /* Small for tablet */
        @media (min-width: 641px) and (max-width: 768px) {
          .wa-btn {
            width: 45px !important;
            height: 45px !important;
          }
          .wa-btn svg {
            width: 22px !important;
            height: 22px !important;
          }
        }
        /* Normal for desktop */
        @media (min-width: 769px) {
          .wa-btn {
            width: 55px !important;
            height: 55px !important;
          }
          .wa-btn svg {
            width: 28px !important;
            height: 28px !important;
          }
        }
        
        .wa-btn {
          position: fixed !important;
          bottom: 16px !important;
          right: 16px !important;
          z-index: 9999 !important;
          cursor: pointer !important;
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .wa-inner {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, #25D366, #128C7E) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
          transition: all 0.2s ease !important;
        }
        .wa-ring {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 50% !important;
          background-color: #25D366 !important;
          animation: wa-ping 1.5s infinite !important;
          opacity: 0.4 !important;
        }
        @keyframes wa-ping {
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>

      <button onClick={handleClick} className="wa-btn" aria-label="Chat on WhatsApp">
        <div className="wa-inner">
          <div className="wa-ring"></div>
          <svg viewBox="0 0 24 24" fill="white" style={{ display: 'block', position: 'relative', zIndex: 2 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
          </svg>
        </div>
      </button>
    </>
  );
};

export default FloatingWhatsApp;