// import {useState} from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/public/information/projects";


export default function ProjectsCarousel() {
    // const [slides, setSlides] = useState(projects)

    return (
        <section id = "resume-carousel" className = "overflow-hidden relative w-full border-2 border-gray-500 bg-slate-900/30 backdrop-blur-sm rounded-2xl shadow-md">
            <h1 className = 'text-center bg-black'>Projects</h1>
            <div id = 'carousel-wrapper' className = "flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {projects.map((project, index) => (
                    <ProjectCard key = {index} project={project} />
                ))}
            </div>
        </section>
    )
}

