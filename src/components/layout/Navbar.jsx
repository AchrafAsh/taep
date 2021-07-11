import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Dropdown = ({ options, title }) => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div>
            <span
                className='select-none relative'
                onMouseEnter={() => setVisible(true)}
            >
                {title}
            </span>

            {visible && (
                <div
                    onMouseLeave={() => setVisible(false)}
                    className='absolute flex flex-col space-y-2 py-4'
                >
                    {options &&
                        options.map((option, index) => (
                            <Link key={index} to={option.link}>
                                {option.title}
                            </Link>
                        ))}
                </div>
            )}
        </div>
    )
}

export default function Navbar() {
    return (
        <nav className='p-6 flex flex-row justify-between items-center'>
            <div>
                <Link to='/'>
                    <StaticImage
                        height={60}
                        src='../images/logo.png'
                        alt='TAEP'
                        title='TAEP'
                    />
                </Link>
            </div>
            <ul className='px-12 flex flex-row space-x-6 uppercase text-white font-light'>
                <li>
                    <Dropdown
                        title='Spécialités'
                        options={[
                            { title: 'Maritime', link: '/maritime' },
                            { title: 'Data', link: '/data' },
                            { title: 'Energie', link: '/energie' },
                            { title: 'Développement', link: '/developpement' },
                            { title: 'Transport', link: '/transport' }
                        ]}
                    />
                </li>
                <li>
                    <Link to='/'>Ecosystème</Link>
                </li>
            </ul>
        </nav>
    )
}
