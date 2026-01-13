import React from "react";

export const AboutMe = () => {
    return(
        <>
         <main className="h-200">
            <section className="flex justify-center pt-50">
                <div className="md:col-start-4 md:col-end-8 m-5 mr-14 p-10 rounded-lg">
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="mb-7 pl-100 text-4xl font-josefin text-green-400">
                        Sobre mí
                      </h1>
                      <div className="mb-7">
                        <div>
                          <a className="flex items-center justify-center pl-10 text-4xl" href="/projects">Mis proyectos</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center pl-100">
                      <p className="flex fle-col text-white font-mukta">
                        Desde pequeño me gusto la tecnologia y los videojuegos,
                      </p>
                    </div>
                  </div>
                </div>
            </section>
         </main>
        </>
    )
}