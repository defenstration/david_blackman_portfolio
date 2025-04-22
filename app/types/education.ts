export type Education = {
    id: number; 
    school: string;
    location: string;
    degree: string[];
    graduationDate: number;
    img: string;
    link?: string;
    gpa?: string;
}

export type Certificate = {
    id: number;
    title: string;
    institution: string;
    location: string;
    img: string;
    imgWidth: number;
    imgHeight: number;
    link: string;
}