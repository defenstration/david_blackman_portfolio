'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { info } from '../../public/information/information'

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true)
    }, [])
    return (
        <section id="hero" className={`section-wrapper p-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                {/* Left side - Text content */}
                <div className={`flex flex-col gap-4 max-w-2xl transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {info.name}
                    </h1>
                    <h2 className="text-2xl text-gray-300">Full Stack Developer</h2>
                    <p className="text-lg text-gray-300 mt-2">
                        Passionate developer with expertise in web development, creating responsive and 
                        user-friendly applications with modern technologies.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{info.address}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Link href={`mailto:${info.email}`} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-md transition-colors shadow-lg">
                            Contact Me
                        </Link>
                        <Link href="#projects" className="px-4 py-2 border border-cyan-500 hover:border-cyan-300 text-cyan-300 hover:text-white rounded-md transition-colors shadow-lg">
                            View Projects
                        </Link>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <Link href={info.github.url || "https://github.com"} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-green-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </Link>
                        <Link href={info.linkedin.url || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-green-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </Link>
                        <Link href={`mailto:${info.email}`} className="text-cyan-400 hover:text-green-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                
                {/* Right side - Profile image */}
                <div className={`relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-cyan-900 shadow-lg shadow-cyan-900/50 hover:shadow-cyan-700/50 transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <Image 
                        src="/assets/gelly-pic.jpg"
                        alt="David Blackman"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className="hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    )
}
