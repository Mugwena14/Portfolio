export const AboutSection =() => {
    return(
        <section id="About" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">FrontEnd Developer and tech content creator.</h3>
                        <p className="text-muted-foreground">I'm a React Frontend Developer who loves turning complex data into
                            clean, responsive interfaces. From semantic CSS to mobile-style 
                            navigation, I build web apps that feel intuitive and polished
                            across every device.
                        </p>
                        <p className="text-muted-foreground">
                            I am driven by solving real world problems, with an educational app
                            having over 1000 users. Currently learning new technologies and techniques 
                            to stay ahead in this forever changing industry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#Contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="#Contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}