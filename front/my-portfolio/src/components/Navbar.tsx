import Link from "next/link";
import React from "react";

export const Navbar = () => {
    return(
        <>
         <nav>
            <div className="bg-gray-700 flex justify-center items-center p-4">
                <ul className="flex items-center">
                    <li>
                      <Link
                      href="/"
                      className="text-white pr-8"
                      >
                      inicio
                      </Link>
                    </li>

                    <li>
                      <Link
                      href="/about-me"
                      className="text-white pr-8"
                      >
                      Sobre mí
                      </Link>
                    </li>

                    <li>   
                      <Link
                      href="/skills"
                      className="text-white pr-8"
                      >
                      Habilidades
                      </Link>
                    </li>

                    <li>
                      <Link
                      href="/projects"
                      className="text-white pr-8"
                      >
                      Proyectos
                      </Link>
                    </li>

                    <li>
                      <Link
                      href="/contact"
                      className="text-white pr-8"
                      >
                      Contacto
                      </Link>
                    </li>
                </ul>
            </div>
         </nav>
        </>
    )
}