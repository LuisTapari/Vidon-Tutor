// /src/Components/StudyCardTable.jsx
import React from 'react'

const StudyCardTable = ({ title, columns, data }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 border">
            <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((col, idx) => (
                                <th key={idx} className="px-4 py-2 border-b">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-t">
                                {row.map((cell, i) => (
                                    <td key={i} className="px-4 py-2">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudyCardTable
