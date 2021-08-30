import * as React from 'react'
import ContactForm from '../ContactForm'
import { Navbar, Footer, SEO, CTAButtons } from '../layout'
import { ConsultantCard } from '.'

const Arrow = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className='hidden sm:block w-32'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1}
            d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
    </svg>
)

const Step = ({ number, title, text }) => (
    <div className='flex flex-col items-center space-y-4 text-center'>
        <span className='text-4xl flex justify-center items-center font-semibold border border-black rounded-full w-24 h-24'>
            {number}
        </span>
        <h3 className='text-2xl'>{title}</h3>
        <p>{text}</p>
    </div>
)

const CommentCaMarche = () => (
    <section className='my-24 max-w-5xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-4'>
            Comment ca marche
        </h2>
        <div className='w-full px-4 py-10 flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-8'>
            <Step
                number={1}
                title='Step 1'
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
            <Arrow />
            <Step
                number={2}
                title='Step 2'
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
            <Arrow />
            <Step
                number={3}
                title='Step 3'
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>
    </section>
)

const CaseStudy = ({ image, title, description, tag, link }) => (
    <div className='container mx-auto my-5'>
        <div className='relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl mx-2 md:h-96 lg:h-80'>
            <div className='z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg'>
                <div
                    className='absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom'
                    style={{
                        backgroundImage: `url( ${image} )`,
                        backgroundBlendMode: 'multiply'
                    }}
                />

                <div className='md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900'>
                    <h3 className='w-full font-bold text-2xl text-white leading-tight mb-2'>
                        {title}
                    </h3>
                    <span className='text-sm uppercase text-gray-100 leading-tight'>
                        {tag}
                    </span>
                </div>
                <svg
                    className='hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                >
                    <polygon points='50,0 100,0 50,100 0,100' />
                </svg>
            </div>

            <div className='z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0'>
                <div className='p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none flex flex-col'>
                    <span className='hidden md:block text-sm uppercase text-gray-400'>
                        {tag}
                    </span>
                    <h3 className='hidden md:block font-bold text-2xl text-gray-700 mb-2'>
                        {title}
                    </h3>

                    <div className='flex-1'>
                        {description.split('\n').map((text, i) => (
                            <p className='text-gray-400' key={i}>
                                {text}
                            </p>
                        ))}
                    </div>

                    <a
                        className='flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900'
                        href={link}
                    >
                        <span>En savoir plus</span>
                        <span className='text-xs ml-1'>&#x279c;</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

const Carousel = ({ children }) => {
    const slides = children.length || 1
    const [activeIndex, setActiveIndex] = React.useState(0)

    function slideBack() {
        if (activeIndex === 0) return
        setActiveIndex(activeIndex - 1)
    }

    function slideForward() {
        if (activeIndex === slides - 1) return
        setActiveIndex(activeIndex + 1)
    }

    return (
        <div className='relative'>
            {activeIndex === 0 ? null : (
                <div
                    onClick={slideBack}
                    className='absolute z-50 left-0 top-1/2 transform -translate-y-full -translate-x-1/4 bg-white rounded-full flex items-center justify-center w-8 h-8 border border-gray-100 shadow cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 transform rotate-180'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                    </svg>
                </div>
            )}
            {activeIndex === slides - 1 ? null : (
                <div
                    onClick={slideForward}
                    className='absolute z-50 right-0 top-1/2 transform -translate-y-full translate-x-1/4 bg-white rounded-full flex items-center justify-center w-8 h-8 border border-gray-100 shadow cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                    </svg>
                </div>
            )}
            {children[activeIndex]}
        </div>
    )
}

export default function Page({
    backgroundImage,
    title,
    subtitle,
    consultants,
    specialities,
    examples
}) {
    return (
        <>
            <SEO title={title} />
            <section
                className='relative bg-no-repeat bg-bottom bg-cover bg-fixed'
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div
                    style={{
                        background:
                            'linear-gradient(180deg, #34304C 15.84%, rgba(52, 48, 76, 0.558279) 72.53%, rgba(52, 48, 76, 0.173205) 94.06%, rgba(52, 48, 76, 0) 100%)'
                    }}
                >
                    <Navbar />
                    <div className='max-w-4xl mx-auto text-center px-4 py-12 sm:p-20'>
                        <h1 className='text-white mb-8'>{title}</h1>
                        <p className='text-lg text-white'>{subtitle}</p>
                        <button className='mt-8 px-8 py-4 bg-yellow-300 text-blue-900'>
                            Télécharger la plaquette
                        </button>
                    </div>
                </div>
            </section>

            <section className='my-24 max-w-5xl mx-auto'>
                <h2 className='text-4xl font-bold mb-4 text-center'>
                    Les spécialités
                </h2>
                <div className='flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-10 px-4 py-8'>
                    {specialities &&
                        specialities.map((spec, idx) => (
                            <div
                                key={idx}
                                className='flex flex-col items-center space-y-4 text-center'
                            >
                                <img
                                    src={spec.image}
                                    alt={spec.title}
                                    className='w-24 sm:w-32 h-24 sm:h-32'
                                />
                                <h4 className='font-semibold'>{spec.title}</h4>
                                <p>{spec.description}</p>
                            </div>
                        ))}
                </div>
            </section>

            <section className='my-24 max-w-5xl mx-auto'>
                <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8'>
                    <div className='max-w-md flex flex-col space-y-4 px-4'>
                        <h2 className='mb-8'>Nos consultants</h2>
                        <p>
                            L'ENSTA Paris consacre l'une des 3 majeures du
                            cursus ingénieur ENSTA à l'Informatique (filière
                            STIC) et dispense des cours de développement
                            logiciel et de systèmes d'information,
                            d'intelligence artificielle en 2ème et 3ème années.
                        </p>
                        <p>
                            L'ENSTA Paris est classée 2ème grande école
                            d'ingénieur en numérique, informatique et
                            mathématiques. (Classement Le Figaro Etudiant 2021).
                        </p>
                    </div>
                    <div className='p-4 flex-1 flex flex-row space-x-4 sm:space-x-0 overflow-x-auto sm:grid grid-cols-3 gap-4'>
                        {consultants &&
                            consultants.map((item, i) => (
                                <ConsultantCard
                                    key={i}
                                    image={item.image}
                                    name={item.name}
                                    link={item.link}
                                />
                            ))}
                    </div>
                </div>
            </section>

            <CommentCaMarche />

            <section className='my-24 max-w-5xl mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-4'>
                    Nos plus belles études
                </h2>
                <div className='px-6'>
                    {examples && examples.length > 0 && (
                        <Carousel>
                            {examples.map((example, i) => (
                                <CaseStudy
                                    key={i}
                                    image={example.image}
                                    title={example.title}
                                    description={example.description}
                                    tag={example.tag}
                                    link={example.link}
                                />
                            ))}
                        </Carousel>
                    )}
                </div>
            </section>

            <CTAButtons />
            <ContactForm />
            <Footer />
        </>
    )
}
