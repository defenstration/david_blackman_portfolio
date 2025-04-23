// import {useState} from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/public/information/projects";


export default function ProjectsCarousel() {
    // const [slides, setSlides] = useState(projects)

    return (
        <section id="projects" className="section-wrapper">
            <h1 className = 'text-center bg-black w-full'>Projects</h1>
            <div id = 'carousel-wrapper' className = "flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {projects.map((project, index) => (
                    <ProjectCard key = {index} project={project} />
                ))}
            </div>
        </section>
    )
}
