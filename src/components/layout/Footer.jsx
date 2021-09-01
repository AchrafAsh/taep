import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Footer = () => {
    const [title, setTitle] = React.useState('')

    const { pages } = useStaticQuery(graphql`
        query {
            pages: allContentfulExpertise(
                filter: { node_locale: { eq: "en-US" } }
            ) {
                edges {
                    node {
                        backgroundImage {
                            gatsbyImageData(
                                height: 2000
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                            )
                        }
                        name
                    }
                }
            }
        }
    `)

    return (
        <footer className='mt-32 w-full relative flex flex-row overflow-hidden'>
            <div className='hidden sm:block absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <span
                    className='text-5xl font-bold uppercase text-white'
                    style={{ textShadow: '0px 0px 3px white' }}
                >
                    {title}
                </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row'>
                {pages.edges.map(({ node }, index) => (
                    // <Link className='w-full' key={spec.id} to={`/${spec.name}`}>
                    //     <div
                    //         className='relative flex-1 bg-blue transition sm:transform hover:scale-150'
                    //         onMouseEnter={() => setTitle(spec.name)}
                    //     >
                    //         <div className='absolute bg-gray-50 inset-0 z-10 opacity-25' />
                    //         <div
                    //             className='w-full h-40 sm:h-screen bg-cover bg-center bg-no-repeat'
                    //             style={{
                    //                 backgroundImage: `url(${spec.image}) `
                    //             }}
                    //         />
                    //         <div
                    //             style={{ textShadow: '0px 0px 2px white' }}
                    //             className='p-4 absolute inset-0 z-20 font-bold text-white text-3xl uppercase sm:hidden'
                    //         >
                    //             {spec.name}
                    //         </div>
                    //     </div>
                    // </Link>
                    <Fold
                        key={index}
                        backgroundImage={node.backgroundImage}
                        name={node.name}
                        setTitle={setTitle}
                    />
                ))}
            </div>
        </footer>
    )
}

const Fold = ({ backgroundImage, name, setTitle }) => {
    backgroundImage = getImage(backgroundImage)
    return (
        <Link className='w-full' to={`/${name}`}>
            <div
                className='relative flex-1 bg-blue transition sm:transform hover:scale-150'
                onMouseEnter={() => setTitle(name)}
            >
                <div className='absolute bg-gray-50 inset-0 z-10 opacity-25' />
                <div
                    className='w-full h-40 sm:h-screen'
                    // style={{
                    //     backgroundImage: `url(${spec.image}) `
                    // }}
                >
                    <GatsbyImage
                        image={backgroundImage}
                        title={name}
                        alt={name}
                        className='w-full h-full'
                    />
                </div>
                <div
                    style={{ textShadow: '0px 0px 2px white' }}
                    className='p-4 absolute inset-0 z-20 font-bold text-white text-3xl uppercase sm:hidden'
                >
                    {name}
                </div>
            </div>
        </Link>
    )
}

export default Footer
