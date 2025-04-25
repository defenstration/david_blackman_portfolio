import {useEffect, useRef} from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/public/information/projects";
import Link from "next/link";


export default function ProjectsCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(()=> {
        const scrollNext = () => {
            if (!carouselRef.current) return;

            const container = carouselRef.current;
            const cardWidth = container.children[0]?.clientWidth || 300;
            container.scrollBy({left: cardWidth + 16, behavior: "smooth"});
        }

        intervalRef.current = setInterval(scrollNext, 3000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [])

    let startX = 0;
    let scrollLeft = 0;

    return (
        <section id="projects" className="section-wrapper">
            <h1 className = 'text-center bg-black w-full'>Projects</h1>
            <div id = 'carousel-wrapper' className = "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
                {projects.map((project, index) => (
                    <Link 
                        href = {project.siteUrl} 
                        key = {index} 
                        className = "snap-start shrink-0" 
                        target="_blank">
                    <ProjectCard key = {index} project={project} />
                    </Link>
                ))}
            </div>
        </section>
    )
}
