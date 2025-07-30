import React from 'react'

    const IntroductionSections = () => {
    return (
        <section className="bg-white text-gray-800 py-12 px-6 md:px-16 lg:px-24 xl:px-32 space-y-16">
            {/* 1. Sección Introducción */}
            <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-4">
                    Bienvenidos a Vidón Bar Academy
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                    Este sitio nace para centralizar todo el contenido educativo esencial para el equipo de Vidón Bar. Aquí encontrarás recursos interactivos y prácticos, diseñados para elevar tus habilidades en cocina y salón, asegurando un servicio excepcional y la mejor calidad en cada plato.
                </p>
            </div>

            {/* 2. Sección Cocina */}
            <div>
                <h3 className="text-2xl font-bold text-indigo-500 mb-3">
                    Sección Cocina
                </h3>
                <p className="text-base leading-relaxed">
                    En esta sección, exploraremos técnicas de corte, control de tiempo y temperatura, manejo de insumos frescos y recetas exclusivas de Vidón Bar. Cada módulo incluye guías paso a paso y protocolos de higiene para alcanzar la perfección culinaria.
                </p>
            </div>

            {/* 3. Sección Salón */}
            <div>
                <h3 className="text-2xl font-bold text-indigo-500 mb-3">
                    Sección Salón
                </h3>
                <p className="text-base leading-relaxed">
                    Aquí te enfocarás en atención al cliente, técnicas de servicio de mesa, manejo de reservas y protocolo de bebidas. Incluye consejos de maridaje y dinámicas de equipo para crear experiencias inolvidables en Vidón Bar.
                </p>
            </div>
        </section>
    )
}


export default IntroductionSections