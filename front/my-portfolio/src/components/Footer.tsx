import React from "react";
import Image from "next/image";

export const Footer = () => {
    return(
        <>
        <footer>
            <div className="flex justify-center w-full z-50 bg-[#34343e]/50 backdrop-blur-md">
                <ul className="flex justify-center items-center w-[300px]">
                    <li className="p-3">
                        <a
                          href="https://www.linkedin.com/in/valentin-fortunato/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="/Linkedin.png"
                            alt="LinkedIn"
                            width={45}
                            height={45}
                          />
                        </a>
                    </li>

                    <li>
                        <a
                          href="https://github.com/Valen06GG"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            className="rounded-lg"
                            src="/github.png"
                            alt="Github"
                            width={50}
                            height={40}
                          />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center w-full z-50 bg-[#34343e]/50 backdrop-blur-md">
              <ol className="pb-4 flex flex-col">
                  <h2 className="text-white">
                    Mi email: valenfortunato06@gmail.com
                  </h2>
                  
                  <h1 className="flex justify-center text-[#f9b82c] font-medium">
                    Desarrollado por Valentín Fortunato
                  </h1>
              </ol>
            </div>
        </footer>
        </>
    )
}