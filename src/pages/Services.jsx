import React from "react";
import ServicesHero from "../components/ServicesHero";
// import ServicesMain from "../components/ServicesMain";
import ServicesCTA from "../components/ServicesCTA";
import ServicesSection from "../components/ServiceSection";

const Services= () => {
  return (
    <div>
      <ServicesHero />
      <ServicesSection />
      <ServicesCTA />
    </div>
  );
};

export default Services;