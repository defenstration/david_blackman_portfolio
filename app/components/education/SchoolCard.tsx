import { Education } from '@/app/types';
import Image from 'next/image';


export default function SchoolCard({school}: {school: Education}) {
    return (
        <div className = "school-card w-80 sm:w-[483px] p-4 flex flex-col gap-2" key = {school.id}>
            <Image src = {school.img} alt = {`${school.school} logo`} width = '500' height = '300' className = "bg-white"></Image>
            <h3 className = "text-xl font-bold">{school.school}</h3>
            {school.degree.map((degree) => {
                return <p key = {degree} className = "text-sm">{degree}</p>
            })}
            <address className = "text-sm">{school.location}</address>
        </div> 
        
    )
}
