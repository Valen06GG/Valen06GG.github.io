import Image from "next/image";
import React from "react";

export const Skills = () => {
    return(
        <>
         <main>
          <section className="h-200 max-w-[750px] m-auto py-4 px-5 flex flex-col pt-20">
            <div className="text-white">
                <p className="text-4xl font-bold inline border-b-4 border-red-900">
                    Habilidades
                </p>

                <p className="py-4 text-[#f9b82c] font-medium dark:font-normal">
                  Estas son las tecnologias con las que trabajo
                </p>
            </div>

            <div className="w-150 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 font-bold dark:font-normal">
                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/HTML-1.png"
                    alt="HTML"
                    width={130}
                    height={130}
                    className="w-20 mx-auto" 
                    />
                    <p className="mt-4">Html</p>
                </div>
                
                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/CSS-Logo.png"
                    alt="CSS"
                    width={180}
                    height={180}
                    className="w-35 mx-auto" 
                    />
                    <p className="mt-4">Css</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/JavaScript-logo.png"
                    alt="Javascript"
                    width={100}
                    height={130}
                    className="w-15 mx-auto rounded-lg mt-4" 
                    />
                    <p className="mt-5">JavaSript</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/Git Logo.png"
                    alt="GIT"
                    width={130}
                    height={130}
                    className="w-20 mx-auto" 
                    />
                    <p className="mt-4">Git</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/Tailwind-removebg-preview.png"
                    alt="Tailwind"
                    width={130}
                    height={130}
                    className="w-20 mx-auto mt-6" 
                    />
                    <p className="mt-6">Tailwind</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/React.png"
                    alt="React"
                    width={130}
                    height={130}
                    className="w-20 mx-auto mt-3" 
                    />
                    <p className="mt-3">React.js</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/Next.png"
                    alt="Next"
                    width={130}
                    height={130}
                    className="w-20 mx-auto mt-1" 
                    />
                    <p className="mt-4">Next</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/Redux-removebg-preview.png"
                    alt="Redux"
                    width={130}
                    height={130}
                    className="w-20 mx-auto mt-1" 
                    />
                    <p className="mt-4">Redux</p>
                </div>

                <div className="text-white bg-slate-200 dark:bg-[#472e2e] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
                    <Image 
                    src="/Typescript_logo-removebg-preview.png"
                    alt=""
                    width={130}
                    height={130}
                    className="w-15 mx-auto mt-4 rounded-lg" 
                    />
                    <p className="mt-6">TypeScript</p>
                </div>
            </div>
          </section>
         </main>
        </>
    )
}