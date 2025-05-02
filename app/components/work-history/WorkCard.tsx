import {Job} from "@/app/types";

export default function WorkCard({job}: {job: Job}) {
    return (
        <div className = "work-card w-full p-4 border-b-2 border-b-white/50 border-solid">
            <h2 className = "text-xl font-bold">{job.position}</h2>
            <span className= 'flex justify-between w-full'><address>{job.location}</address><p>{job.startDate} - {job.endDate}</p></span>
            <ul>
                {job.duties.map((duty, index) => {
                    return (
                        <li key = {index} className = "list-disc list-inside">{duty}</li>
                    )
                })}
            </ul>
        </div>
    )
}