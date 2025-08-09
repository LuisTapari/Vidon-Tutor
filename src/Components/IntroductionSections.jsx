import React from 'react'
import { Link } from 'react-router-dom'

const IntroductionSections = () => {
    return (
        <section className="bg-[var(--blanco-hueso)] text-[var(--negro-suave)] py-16 px-6 md:px-16 lg:px-24 xl:px-32 space-y-20">
            {/* 1. Sección Introducción */}
            <div className="group">
                <Link to="/introduccion" className="block">
                    <h2 className="font-lobster text-4xl md:text-5xl lg:text-6xl text-[var(--verde-vidon)] mb-6 group-hover:text-[var(--verde-oscuro)] transition-all duration-500 transform group-hover:scale-105">
                        Bienvenidos al material de estudio de Vidón Bar
                    </h2>
                </Link>
                <div className="bg-[var(--blanco-hueso)] p-8 rounded-2xl border border-[var(--verde-vidon)]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[var(--verde-vidon)]/40">
                    <p className="font-outfit text-base md:text-lg leading-relaxed text-[var(--negro-suave)] mb-6">
                        Este sitio nace para centralizar todo el contenido educativo esencial para el equipo de Vidón Bar. Aquí encontrarás recursos interactivos y prácticos, diseñados para elevar tus habilidades en cocina y salón, asegurando un servicio excepcional y la mejor calidad en cada plato.
                    </p>
                    <Link
                        to="/introduccion"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--verde-vidon)] text-[var(--blanco-hueso)] font-montserrat font-semibold rounded-xl hover:bg-[var(--verde-oscuro)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        🎓 Ir a la Introducción
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* 2. Sección Cocina */}
            <div className="group">
                <Link to="/cocina" className="block">
                    <h3 className="font-bebas text-4xl md:text-5xl uppercase tracking-wider text-[var(--verde-vidon)] mb-4 group-hover:text-[var(--verde-oscuro)] transition-all duration-500 transform group-hover:scale-105">
                        Sección Cocina
                    </h3>
                </Link>
                <div className="bg-[var(--blanco-hueso)] p-8 rounded-2xl border border-[var(--verde-vidon)]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[var(--verde-vidon)]/40">
                    <p className="font-outfit text-base md:text-lg leading-relaxed text-[var(--negro-suave)] mb-6">
                        En esta sección, exploraremos técnicas de corte, control de tiempo y temperatura, manejo de insumos frescos y recetas exclusivas de Vidón Bar. Cada módulo incluye guías paso a paso y protocolos de higiene para alcanzar la perfección culinaria.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-[var(--verde-vidon)]/10 text-[var(--verde-vidon)] text-sm font-medium rounded-full">🔪 Técnicas de corte</span>
                        <span className="px-3 py-1 bg-[var(--verde-vidon)]/10 text-[var(--verde-vidon)] text-sm font-medium rounded-full">🌡️ Control de temperatura</span>
                        <span className="px-3 py-1 bg-[var(--verde-vidon)]/10 text-[var(--verde-vidon)] text-sm font-medium rounded-full">🥘 Recetas exclusivas</span>
                    </div>
                    <Link
                        to="/cocina"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--verde-vidon)] text-[var(--blanco-hueso)] font-montserrat font-semibold rounded-xl hover:bg-[var(--verde-oscuro)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        👨‍🍳 Ir a Cocina
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* 3. Sección Salón */}
            <div className="group">
                <Link to="/salon" className="block">
                    <h3 className="font-bebas text-4xl md:text-5xl uppercase tracking-wider text-[var(--verde-vidon)] mb-4 group-hover:text-[var(--verde-oscuro)] transition-all duration-500 transform group-hover:scale-105">
                        Sección Salón
                    </h3>
                </Link>
                <div className="bg-[var(--blanco-hueso)] p-8 rounded-2xl border border-[var(--marron-claro)]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[var(--marron-claro)]/50">
                    <p className="font-outfit text-base md:text-lg leading-relaxed text-[var(--negro-suave)] mb-6">
                        Aquí te enfocarás en atención al cliente, técnicas de servicio de mesa, manejo de reservas y protocolo de bebidas. Incluye consejos de maridaje y dinámicas de equipo para crear experiencias inolvidables en Vidón Bar.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-[var(--marron-claro)]/10 text-[var(--marron-claro)] text-sm font-medium rounded-full">🍷 Protocolo de bebidas</span>
                        <span className="px-3 py-1 bg-[var(--marron-claro)]/10 text-[var(--marron-claro)] text-sm font-medium rounded-full">🤝 Atención al cliente</span>
                        <span className="px-3 py-1 bg-[var(--marron-claro)]/10 text-[var(--marron-claro)] text-sm font-medium rounded-full">📋 Manejo de reservas</span>
                    </div>
                    <Link
                        to="/salon"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--verde-vidon)] text-[var(--blanco-hueso)] font-montserrat font-semibold rounded-xl hover:bg-[var(--verde-oscuro)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        🍽️ Ir a Salón
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default IntroductionSections
