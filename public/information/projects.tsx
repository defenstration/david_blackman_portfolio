import {Project} from "@/app/types"


export const projects: Project[] = [
    {
        id: 1,
        name: "Initiative Tracker - V1",
        type: "Personal",
        shortDesc: "My first solo project - An Initiative Tracker for TTRPGs",
        longDesc: "This was the first project I ever built on my own. It takes an input, saves it to local strorage and generates information cards based on that information. This is a project that I am actively changing. Version 2 will make use of some different technologies that I didn't know how to use back then.",
        tech: ["HTML", "CSS", "Vanilla Javascript", "Javascript Modules"],
        status: "Complete",
        percentage: 100,
        thumbnail: {
            src: "/assets/init_thumbnail.png",
            alt: "Thumbnail image for Initiative Tracker - V1",
            height: 279,
            width: 344,
        },
        screenshot: {
            src: "/assets/init_screenshot.png",
            alt: "Screenshot of Initiative Tracker - V1",
            height: 864,
            width: 1917,
        },
        link: "https://defenstration.github.io/initiative_tracker/",
        siteUrl: "https://defenstration.github.io/initiative_tracker/",
        github: ""
    },     {
        id: 2,
        name: "Scrimba Leads Tracker",
        type: "Scrimba",
        shortDesc: "A Scrimba leads tracker app",
        longDesc: "This is the project from the Scrimba course creating a Chrome extension and mobile app. It was my first time working with Chrome extensions, Firebase, and deploying to Netlify. I had also never worked with favicons or web manifests before. It was exceptionally cool to see what I had worked on working on my phone.",
        tech: ["HTML", "CSS", "Javascript", "Netlify", "Firebase"],
        status: "Complete",
        percentage: 100,
        thumbnail: {
            src: "/assets/lead_tracker.png",
            alt: "Thumbnail for lead tracker app",
            height: 258,
            width: 338,
        },
        screenshot: {
            src: "/assets/lead_tracker_screenshot.png",
            alt: "Thumbnail for lead tracker app",
            height: 258,
            width: 338,
        },
        link: "https://scrimba-leads-tracker-by-defenstratio.netlify.app/",
        siteUrl: "https://scrimba-leads-tracker-by-defenstratio.netlify.app/",
        github: ""
    }, {
        id: 3,
        name: "QR Code Component",
        type: "Frontend Mentor",
        shortDesc: "Frontend Mentor QR Code Component",
        longDesc: "One of the first Frontend Mentor challeges I completed. I was just starting to learn CSS and HTML and this was a good project to get started with.",
        tech: ["HTML", "CSS"],
        status: "Complete",
        percentage: 100,
        thumbnail: {
            src: "/assets/QR-code-component.png",
            alt: "Thumbnail for QR code component challenge",
            height: 346,
            width: 515,
        },
        screenshot: {
            src: "/assets/QR-code-component.png",
            alt: "Screenshot for QR code component challenge",
            height: 346,
            width: 515,
        },
        link: "https://www.frontendmentor.io/solutions/qr-code-component-solution---html-and-css-yO_e7JLkNH",
        siteUrl: "",
        github: "https://github.com/defenstration/fm_qrcomponent"
    }, {
        id: 4,
        name: "Blog Preview Card Component",
        type: "Frontend Mentor",
        shortDesc: "Frontend Mentor Blog Preview Card Component",
        longDesc: "More Frontend Mentor challenges. This was slightly more complex than the QR component, but I was still building up the muscle memory with HTML and CSS.",
        tech: ["HTML", "CSS"],
        status: "Complete",
        percentage: 100,
        thumbnail: {
            src: "/assets/Blog-Preview-Card.png",
            alt: "Thumbnail for blog preview card",
            height: 419,
            width: 547,
        },
        screenshot: {
            src: "/assets/Blog-Preview-Card.png",
            alt: "Screenshot for blog preview card",
            height: 419,
            width: 547,
        },
        link: "https://www.frontendmentor.io/solutions/blog-preview-card-using-html-and-css-Z9k3PXuKo_",
        siteUrl: "https://defenstration.github.io/fm_blog_preview_card/",
        github: "https://github.com/defenstration/fm_blog_preview_card"
    }, {
        id: 5,
        name: "Social Links Profile Card",
        type: "Frontend Mentor",
        shortDesc: "Frontend Mentor Social Links Profile Card",
        longDesc: "This was another HTML and CSS Frontend Mentor challenge. I was starting to feel more comfortable with HTML and CSS, and I did all of the design on the project by eye, instead of from the Figma file. ",
        tech: ["HTML", "CSS"],
        status: "Complete",
        percentage: 100,
        thumbnail: {
            src: "/assets/Social-Links-Profile-Card.png",
            alt: "Thumbnail for Social Links Profile Card",
            height: 339,
            width: 547,
        },
        screenshot: {
            src: "/assets/Social-Links-Profile-Card.png",
            alt: "Screenshot for Social Links Profile Card",
            height: 339,
            width: 547,
        },
        link: "https://www.frontendmentor.io/solutions/social-links-profile-solution-using-html-and-css-MIq5u7Mgip",
        siteUrl: "https://defenstration.github.io/fm_social_links_profile/",
        github: "https://github.com/defenstration/fm_social_links_profile"
    }
]
