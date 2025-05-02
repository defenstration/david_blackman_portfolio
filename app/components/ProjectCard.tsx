import { Project } from "@/app/types";

export default function ProjectCard({ project }: { project: Project }) {

    console.log(project.screenshot.src)
  return (
    <a href = {project.link} target = '_blank' className={`flex flex-col items-left justify-between w-64 h-96 p-4 bg-gray-500 rounded-2xl shadow-md  bg-cover bg-center`}
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,1)), url(${project.screenshot.src})` }}
    >
      <h2 className="text-xl font-bold bg-slate-500 ">{project.name}</h2>
      <p className="mt-1 text-white-100 bg-gray-700">{project.shortDesc}</p>
    </a>
  );
}