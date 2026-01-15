import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center"> 
        <section className="max-w-[1200px] px-4 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex flex-col text-left max-w-xl">
              <h1 className="text-gray-300 text-4xl md:text-6xl font-bold tracking-tight">
                Full Stack Developer 
                <span className="block text-2xl md:text-3xl mt-2 text-gray-400 font-medium">
                  Valentín Fortunato
                </span>
              </h1>
              
              <p className="pt-6 text-gray-400 text-lg text-justify leading-relaxed">
                Soy desarrollador Full Stack Junior especializado en Front-End, con estudios terminados, 
                en constante aprendizaje y enfocado en la creación de interfaces web modernas, 
                funcionales y orientadas a la experiencia de usuario.
              </p>

              <div className="mt-8">
                <Link href="/about-me" className="inline-block text-white px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                  Sobre mí
                </Link>
              </div>
            </div>

            <div className="relative w-64 h-auto md:w-80 shrink-0">
              <Image 
                src="/Imagen de WhatsApp 2025-05-28 a las 19.43.19_86171298.jpg" 
                alt="Valentín Fortunato"
                width={500} 
                height={500} 
                className="rounded-2xl object-contain shadow-2xl w-full h-auto" 
                priority
              />
            </div>

          </div>
        </section>
      </main>
    </>
  );
}