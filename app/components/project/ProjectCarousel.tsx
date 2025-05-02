import {useEffect, useRef, useState} from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/public/information/projects";
import Link from "next/link";

export default function ProjectsCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const scrollNext = () => {
            if (!carouselRef.current) return;
            const container = carouselRef.current;
            const cardWidth = container.children[0]?.clientWidth || 300;
            const nextIndex = (currentIndex + 1) % projects.length;
            setCurrentIndex(nextIndex);
            container.scrollTo({
                left: nextIndex * (cardWidth + 16),
                behavior: "smooth"
            });
        };

        intervalRef.current = setInterval(scrollNext, 3000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [currentIndex]);

    const scrollToIndex = (index: number) => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const cardWidth = container.children[0]?.clientWidth || 300;
        setCurrentIndex(index);
        container.scrollTo({
            left: index * (cardWidth + 16),
            behavior: "smooth"
        });
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!carouselRef.current) return;
        const touch = e.touches[0];
        const container = carouselRef.current;
        const cardWidth = container.children[0]?.clientWidth || 300;
        
        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const diff = touch.clientX - startX;
            container.scrollLeft = scrollLeft - diff;
        };

        const handleTouchEnd = () => {
            const diff = startX - touch.clientX;
            if (Math.abs(diff) > cardWidth / 3) {
                if (diff > 0) {
                    scrollToIndex((currentIndex + 1) % projects.length);
                } else {
                    scrollToIndex((currentIndex - 1 + projects.length) % projects.length);
                }
            } else {
                scrollToIndex(currentIndex);
            }
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        const startX = touch.clientX;
        const scrollLeft = container.scrollLeft;

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <section id="projects" className="section-wrapper">
            <h1 className="section-header">Projects</h1>
            <div className="relative w-full">
                {!isMobile && (
                    <>
                        <button
                            onClick={() => scrollToIndex((currentIndex - 1 + projects.length) % projects.length)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white p-2 rounded-full shadow-lg"
                            aria-label="Previous project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollToIndex((currentIndex + 1) % projects.length)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white p-2 rounded-full shadow-lg"
                            aria-label="Next project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
                <div
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {projects.map((project, index) => (
                        <Link
                            href={project.siteUrl}
                            key={index}
                            className="snap-start shrink-0"
                            target="_blank"
                        >
                            <ProjectCard key={index} project={project} />
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-4 mb-8">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                                    : 'bg-gray-500'
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
