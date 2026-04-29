import React from "react";
import ProcessHero from "../components/ProcessHero";
import ProcessSteps from "../components/ProcessSteps";
import ProcessFAQ from "../components/ProcessFAQ";
import ProcessCTA from "../components/ProcessCTA";

const Process = () => {
  return (
    <div>
      <ProcessHero />
      <ProcessSteps />
      <ProcessFAQ />
      <ProcessCTA />
    </div>
  );
};

export default Process;