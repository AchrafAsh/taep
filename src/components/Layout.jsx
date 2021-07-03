import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Navbar = () => (
    <nav className='p-6 flex flex-row justify-between items-center'>
        <div>
            <StaticImage
                height={60}
                src='../images/logo.png'
                alt='TAEP'
                title='TAEP'
            />
        </div>
        <ul className='px-12 flex flex-row space-x-6 uppercase text-white font-light'>
            <li>
                <Link to='/'>Spécialités</Link>
            </li>
            <li>
                <Link to='/'>Ecosystème</Link>
            </li>
        </ul>
    </nav>
)

const Button = ({ text, svg }) => {
    const [isRevealed, setIsRevealed] = React.useState(false)

    function toggleReveal() {
        setIsRevealed((prev) => !prev)
    }

    return (
        <button
            onMouseEnter={toggleReveal}
            onMouseLeave={toggleReveal}
            className='p-4 bg-gray-100 rounded flex flex-row space-x-4'
        >
            {isRevealed ? <span className=''>{text}</span> : null}
            <div>{svg}</div>
        </button>
    )
}

const CTAButtons = () => (
    <nav className='fixed right-0 top-1/2 text-black p-4 flex flex-col items-end space-y-4'>
        <Button
            svg={
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                </svg>
            }
            text='Parler avec un administrateur'
        />
        <Button
            svg={
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z'
                    />
                </svg>
            }
            text='Présenter mon projet'
        />
    </nav>
)

export default ({ children }) => {
    return (
        <div className='bg-blue-900 text-white'>
            <Navbar />
            <CTAButtons />
            <main className=''>{children}</main>
        </div>
    )
}
