"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "inicio", href: "/" },
        { name: "Sobre mí", href: "/about-me" },
        { name: "Habilidades", href: "/skills" },
        { name: "Proyectos", href: "/projects" },
        { name: "Contacto", href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#34343e]/70 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white font-bold text-xl">PORTFOLIO</Link>
                        </div>

                        <div className="hidden md:block">
                            <ul className="flex items-baseline space-x-8">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none"
                            >
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#34343e] border-b border-white/10`}>
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)} 
                                    className="block text-gray-300 hover:text-white px-3 py-4 text-base font-medium border-b border-white/5 last:border-none"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="h-16"></div>
        </>
    );
};