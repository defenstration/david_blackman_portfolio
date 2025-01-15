import { jobs } from "@/public/information/work-history";

const PopulateJobs = () => {
    return (
                <div id = "job-card-wrapper" className = "flex flex-col flex-wrap w-full justify-evenly items-stretch">
                    {jobs.map((job) => {
                        return (
                            <div key = {job.position}>
                                <h3>{job.position}</h3>
                                <p>{job.business}</p>
                                <address>{job.location}</address>
                                <p>{job.tenure}</p>
                                <ul>
                                {job.duties.map((duty) => {
                                    return (
                                        <li key = {duty}>{duty}</li>
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