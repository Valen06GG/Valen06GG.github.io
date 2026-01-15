import Image from "next/image";
import React from "react";

export const AboutMe = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-10">
      <section className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-40">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            <Image
            src="/desarrollo web.jpg"
            alt="Desarrollo web"
            width={500} 
            height={500}
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square border border-white/10"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-left">
          <div className="flex flex-row justify-between items-baseline mb-8">
            <h1 className="text-4xl font-bold text-white border-b-2 border-red-900 pb-2">
              Sobre mí
            </h1>
            <a 
              className="text-red-200 text-sm lg:text-base px-5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/20 transition-all" 
              href="/skills"
            >
              Habilidades
            </a>
          </div>

          <div className= "text-justify font-mukta text-gray-300 text-lg lg:text-xl leading-relaxed space-y-4">
            <p>
              Tengo 19 años, nací en Buenos Aires, Argentina, 
              y desde chico me apasiona la tecnología. Esa curiosidad 
              me llevó a interesarme por el desarrollo y a aprender de 
              forma constante, siempre buscando mejorar mis habilidades 
              y aplicar lo aprendido en proyectos reales.
            </p>
            <p className="mt-4">
              Me considero una persona responsable, proactiva y con 
              muchas ganas de crecer profesionalmente. Actualmente busco 
              mi primera oportunidad en el mundo IT, donde pueda seguir formándome, 
              aportar valor y desarrollarme dentro de un equipo.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
};