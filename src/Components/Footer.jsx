import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[var(--blanco-hueso)] text-[var(--negro-suave)] pt-10 pb-4 px-6 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                
                {/* Logo + texto */}
                <div className="flex flex-col items-start min-w-[220px]">
                    <img
                        src={assets.logo}
                        alt="logo"
                        className="mb-3 w-40 h-auto invert opacity-90" // logo más grande
                    />
                    <p className="text-base font-semibold text-[var(--verde-vidon)]">
                        lugar de estudio de los empleados de vidon
                    </p>
                </div>
                
                {/* Navegación central */}
                <nav className="flex flex-col items-center flex-1">
                    <ul className="flex flex-col gap-2 text-md font-anton font-semibold"> {/* vertical + letra más chica */}
                        <li>
                            <Link to="/introduccion" className="hover:text-[var(--verde-vidon)] transition">
                                Introducción
                            </Link>
                        </li>
                        <li>
                            <Link to="/cocina" className="hover:text-[var(--verde-vidon)] transition">
                                Cocina
                            </Link>
                        </li>
                        <li>
                            <Link to="/salon" className="hover:text-[var(--verde-vidon)] transition">
                                Salón
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                {/* Contacto a la derecha */}
                <div className="flex flex-col items-center md:items-end min-w-[220px] text-center md:text-right">
                    <p className="font-semibold text-[var(--verde-vidon)] mb-2">Contacto Vidón</p>
                    <p className="text-base font-medium">
                        <span className="font-medium">WhatsApp:</span>{' '}
                        <a
                            href="https://wa.me/5493512792796"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--verde-vidon)] hover:underline"
                        >
                            +54 9 351 279-2796
                        </a>
                    </p>
                    <p className="text-base mt-1 font-medium">
                        <span className="font-medium">Dirección:</span>{' '}
                        <span className="text-[var(--negro-suave)]">
                            Dr. T. Achaval Rodriguez 152, Córdoba, Argentina
                        </span>
                    </p>
                </div>
            </div>
            
            {/* Créditos abajo */}
            <div className="border-t border-[var(--verde-vidon)]/30 pt-2 text-center mt-6">
                <p className="text-sm text-[var(--negro-suave)]/70">
                    Creado por <span className="font-semibold text-[var(--verde-vidon)]">Luis Tapari</span> con mucho amor para Vidón
                </p>
            </div>
        </footer>
    )
}

export default Footer