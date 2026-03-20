import Image from "next/image";
import GitHubImage from "../../../public/github-white.png"
import React from "react";

export const Projects = () => {
    return(
        <>
         <main className="h-200 flex flex-col w-full pl-10">
            <div className="m-4 pt-6 w-fit mx-auto md:mx-0">
              <h1 className="text-5xl text-neutral-300 font-bold">
                Mis Proyectos
              </h1>
              <div className="h-[2px] w-full bg-red-900 mt-2 rounded"></div>
            </div>
            <section className="flex flex-col gap-20 max-w-5xl mx-auto">
            
              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                <Image
                  src="/Kino.png"
                  alt="Kino"
                  width={300}
                  height={200}
                  className="rounded-lg w-full md:w-[300px]"
                />
            
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-2xl font-bold text-white">Kino-Henry</h2>
            
                    <div className="flex gap-3">
                      <a
                        href="https://kino-henry-pf.vercel.app"
                        className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10"
                      >
                        Ir a
                      </a>
            
                      <a href="https://github.com/Valen06GG/kino-henry-pf">
                        <Image src={GitHubImage} alt="GitHub" width={28} height={28} />
                      </a>
                    </div>
                  </div>
            
                  <p className="text-neutral-300 leading-relaxed">
                    Plataforma web de cine desarrollada en equipo, enfocada en la experiencia de usuario,
                    exploración de películas y visualización de contenido de forma interactiva.
                  </p>
                </div>
              </div>
            
              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                <Image
                  src="/Teamboard.png"
                  alt="Teamboard"
                  width={300}
                  height={200}
                  className="rounded-lg w-full md:w-[300px]"
                />
            
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-2xl font-bold text-white">TeamBoard</h2>
            
                    <div className="flex gap-3">
                      <a
                        href="https://teamboard-frontend-o5wvb5bcy-valentins-projects-0e36b93a.vercel.app"
                        className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10"
                      >
                        Ir a
                      </a>
            
                      <a href="https://github.com/Valen06GG/kino-henry-pf">
                        <Image src={GitHubImage} alt="GitHub" width={28} height={28} />
                      </a>
                    </div>
                  </div>
            
                  <p className="text-neutral-300 leading-relaxed">
                    TeamBoard es una aplicación web fullstack enfocada en la gestión de equipos y proyectos. Permite organizar tareas, asignarlas a distintos usuarios y hacer un seguimiento claro del progreso en tiempo real.
                    El proyecto fue desarrollado utilizando React en el frontend y NestJS en el backend, con una base de datos PostgreSQL. Además, incluye despliegue en producción y manejo de entornos, lo que refleja una implementación completa de una arquitectura moderna.
                    Este proyecto destaca por su enfoque práctico, interfaz simple y la integración funcional entre cliente y servidor.
                  </p>
                </div>
              </div>
            
            </section>
         </main>
        </>
    )
}