import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Dropdown = ({ options, title }) => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div className='cursor-pointer'>
            <span
                className='select-none relative'
                onMouseEnter={() => setVisible(true)}
            >
                {title}
            </span>

            {visible && (
                <div
                    onMouseLeave={() => setVisible(false)}
                    className='absolute flex flex-col mt-2 py-1 rounded shadow-xl bg-white'
                >
                    {options &&
                        options.map((option, index) => (
                            <Link
                                key={index}
                                to={option.link}
                                className='py-2 px-4 hover:bg-gray-100 text-black font-light'
                            >
                                {option.title}
                            </Link>
                        ))}
                </div>
            )}
        </div>
    )
}

export default function Navbar() {
    const { pages } = useStaticQuery(graphql`
        query {
            pages: allContentfulExpertise {
                distinct(field: name)
            }
        }
    `)

    return (
        <nav className='p-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between items-center'>
            <div>
                <Link to='/'>
                    <StaticImage
                        height={60}
                        src='../../images/logo.png'
                        alt='TAEP'
                        title='TAEP'
                        placeholder='blurred'
                    />
                </Link>
            </div>
            <ul className='px-12 flex flex-row space-x-6 uppercase text-black font-light'>
                <li>
                    <Dropdown
                        title='Sp??cialit??s'
                        options={pages.distinct.map((name) => ({
                            title: capitalize(name),
                            link: `/${name.toLowerCase()}`
                        }))}
                    />
                </li>
                {/* <li>
                    <Link to='/ecosysteme'>Ecosyst??me</Link>
                </li> */}
            </ul>
        </nav>
    )
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}
