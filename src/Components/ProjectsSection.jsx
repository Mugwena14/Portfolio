import { Description } from "@radix-ui/react-toast"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "LoopKart",
        description: `Started as a personal e-commerce site, 
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
        description: `Built for learners revising Life Sciences & Geography, 
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
        description: `This is the CURRENT Portfolio on your screen, built with love, frustration and a bit of coffee.`,
        image: "/projects/Portfolio.png",
        tags: ["React", "TailWind CSS"],
        demoUrl: "#",
        gitHubUrl: "#",
    }
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">My </span> Projects.
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are the 3 pillars of my craft, including this Portfolio.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card:hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border bg-primary/30 rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                        target="_blank"
                                        href={project.demoUrl} 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.gitHubUrl} 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}