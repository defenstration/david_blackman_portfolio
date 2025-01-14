"use client"

import Link from "next/link";
import PopulateEducation from "../components/Education";

const Page = () => {
    return (
        <article id = "resume">
            <address id = "info">
                <h2>David Blackman</h2>
                <p>Location: Oxford, NY</p>
                <p>Phone: <Link href = "tel: 16078438632">607-843-8632</Link></p>
                <p>Email: <Link href = "mailto:david.blackman.career@gmail.com">david.blackman.career@gmail.com</Link></p>
                <p>LinkedIn: <Link href = "">David Blackman</Link></p>
                <p>Github: <Link href = "">Defenstration</Link></p>
                <p>Frontend Mentor: <Link href = "">David Blackman</Link></p>
                <p>Boot.dev: <Link href = "">@defenstration</Link></p>
                <p>Scrimba: <Link href = "">@defenstration</Link></p>
            </address>

            <section id = "work">
                <h3>Work History</h3>
            </section>

            <section id = "education">
                <h3>Education</h3>
                <PopulateEducation />
            </section>

            <section id = "misc">
                <h3>Certificates</h3>
            </section>

            <section id = "Projects">
                <h3>Projects</h3>
            </section>
        </article>
    )
}

export default Page;