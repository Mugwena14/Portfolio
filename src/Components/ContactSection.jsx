import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import {cn} from '@/lib/utils'


export const ContactSection = () => {
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Let's make <span className="text-primary"> Something Happen.</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Ideas, Feedbacks or just a simple hi? Feel Free to Reach Out.
                    I'm always open to discussing new opportunities.
                </p>
                <div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold-mb-6">Contact Information</h3>
                        <div className="space-y-6 mr-12 justify-center flex items-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                    href="mailto:mlangaviclyde@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        mlangaviclyde@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 mr-10 justify-center flex items-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                    href="tel:+27685021117" 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        +27 (68) 502-1117
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 mr-10 justify-center flex items-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <p 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        Gauteng, Pretoria
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-8">
                            <h4 className='font-medium mb-4'> Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a target="_blank" href="https://www.linkedin.com/in/langavi-makhubele-clyde/">
                                    <Linkedin />
                                </a>
                                <a target="_blank">
                                    <Twitter />
                                </a>
                                <a target="_blank">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                required 
                                name="name"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Langavi Makhubele...."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                required 
                                name="email"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="email@gmail.com...."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                id="message" 
                                required 
                                name="message"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hey, I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                            )}>
                                Send Message
                                <Send size={16}/>
                            </button>
                        </form>

                    </div> */}
                </div>
            </div>
        </section>
    )
}