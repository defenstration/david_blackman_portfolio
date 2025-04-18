import {useState} from "react";
import ProjectCard from "./ProjectCard";

import { projects } from "@/public/information/projects";

export default function ProjectsCarousel() {
    const [slides, setSlides] = useState(projects)

    return (
        <div id = "resume-carousel" className = "overflow-hidden relative w-full">
            <div className = "flex transition-transform duration-500" style = {{transform: `translateX(-${currentSlide * 100}% )`}}>
                {slides.map((project, index) => (
                    <div key={index} className="flex-none w-full h-auto p-4">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

