import React, { useState } from 'react'
import IndicePage from '../Components/IndicePage'
import { salonContent } from '../assets/studyContent'
import StudyCardText from '../Components/StudyCardText'
import StudyCardTable from '../Components/StudyCardTable'

const filteredSections = salonContent.filter(section => section.showInIndex)

const SalonPage = () => {
    const [showIndice, setShowIndice] = useState(false)
    const [openSection, setOpenSection] = useState(null) // Para mobile

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Vista ESCRITORIO */}
            <div className="hidden md:flex gap-8 items-start">
                {/* Índice lateral */}
                <div className="shrink-0 min-w-[220px] max-w-[220px]">
                    <button
                        className="w-full bg-[var(--verde-vidon)] text-[var(--blanco-hueso)] font-anton font-semibold rounded-xl py-2 px-4 mb-4 shadow hover:bg-[var(--verde-oscuro)] transition"
                        onClick={() => setShowIndice(!showIndice)}
                    >
                        Índice
                    </button>
                    {showIndice && (
                        <div className="bg-[var(--blanco-hueso)]/95 border border-[var(--verde-vidon)] rounded-xl shadow-lg p-4">
                            <IndicePage content={filteredSections} />
                        </div>
                    )}
                </div>
                {/* Contenido */}
                <div className="flex-1">
                    <h1 className="text-3xl font-black mb-8 mt-2 text-[var(--negro-suave)]">Contenido de Salón</h1>
                    {filteredSections.map((section, idx) => (
                        <div key={idx} className="mb-12">
                            <h2
                                id={`section-${idx}`}
                                className="text-xl font-semibold mb-4 scroll-mt-24 text-[var(--verde-vidon)]"
                            >
                                {section.title}
                            </h2>
                            <div className="bg-[var(--verde-vidon)]/80 rounded-2xl shadow-md border border-[var(--verde-oscuro)] p-6 space-y-6">
                                {section.blocks.map((block, i) => {
                                    const blockTitle = block.title ? (
                                        <h3
                                            id={`section-${idx}-block-${i}`}
                                            className="text-lg font-semibold mb-2 scroll-mt-24 text-[var(--blanco-hueso)]"
                                        >
                                            {block.title}
                                        </h3>
                                    ) : null

                                    if (block.type === 'text') {
                                        return (
                                            <div key={i}>
                                                {blockTitle}
                                                <StudyCardText title={null} content={block.content} />
                                            </div>
                                        )
                                    }
                                    if (block.type === 'list') {
                                        return (
                                            <div key={i}>
                                                {blockTitle}
                                                <StudyCardText
                                                    title={null}
                                                    content={
                                                        <ul className="list-disc pl-5">
                                                            {block.items.map((item, j) => (
                                                                <li key={j}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    }
                                                />
                                            </div>
                                        )
                                    }
                                    if (block.type === 'table') {
                                        return (
                                            <div key={i}>
                                                {blockTitle}
                                                <StudyCardTable
                                                    title={null}
                                                    columns={block.columns}
                                                    data={block.data}
                                                />
                                            </div>
                                        )
                                    }
                                    return null
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vista MOBILE */}
            <div className="md:hidden">
                <h1 className="text-2xl font-black mb-6 text-[var(--negro-suave)]">Contenido de Salón</h1>
                {filteredSections.map((section, idx) => (
                    <div key={idx} className="mb-4 border border-[var(--verde-vidon)] rounded-lg overflow-hidden">
                        <button
                            className="w-full text-left px-4 py-3 bg-[var(--verde-vidon)] text-[var(--blanco-hueso)] font-anton font-semibold"
                            onClick={() => setOpenSection(openSection === idx ? null : idx)}
                        >
                            {section.title}
                        </button>
                        {openSection === idx && (
                            <div className="bg-[var(--verde-vidon)]/80 p-4 space-y-6">
                                {section.blocks.map((block, i) => {
                                    const blockTitle = block.title ? (
                                        <h3
                                            id={`mobile-section-${idx}-block-${i}`}
                                            className="text-lg font-semibold mb-2 text-[var(--blanco-hueso)]"
                                        >
                                            {block.title}
                                        </h3>
                                    ) : null

                                    if (block.type === 'text') {
                                        return (
                                            <div key={i}>
                                                {blockTitle}
                                                <StudyCardText title={null} content={block.content} />
                                            </div>
                                        )
                                    }
                                    if (block.type === 'list') {
                                        return (
                                            <div key={i}>
                                                {blockTitle}
                                                <StudyCardText
                                                    title={null}
                                                    content={
                                                        <ul className="list-disc pl-5">
                                                            {block.items.map((item, j) => (
                                                                <li key={j}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    }
                                                />
                                            </div>
                                        )
                                    }
                                    if (block.type === 'table') {
                                        return (
                                            <div key={i}>
                                                {blockTitle}
                                                <StudyCardTable
                                                    title={null}
                                                    columns={block.columns}
                                                    data={block.data}
                                                />
                                            </div>
                                        )
                                    }
                                    return null
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SalonPage