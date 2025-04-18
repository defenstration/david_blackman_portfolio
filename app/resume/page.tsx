"use client"

import PopulateEducation from "../components/Education";
import PopulateCertificates from "../components/Certificates";
import PopulateJobs from "../components/Jobs";
import ResumeHeader from "../components/Info";
import PopulateProjects from "../components/ProjectCarousel";

const Page = () => {
    return (
        <article id = "resume" className = "p-8 w-full">
            <ResumeHeader />

            <section id = "work" className = "py-4 mb-4 border-b-white border-solid border-b-2">
                <h3 className = "text-xl font-bold">Work History</h3>
                <PopulateJobs />
            </section>

            <section id = "education" className = "py-4 mb-4 border-b-white border-solid border-b-2">
                <h3 className = "text-xl font-bold">Education</h3>
                <PopulateEducation />
            </section>

            <section id = "misc" className = "py-4 mb-4 border-b-white border-solid border-b-2">
                <h3 className = "text-xl font-bold">Certificates</h3>
                <PopulateCertificates />
            </section>

            <section id = "Projects" className = "py-4 mb-4 border-b-white border-solid border-b-2">
                <h3 className = "text-xl font-bold">Projects</h3>
                <PopulateProjects />
            </section>
        </article>
    )
}

export default Page;