import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServiceSection'
import JobsSection from '../components/JobsSection'
import ProcessSection from '../components/ProcessSection'
import SectorsSection from '../components/SectorsSection'
import ExpertiseSection from '../components/ExpertiseSection'
import GovernmentSection from '../components/GovernmentSection'
import ClienteleSection from '../components/ClienteleSection'
import ContactSection from '../components/ContactSection'
import EndingSection from '../components/EndingSection'



const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <JobsSection/>
    <ProcessSection/>
    <SectorsSection/>
    <GovernmentSection/>
    <ExpertiseSection/>
    <ClienteleSection/>  
    <ContactSection/> 
    <EndingSection/>
    </>
  )
}

export default Home