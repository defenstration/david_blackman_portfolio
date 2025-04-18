import Image from "next/image";
import { Project } from "@/app/types";

export default function ProjectCard({ project }: { project: Project }) {

    console.log(project.screenshot.src)
  return (
    <div className={`flex flex-col items-center justify-center w-64 h-96 p-4 bg-gray-500 rounded-2xl shadow-md  bg-cover bg-center`}
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,1)), url(${project.screenshot.src})` }}
    >
      <h2 className="mt-2 text-xl font-bold">{project.name}</h2>
      <p className="mt-1 text-gray-700">{project.shortDesc}</p>
    </div>
  );
}