import Image from "next/image"

import ProjectCard from "./components/ProjectCard";
import { projects } from "@/public/information/projects";

export default function Home() {
  return (
    <div className = "flex items-center justify-center w-full">
      <ProjectCard 
        project = {projects[0]}
      />
    </div>
  );
}
