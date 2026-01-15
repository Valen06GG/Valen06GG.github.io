import Image from "next/image";
import GitHubImage from "../../../public/github-white.png"
import React from "react";

export const Projects = () => {
    return(
        <>
         <main className="h-200 flex flex-col w-full">
            <h1 className="m-4 py-1 pt-6 text-5xl text-neutral-300 text-center md:text-left font-bold underline underline-offset-4">
                Mis Proyectos
            </h1>
            <section>
             <div className="flex items-start">
               
               <div className="w-2/8 m-4 py-14">
                 <Image
                   src="/Kino.png"
                   alt="Kino"
                   width={300}
                   height={300}
                   className="rounded-lg w-70 h-40"
                 />
               </div>
           
               <div className="flex flex-col w-4/6 pr-20">
                 <div className="flex justify-between items-start">
                   <h1 className="text-2xl text-white font-bold mb-4">
                     Kino-Henry
                   </h1>
           
                   <div className="flex gap-4">
                     <a
                       href="https://kino-henry-pf.vercel.app"
                       className="px-6 py-3 text-white bg-white/5 border border-white/10 hover:bg-white/20 transition-all rounded-lg"
                     >
                       Ir a
                     </a>
           
                     <a
                       href="https://github.com/Valen06GG/kino-henry-pf"
                       className="flex items-center justify-center bg-[#333] rounded-full p-2"
                     >
                       <Image
                         src={GitHubImage}
                         alt="GitHub"
                         width={32}
                         height={32}
                       />
                     </a>
                   </div>
                 </div>
           
                 <p className=" pt-12 text-justify tracking-wide font-sans text-neutral-300">
                   Kino es un proyecto web desarrollado en equipo que simula una plataforma de cine moderna e interactiva. La aplicación permite explorar películas en cartelera, consultar valoraciones, ver opiniones de otros usuarios y cotizar entradas de forma sencilla.
                   El enfoque principal del proyecto está puesto en la experiencia de usuario (UX) y en el diseño de interfaces atractivas, utilizando una estética moderna, componentes reutilizables y una navegación clara.
                 </p>
               </div>
             </div>
           </section>
         </main>
        </>
    )
}