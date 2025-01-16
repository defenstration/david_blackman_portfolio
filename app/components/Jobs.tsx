import { jobs } from "@/public/information/work-history";

const PopulateJobs = () => {
    return (
                <div id = "job-card-wrapper" className = "flex flex-col flex-wrap w-full justify-evenly items-stretch g-4">
                    {jobs.map((job) => {
                        return (
                            <div key = {job.position} >
                                <div className = 'flex justify-between p-4'>
                                    <div>
                                        <h3>{job.position}</h3>
                                        <p>{job.business}</p>
                                    </div>
                                    <div className = "text-right">
                                        <address>{job.location}</address>
                                        <p>{job.tenure}</p>
                                    </div>
                                </div>

                                <ul className = "list-disc pl-12">
                                {job.duties.map((duty) => {
                                    return (
                                        <li key = {duty} className="py-2 pl-2">{duty}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
    )
}

export default PopulateJobs;