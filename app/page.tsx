'use client'

import EducationSection from "./components/education/EducationSection";
import ProjectsCarousel from "./components/project/ProjectCarousel";
import WorkHistory from "./components/work-history/WorkHistory";
import ContactInfo from "./components/contact-info/ContactInfo";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <div className = "flex flex-col gap-4 ml-32 items-center justify-center w-[100%-2rem]">
      <HeroSection />
      <ProjectsCarousel />
      <EducationSection />
      <WorkHistory />
      <ContactInfo />
    </div>
  );
}
