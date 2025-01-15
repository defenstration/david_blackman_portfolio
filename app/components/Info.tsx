import { info } from "@/public/information/information"
import Link from "next/link"


const ResumeHeader = () => {
    return (
        <address id = "resume-info">
            <h2>{info.name}</h2>
            <p>Location: {info.address}</p>
            <p>Phone: <Link href = {`tel: ${info.phone}`}>{info.phone}</Link></p>
            <p>Email: <Link href = {`mailto: ${info.email}`}>{info.email}</Link></p>
            <p>LinkedIn: <Link href = {info.linkedin.url}>{info.linkedin.handle}</Link></p>
            <p>Github: <Link href = {info.github.url}>{info.github.handle}</Link></p>
            <p>Frontend Mentor: <Link href = {info.frontendMentor.url}>{info.frontendMentor.handle}</Link></p>
            <p>Boot.dev: <Link href = {info["boot.dev"].url}>@{info["boot.dev"].handle}</Link></p>
            <p>Scrimba: <Link href = {info.scrimba.url}>@{info.scrimba.handle}</Link></p>
        </address>
    )
}

export default ResumeHeader
