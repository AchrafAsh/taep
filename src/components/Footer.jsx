import * as React from 'react'
import { Link } from 'gatsby'

const specialties = [
    {
        id: 0,
        name: 'maritime',
        image: 'https://images.unsplash.com/photo-1598193957011-39b9f2916992?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 1,
        name: 'data',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 2,
        name: 'energie',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 3,
        name: 'transport',
        image: 'https://images.unsplash.com/photo-1473042904451-00171c69419d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80'
    },
    {
        id: 4,
        name: 'developpement',
        image: 'https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80'
    }
]

const Footer = () => {
    const [title, setTitle] = React.useState('')

    return (
        <footer className='mt-32 w-full relative flex flex-row overflow-hidden'>
            <div className='absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <span className='text-5xl font-bold uppercase'>{title}</span>
            </div>

            {specialties.map((spec) => (
                <Link className='w-full' key={spec.id} to={`/${spec.name}`}>
                    <div
                        className='relative flex-1 bg-blue transition transform hover:scale-150'
                        onMouseEnter={() => setTitle(spec.name)}
                    >
                        <div className='absolute bg-gray-50 inset-0 z-10 opacity-25' />
                        <div
                            className='w-full h-screen bg-cover bg-center bg-no-repeat'
                            style={{ backgroundImage: `url(${spec.image}) ` }}
                        />
                    </div>
                </Link>
            ))}
        </footer>
    )
}

export default Footer
