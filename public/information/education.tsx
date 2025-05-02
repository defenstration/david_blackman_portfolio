import { Education, Certificate } from '@/app/types';



export const education: Education[] = [
    {   id: 1,
        school: "SUNY Empire State University",
        location: "Saratoga Springs, NY",
        degree: [
            "Bachelors of Science - Business, Management, and Economics",
            "Certificate - Manufacturing Management"
        ],
        graduationDate: 2023,
        img: '/assets/Empire_State_Logo.png'
    }, {
        id: 2,
        school: "SUNY Mohawk Valley Community College",
        location: "Utica, NY",
        degree: [
            "Associates of Occupational Science - Welding Technology",
            "Associates of Occupational Science - CNC Machining"
        ],
        graduationDate: 2005,
        img: '/assets/Mohawk_Valley_Community_College_Official_Logo.svg'
    }, 
]

export const certificates: Certificate[] = [
    {
        id: 1,
        institution: "Google",
        location: "coursera.org",
        title: "Google Data Analytics Professional Certificate",
        img: "/assets/Coursera FZ92ZC89PHDX.png",
        imgWidth: 3300,
        imgHeight: 2550,
        link: 'https://www.coursera.org/account/accomplishments/specialization/FZ92ZC89PHDX?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n'
    }, {
        id: 2,
        institution: "freeCodeCamp",
        location: "freecodecamp.org",
        title: "Responsive Web Design",
        img: "/assets/fcc_responsive_web_design.png",
        imgWidth: 1224,
        imgHeight: 823,
        link: 'https://www.freecodecamp.org/defenstration',
    },
    {
        id: 3,
        institution: "freeCodeCamp",
        location: "freecodecamp.org",
        title: "Javascript Algorithms and Data Structures",
        img: "/assets/fcc_js_algorithms.png",
        imgWidth: 1224,
        imgHeight: 823,
        link: 'https://www.freecodecamp.org/defenstration',
    },
    {
        id: 4,
        institution: "freeCodeCamp",
        location: "freecodecamp.org",
        title: "Front End Development Libraries",
        img: "/assets/fcc_frontend_development_libraries.png",
        imgWidth: 1224,
        imgHeight: 823,
        link: 'https://www.freecodecamp.org/defenstration',
    },
    {
        id: 5,
        institution: "freeCodeCamp",
        location: "freecodecamp.org",
        title: "Data Visualization",
        img: "/assets/fcc_data_viz.png",
        imgWidth: 1224,
        imgHeight: 823,
        link: 'https://www.freecodecamp.org/defenstration',
    },{
        id: 6,
        institution: "Boot.dev",
        location: "boot.dev",
        title: "Learn to Code in Python",
        img: "/assets/bootdev_python.png",
        imgWidth: 832,
        imgHeight: 508,
        link: 'https://www.boot.dev/u/defenstration',
    },{
        id: 7,
        institution: "Boot.dev",
        location: "boot.dev",
        title: "Learn Object Oriented Programming in Python",
        img: "/assets/bootdev_oop.png",
        imgWidth: 832,
        imgHeight: 508,
        link: 'https://www.boot.dev/u/defenstration',
    }, {
        id: 8,
        institution: "Scrimba.com",
        location: "scrimba.dev",
        title: "Front End Developer Career Path",
        img: "/assets/The Frontend Developer Career Path.png",
        imgWidth: 3300,
        imgHeight: 2550,
        link: 'https://scrimba.com/@defenstration:certs',
    }
]