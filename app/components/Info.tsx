import { info } from "@/public/information/information"
import Link from "next/link"


const ResumeHeader = () => {
    return (
        <section id = "resume-info" className = "flex justify-between py-4 mb-4 border-b-white border-solid border-b-2">
            <div>
                <h2 className = "text-2xl">{info.name}</h2>
                <p>Location: {info.address}</p>
                <p>Phone: <Link href = {`tel: ${info.phone}`}>{info.phone}</Link></p>
                <p>Email: <Link href = {`mailto: ${info.email}`}>{info.email}</Link></p>                
            </div>
            <div className = "">
                <p>LinkedIn: <Link href = {info.linkedin.url}>{info.linkedin.handle}</Link></p>
                <p>Github: <Link href = {info.github.url}>{info.github.handle}</Link></p>
                <p>Frontend Mentor: <Link href = {info.frontendMentor.url}>{info.frontendMentor.handle}</Link></p>
                <p>Boot.dev: <Link href = {info["boot.dev"].url}>@{info["boot.dev"].handle}</Link></p>
                <p>Scrimba: <Link href = {info.scrimba.url}>@{info.scrimba.handle}</Link></p>
             </div>


        </section>
    )
}

export default ResumeHeader
