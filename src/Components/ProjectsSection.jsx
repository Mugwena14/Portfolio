import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Rexium",
        description: `An AI-powered task management app that helps you stay organized by adding tasks, recording progress, 
        and attaching notes and documents — all in one seamless workspace.`,
        image: "/projects/Rexium.png",
        tags: ["React", "Tailwindcss", "Express", "MongoDB"],
        demoUrl: "https://rexium.vercel.app/",
        gitHubUrl: "https://github.com/Mugwena14/task-app",
    },
    {
        id: 2,
        title: "LoopKart",
        description: `LoopKart is a modern marketplace app that connects buyers and sellers in a seamless, user-friendly environment. 
        It allows users to discover products, make purchases, and sell items effortlessly`,
        image: "/projects/LoopKart.png",
        tags: ["React", "Tailwindcss", "Express", "MongoDB"],
        demoUrl: "https://loopkart.vercel.app/",
        gitHubUrl: "https://github.com/Mugwena14/YoJobs",
    },
    {
        id: 3,
        title: "Matric IQ",
        description: `Built for learners revising Life Sciences & Geography, 
        this multiple-choice quiz app delivers CAPS curated questions with immediate feedback. Can filter by subject, year, 
        topic, difficulty and length`,
        image: "/projects/Matric IQ.png",
        tags: ["React", "CSS", "Firebase"],
        demoUrl: "https://matric-iq.vercel.app/",
        gitHubUrl: "https://github.com/Mugwena14/MatrIQ",
    },

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

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://github.com/Mugwena14">
                        Checkout My GitHub <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
        </section>
    )
}