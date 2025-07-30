// /src/Components/StudyCardText.jsx
import React from 'react'

const StudyCardText = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 border">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{content}</p>
        </div>
    )
}

export default StudyCardText
