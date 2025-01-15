import {certificates} from "../../public/information/education"
import Image from "next/image"

const PopulateCertificates = () => {
    return (
        <div id = "cert-card-wrapper" className = "w-full grid p-4 auto-rows-max grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 items-center justify-center">
            {certificates.map((cert) => {
                return (
                    <div className = "cert-card w-64 p-2 mx-auto" key = {cert.title}>
                        <Image src = {cert.img} alt = {`${cert.title} certificate image`} width = {cert.imgWidth} height = {cert.imgHeight}></Image>
                        <h3>{cert.title}</h3>
                        <p>{cert.institution}</p>
                        <address>{cert.location}</address>
                    </div>
                )
            })}
        </div>
    )
}

export default PopulateCertificates