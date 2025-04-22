import Link from "next/link"
import { info } from "@/public/information/information"



export default function ContactInfo() {
    return (
        <section id = "contact-info" className = "section-wrapper">
            <h2 className = "text-center text-2xl font-bold w-full bg-black">Contact Information</h2>
            <div className = "flex justify-evenly w-full">
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
            </div>

        </section>
    )
}