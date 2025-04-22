'use client'

import EducationSection from "./components/education/EducationSection";
import ProjectsCarousel from "./components/project/ProjectCarousel";


export default function Home() {
  return (
    <div className = "flex flex-col gap-4 items-center justify-center w-full">
      <ProjectsCarousel />
      <EducationSection />
    </div>
  );
}
