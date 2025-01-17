export const projects = [
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
            src: "/assets/lead_tracker.png",
            alt: "Thumbnail for lead tracker app",
            height: 258,
            width: 338,
        },
        link: "https://scrimba-leads-tracker-by-defenstratio.netlify.app/",
    }
]
