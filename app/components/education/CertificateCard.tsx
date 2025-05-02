import { Certificate } from '@/app/types';
import Image from 'next/image';


export default function CertificateCard({cert}: {cert: Certificate}) {
    return (
        <div className = "cert-card w-64 p-2 mx-auto" key = {cert.title}>
            <Image src = {cert.img} alt = {`${cert.title} certificate image`} width = {cert.imgWidth} height = {cert.imgHeight}></Image>
            <h3>{cert.title}</h3>
            <p>{cert.institution}</p>
            <address>{cert.location}</address>
        </div>
    )
}
