import Image from "next/image";
import GitHubImage from "../../../public/github-white.png"
import React from "react";

export const Projects = () => {
    return (
        <>
            <main className="min-h-screen flex flex-col w-full pl-10 pb-32">
                <div className="m-4 pt-6 w-fit mx-auto md:mx-0">
                    <h1 className="text-5xl text-neutral-300 font-bold">
                        Mis Proyectos
                    </h1>
                    <div className="h-[2px] w-full bg-red-900 mt-2 rounded"></div>
                </div>

                <section className="flex flex-col gap-20 max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 items-start"> 
                        
                        <div className="relative w-full md:w-[350px] shrink-0"> 
                            <Image
                                src="/Kino.png"
                                alt="Kino"
                                width={350}
                                height={200}
                                className="rounded-lg w-full aspect-video object-cover shadow-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between w-full">
                                <h2 className="text-2xl font-bold text-white">Kino-Henry</h2>
                                <div className="flex gap-3">
                                    <a href="https://kino-henry-pf.vercel.app" className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 text-white transition-colors">
                                        Ir a
                                    </a>
                                    <a href="https://github.com/Valen06GG/kino-henry-pf">
                                        <Image src={GitHubImage} alt="GitHub" width={28} height={28} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-neutral-300 leading-relaxed text-justify">
                                Kino es un proyecto web desarrollado en equipo que simula una plataforma de cine moderna e interactiva...
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};