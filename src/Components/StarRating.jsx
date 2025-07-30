import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
    return (
        <>
            {Array(5).fill(0).map((_, index) => (
                <img
                    key={index}                                         // ← aquí
                    src={
                        rating > index
                            ? assets.starIconFilled
                            : assets.starIconOutlined
                    }
                    alt={`star-${index + 1}`}
                    className="w-4 h-4"                                 // si w-4.5 te da error, usa w-4 o personaliza tu Tailwind
                />
            ))}
        </>
    )
}

export default StarRating
