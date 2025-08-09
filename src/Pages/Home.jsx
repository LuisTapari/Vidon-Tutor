import React from 'react'
import Hero from '../Components/Hero'
import IntroductionSections from '../Components/IntroductionSections'

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-160px)] flex flex-col">
            <Hero />
            <IntroductionSections />
        </div>
    )
}

export default Home
