// src/Components/StudyCardList.jsx
import React from 'react'

const StudyCardList = ({ title, items }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 border">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default StudyCardList
