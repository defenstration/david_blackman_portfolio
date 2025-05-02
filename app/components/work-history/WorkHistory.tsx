import WorkCard from './WorkCard';
import {jobs} from '@/public/information/work-history';


export default function WorkHistory() {
    return (
        <section id = "work-card-wrapper" className = "section-wrapper">
            <h3 className = "section-header">Work History</h3>
            {jobs.map((job) => {
                return (    
                    <WorkCard key = {job.id} job={job} />
            )})}
        </section>
    )
}