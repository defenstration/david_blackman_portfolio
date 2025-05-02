import { education, certificates } from "../../../public/information/education"
import SchoolCard from "./SchoolCard"
import CertificateCard from "./CertificateCard"



export default function EducationSection() {
    return (
        <section id = "resume-carousel" className = "section-wrapper">
            <h2 className = 'text-center bg-black w-full text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Education</h2>
            <div id = 'education-wrapper' className = "flex gap-4 justify-evenly items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {education.map((school) => ( 
                    <SchoolCard key = {school.id} school={school} /> 
                 ))}
            </div>

            <h2 className = 'text-center bg-black w-full text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Certificates</h2>
            <div id = 'certificates-wrapper' className = "flex gap-4 flex-wrap overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full">
                {certificates.map((cert) => ( 
                    <CertificateCard key = {cert.id} cert={cert} />
                ))}
            </div>
        </section>
    )
}