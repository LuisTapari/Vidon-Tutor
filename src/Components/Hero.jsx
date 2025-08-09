import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 pt-10 lg:px-24 xl:px-32 text-[var(--blanco-hueso)] h-screen relative overflow-hidden'>
            {/* Elemento decorativo de fondo */}
            <div className="bg-[var(--verde-vidon)] absolute inset-0 z-1">
                <div className="bg-gradient-to-br from-[var(--verde-vidon)] via-[var(--verde-vidon)] to-transparent h-full w-full absolute inset-0"></div>
            </div>

            {/* Contenido principal */}
            <div className='relative z-10 w-full'>
                <p className='bg-[var(--verde-claro)]/90 backdrop-blur-sm px-4 py-2 rounded-full font-anton text-sm md:text-base border border-[var(--blanco-hueso)]/30 shadow-lg inline-block text-[var(--blanco-hueso)]/95'>
                    🎓 El mejor método de estudio de nuestro Vidón
                </p>

                <h1 className='font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight max-w-4xl mt-4 leading-tight drop-shadow-lg text-[var(--blanco-hueso)]/95 text-shadow-xl'>
                    Aprende todo sobre 
                    <span className='text-[var(--blanco-hueso)]/95 block mt-1'>
                        Vidón Bar
                    </span>
                </h1>

                <div className='max-w-2xl mt-4 space-y-3'>
                    <p className='text-base md:text-lg font-medium leading-relaxed text-[var(--blanco-hueso)]/95'>
                        Domina las técnicas culinarias, protocolos de servicio y estándares de excelencia que hacen de Vidón Bar una experiencia única.
                    </p>

                    <p className='text-sm md:text-base font-normal text-[var(--blanco-hueso)]/90'>
                        Desde técnicas de cocina hasta atención al cliente de alto nivel.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-3 mt-6'>
                        <span className='bg-[var(--verde-claro)]/20 backdrop-blur-sm text-[var(--blanco-hueso)] font-semibold px-5 py-2.5 rounded-lg border border-[var(--verde-claro)]/40 shadow-lg inline-block'>
                            ⚡ ¡Buena jornada!
                        </span>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className='absolute bottom-10 right-10 w-24 h-24 bg-[var(--verde-claro)]/40 rounded-full blur-3xl shadow-md'></div>
            <div className='absolute top-1/3 right-1/4 w-16 h-16 bg-[var(--verde-claro)]/40 rounded-full blur-2xl shadow-md'></div>
        </div>
    )
}

export default Hero