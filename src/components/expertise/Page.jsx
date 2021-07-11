import * as React from 'react'
import ContactForm from '../ContactForm'
import { Navbar, Footer, SEO } from '../layout'
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

export default function Page({
    backgroundImage,
    title,
    subtitle,
    specialities
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
                        <h2>Nos consultants</h2>
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
                        <ConsultantCard
                            image='/demo/pg.png'
                            name='Pierre Gwenael'
                            link='https://linkedin.com'
                        />
                        <ConsultantCard
                            image='/demo/pg.png'
                            name='Pierre Gwenael'
                            link='https://linkedin.com'
                        />
                        <ConsultantCard
                            image='/demo/pg.png'
                            name='Pierre Gwenael'
                            link='https://linkedin.com'
                        />
                        <ConsultantCard
                            image='/demo/pg.png'
                            name='Pierre Gwenael'
                            link='https://linkedin.com'
                        />
                        <ConsultantCard
                            image='/demo/pg.png'
                            name='Pierre Gwenael'
                            link='https://linkedin.com'
                        />
                        <ConsultantCard
                            image='/demo/pg.png'
                            name='Pierre Gwenael'
                            link='https://linkedin.com'
                        />
                    </div>
                </div>
            </section>

            <CommentCaMarche />

            <section className='my-24 max-w-5xl mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-4'>
                    Nos plus belles études
                </h2>
                <p className='text-center'>coming soon</p>
            </section>

            <ContactForm />
            <Footer />
        </>
    )
}
