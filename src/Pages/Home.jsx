import React from 'react'
import { ThemeToggle }  from '../Components/ThemeToggle'
import { StarBackground } from "@/Components/StarBackground"
import { NavBar } from "@/Components/NavBar"
import { HeroSection } from '@/Components/HeroSection'
import { AboutSection } from '@/Components/AboutSection'

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
        </main>

        {/* Footer */}
        </div>
    )
}

export default Home