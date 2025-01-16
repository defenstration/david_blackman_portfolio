import { projects } from "@/public/information/projects";
import Image from "next/image";


const PopulateProjects = () => {
    return (
        <div id = "resume-project-wrapper" className = "w-full grid p-4 auto-rows-max grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 items-center justify-center">
            {projects.map((project) => {
                return (
                   <div className = "project-card w-64" key = {project.id}>
                        <Image src = {project.thumbnail.src} alt = {project.thumbnail.alt} height = {project.thumbnail.height} width = {project.thumbnail.width}></Image>
                        <h3>{project.name}</h3>
                        <p>{project.status}</p>
                        <p>{project.shortDesc}</p>
                    </div>
                ) 
            })}
        </div>
    )
}

export default PopulateProjects;