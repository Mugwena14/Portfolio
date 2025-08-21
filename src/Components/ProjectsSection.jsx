import { Description } from "@radix-ui/react-toast"

const projects = [
    {
        id: 1,
        title: "LoopKart",
        Description: `Started as a personal e-commerce site, 
        later evolved into a user-driven marketplace, making my shift into backend development and focus on enabling user-
        generated content.`,
        image: "/projects/LoopKart.png",
        tags: ["React", "CSS", "Firebase"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
    {
        id: 2,
        title: "Matric IQ",
        Description: `Built for learners revising Life Sciences & Geography, 
        this multiple-choice quiz app delivers CAPS curated questions with immediate feedback. Can filter by subject, year, 
        topic, difficulty and length`,
        image: "/projects/Matric IQ.png",
        tags: ["React", "CSS", "Firebase"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
    {
        id: 3,
        title: "Portfolio",
        Description: `This is the CURRENT Portfolio on your screen, built with love, frustration and a bit of coffee.`,
        image: "/projects/Portfolio.png",
        tags: ["React", "TailWind CSS"],
        demoUrl: "#",
        gitHubUrl: "#",
    }
]

export const ProjectsSection = () => {
    return(
        <section id="projects">
            
        </section>
    )
}