import React from 'react'

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I am </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Langavi </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Makhubele</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a FrontEnd Developer who loves building clean,
                        responsive, and user-friendly interfaces with modern tools.
                        I enjoy turning ideas into seamless digital experiences that 
                        feel intuitive and engaging.
                        Always learning new technologies to keep improving and stay 
                        ahead in the field.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#Projects" className="cosmic-button">
                            View My Craft
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
