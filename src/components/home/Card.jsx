import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Card({ image, title, text, number, right }) {
    return (
        <div
            className={`relative max-w-xl mx-auto bg-gray-50 flex ${
                right ? 'flex-row-reverse' : 'flex-row'
            } items-end p-8`}
        >
            <div>
                <span className='text-8xl font-bold text-gray-200'>
                    {number}.
                </span>
            </div>
            <div className={`max-w-sm ${right ? 'mr-10' : 'ml-10'}`}>
                <h3
                    className={`text-2xl font-semibold text-${
                        right ? 'left' : 'right'
                    } mb-4`}
                >
                    {title}
                </h3>
                <p>{text}</p>
            </div>

            <img
                className={`absolute top-0 w-40 transform ${
                    right
                        ? 'right-0 translate-x-1/3'
                        : 'left-0 -translate-x-1/3'
                } -translate-y-2/3`}
                alt={title}
                src={image}
            />
        </div>
    )
}
