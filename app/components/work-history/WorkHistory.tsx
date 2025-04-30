import WorkCard from './WorkCard';
import {jobs} from '@/public/information/work-history';


export default function WorkHistory() {
    return (
        <section id = "work-card-wrapper" className = "section-wrapper">
            <h3 className = "text-center bg-black w-full text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Work History</h3>
            {jobs.map((job) => {
                return (    
                    <WorkCard key = {job.id} job={job} />
            )})}
        </section>
    )
}