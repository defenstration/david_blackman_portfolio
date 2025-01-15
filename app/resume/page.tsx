"use client"

import PopulateEducation from "../components/Education";
import PopulateCertificates from "../components/Certificates";
import PopulateJobs from "../components/Jobs";
import ResumeHeader from "../components/Info";

const Page = () => {
    return (
        <article id = "resume w-full">
            <ResumeHeader />

            <section id = "work">
                <h3>Work History</h3>
                <PopulateJobs />
            </section>

            <section id = "education">
                <h3>Education</h3>
                <PopulateEducation />
            </section>

            <section id = "misc">
                <h3>Certificates</h3>
                <PopulateCertificates />
            </section>

            <section id = "Projects">
                <h3>Projects</h3>
            </section>
        </article>
    )
}

export default Page;