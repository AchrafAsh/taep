import * as React from 'react'

export default function ConsultantCard({ image, name, link }) {
    return (
        <div className='flex flex-col shadow-lg w-max'>
            <div className='w-40 h-40'>
                <img src={image} alt={name} className='' />
            </div>

            <div className='bg-white w-full flex flex-col space-y-2 p-4'>
                <span className='font-light text-blue-1000'>{name}</span>
                <a
                    className='text-gray-400 font-light'
                    href={link}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Linkedin
                </a>
            </div>
        </div>
    )
}
