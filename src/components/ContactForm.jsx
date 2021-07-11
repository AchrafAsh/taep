import * as React from 'react'

export default function ContactForm() {
    return (
        <section className='px-6 sm:p-0 flex flex-row sm:space-x-12 max-w-3xl mx-auto my-24'>
            <div className='hidden sm:block bg-blue-1000 p-8 shadow-2xl text-white'>
                <h3 className='text-3xl font-bold mb-4'>Contactez nous</h3>
                <div className='flex flex-col space-y-4'>
                    <a target='_blank' href='mailto:taep@ensta-paris.fr'>
                        taep@ensta-paris.fr
                    </a>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/company/taep-ensta-paris/'
                    >
                        in/taep-ensta-paris
                    </a>
                </div>
            </div>

            <div className='flex-1 text-black'>
                <h2 className='text-4xl font-bold mb-8'>À votre tour</h2>
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
                        placeholder='Décrivez votre projet'
                    />
                    <input
                        className='bg-yellow-300 text-blue-900 px-8 py-2 cursor-pointer'
                        type='submit'
                        value='Envoyer'
                    />
                </form>
            </div>
        </section>
    )
}
