'use client'

import EducationSection from "./components/education/EducationSection";
import ProjectsCarousel from "./components/project/ProjectCarousel";
import WorkHistory from "./components/work-history/WorkHistory";


export default function Home() {
  return (
    <div className = "flex flex-col gap-4 items-center justify-center w-full">
      <ProjectsCarousel />
      <EducationSection />
      <WorkHistory />
    </div>
  );
}
