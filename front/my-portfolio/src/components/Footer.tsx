import React from "react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="w-full bg-[#1a1a1e] border-t border-white/10 py-8 mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
                <div className="flex justify-center gap-8">
                    <a href="https://www.linkedin.com/in/valentin-fortunato/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <Image
                            src="/linkedin_2-removebg-preview (1).png"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a href="https://github.com/Valen06GG" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <Image
                            src="/github-white.png"
                            alt="Github"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>

                <div className="text-center space-y-2">
                    <p className="text-neutral-400 text-sm">
                        Mi email: <span className="text-white">valenfortunato06@gmail.com</span>
                    </p>
                    <p className="text-[#f9b82c] font-medium tracking-wide">
                        Desarrollado por Valentín Fortunato
                    </p>
                </div>
            </div>
        </footer>
    );
};