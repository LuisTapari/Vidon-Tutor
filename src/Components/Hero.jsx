import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-green-900 h-screen'>
            <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>El mejor método de estudio de nuestro Vidon</p>
            <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Aprende todo sobre Vidon para subir de nivel!</h1>
            <p className='max-w-130 mt-2 text-sm md:text-base'>
                Conoce las mejores técnicas de estudio y aprende a usar Vidon como un experto.
                <br />
                ¡Comienza tu viaje de aprendizaje hoy mismo!
            </p>
        </div>
    )
}



export default Hero