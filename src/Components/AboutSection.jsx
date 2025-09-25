import { Briefcase, Code, User } from 'lucide-react'
import resume from "../assets/Resume.pdf"

export const AboutSection =() => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Full-Stack Developer.</h3>
                        <p className="text-muted-foreground">I'm a Full-Stack Developer who loves 
                            turning complex data into clean, responsive interfaces and efficient, 
                            scalable backends. From semantic CSS to database design and API integration, 
                            I build web apps that feel intuitive and polished across every device.
                        </p>
                        <p className="text-muted-foreground">
                            I am driven by solving real-world problems — including an educational app with over 500 users. 
                            I'm constantly learning new technologies to stay ahead in this ever-evolving industry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href={resume} download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-stars gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code  className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Development</h4>
                                    <p className="text-muted-foreground">I create Full-Stack Web applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-stars gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User  className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Apps with 500+ users</h4>
                                    <p className="text-muted-foreground">My two Apps now serve over 500 users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-stars gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase  className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">50+ Projects</h4>
                                    <p className="text-muted-foreground">Trusted for turning ideas into code.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}