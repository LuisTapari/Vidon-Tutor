// /src/Pages/CocinaPage.jsx (ejemplo similar para Salón)
import React from 'react'
import Title from '../Components/Title'
import StudyCardText from '../Components/StudyCardText'
import StudyCardTable from '../Components/StudyCardTable'

const SalonPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">
            <Title title="Área Cocina" aling="left" />

            {/* Card con texto */}
            <StudyCardText
                title="Higiene y Manipulación"
                content="Todo el personal de cocina debe respetar las normas de higiene y limpieza..."
            />

            {/* Card con tabla */}
            <StudyCardTable
                title="Cortes Básicos de Cocina"
                columns={["Nombre", "Descripción"]}
                data={[
                    ["Juliana", "Tiras finas y alargadas"],
                    ["Brunoise", "Corte en cubos pequeños"],
                    ["Chiffonade", "Tiras finas de hojas verdes"]
                ]}
            />
        </div>
    )
}

export default SalonPage
