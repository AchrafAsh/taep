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
                    className='text-gray-400 hover:text-gray-600 font-light flex space-x-1'
                    href={link}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <span>Linkedin</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}
