import React from "react";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";
import ContactSocial from "../components/ContactSocial";
import ContactCTA from "../components/ContactCTA";
const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactSocial />
      <ContactCTA />
    </div>
  );
};

export default Contact;