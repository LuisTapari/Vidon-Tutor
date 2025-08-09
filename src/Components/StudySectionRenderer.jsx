// src/Components/StudySectionRenderer.jsx
import React from 'react'
import StudyCardText from './StudyCardText'
import StudyCardTable from './StudyCardTable'
import StudyCardList from './StudyCardList'

const StudySectionRenderer = ({ blocks }) => {
    return (
        <div className="space-y-6">
            {blocks.map((block, idx) => {
                switch (block.type) {
                    case 'text':
                        return <StudyCardText key={idx} title={block.title} content={block.content} />
                    case 'table':
                        return <StudyCardTable key={idx} title={block.title} columns={block.columns} data={block.data} />
                    case 'list':
                        return <StudyCardList key={idx} title={block.title} items={block.items} />
                    default:
                        return null
                }
            })}
        </div>
    )
}

export default StudySectionRenderer
