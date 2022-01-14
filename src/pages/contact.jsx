import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { InlineWidget } from 'react-calendly'

const ContactPage = () => (
    <main className='md:h-screen flex flex-col-reverse md:flex-row'>
        <section className='p-6 lg:p-16 bg-blue-1000'>
            <h1 className='my-6 md:my-20 text-4xl font-bold text-white'>
                Contactez nous
            </h1>

            <div className='my-12'>
                <h3 className='text-2xl text-yellow-300 font-semibold mb-2'>
                    Adresse
                </h3>
                <p className='leading-8 text-white'>
                    828 Boulevard des Maréchaux
                    <br /> 91120 Palaiseau
                    <br /> France
                </p>
            </div>

            <div>
                <h3 className='text-2xl text-yellow-300 font-semibold mb-2'>
                    Contact
                </h3>
                <p className='leading-8 text-white'>
                    taep@ensta-paris.fr
                    <br />
                    +33 1 81 87 18 86
                </p>
            </div>

            <div className='mt-24'>
                <Link to='/'>
                    <StaticImage src='../images/logo.png' alt='TAEP' />
                </Link>
            </div>
        </section>

        <section className='flex-1 py-12 lg:p-20 flex flex-col space-y-12 justify-between items-center overflow-y-auto'>
            <div className='px-6 md:px-12'>
                <h1 className='text-4xl font-bold text-blue-1000 mb-8'>
                    Parlez nous de votre projet
                </h1>
                <form className='flex flex-col space-y-4'>
                    <input
                        className='py-2 px-4 bg-gray-50 shadow-inner border-2 border-gray-50 hover:border-yellow-300'
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Nom'
                    />
                    <input
                        className='py-2 px-4 bg-gray-50 shadow-inner border-2 border-gray-50 hover:border-yellow-300'
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                    />
                    <textarea
                        className='py-2 px-4 bg-gray-50 shadow-inner border-2 border-gray-50 hover:border-yellow-300'
                        rows={4}
                        placeholder='Décrivez votre projet'
                    />
                    <input
                        className='bg-yellow-300 text-blue-900 px-8 py-2 cursor-pointer'
                        type='submit'
                        value='Envoyer'
                    />
                </form>
            </div>

            <div className='px-6 lg:p-0 w-full max-w-xl flex flex-row space-x-8 items-center'>
                <hr className='bg-gray-300 flex-1' />
                <span className='uppercase text-gray-300'>ou</span>
                <hr className='bg-gray-300 flex-1' />
            </div>

            <div className='w-full max-w-5xl'>
                <h1 className='text-4xl text-center font-bold text-blue-1000 mb-8'>
                    Réservez un appel
                </h1>
                {/* Calendly inline widget begin */}
                <InlineWidget url='https://calendly.com/aitsidihammou-achraf' />
                {/* Calendly inline widget end */}
            </div>
        </section>
    </main>
)

export default ContactPage
