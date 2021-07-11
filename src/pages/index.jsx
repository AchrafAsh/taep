import * as React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Card from '../components/home/Card'

const HeroSection = () => (
    <section className='text-center flex flex-col space-y-12 items-center p-20 max-w-5xl mx-auto'>
        <h1 className='text-5xl font-medium'>
            L’Excellence Académique de l’ENSTA Paris au service des entreprise
        </h1>
        <p className='text-xl font-light'>
            Un réseau de +300 étudiants brillants et dynamiques pour vous
            accompagner dans tous vos projets autour du secteur Naval.
        </p>
        <Link to='/contact'>
            <button className='mt-8 px-8 py-4 bg-yellow-300 text-blue-900'>
                Présenter mon projet
            </button>
        </Link>
    </section>
)

const BrandWall = () => (
    <section className='p-12 text-center flex flex-col space-y-4 max-w-5xl mx-auto'>
        <h2 className='my-8 text-4xl font-medium text-gray-400'>
            Les entreprises que nous avons déjà accompagnées
        </h2>
        <div>
            <StaticImage src='../images/brand_wall.png' />
        </div>
    </section>
)

const ContactSection = () => (
    <section className='flex flex-row space-x-12 max-w-3xl mx-auto my-24'>
        <div className='bg-blue-1000 p-8 shadow-2xl'>
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

const DemoSection = () => (
    <section className='my-24 max-w-5xl mx-auto'>
        <div className='py-24 flex flex-col space-y-60'>
            <Card
                number={1}
                image='/demo/altaventure.png'
                title='Votre projet'
                text='“ Dans le cadre de l’accompagnement d’un client sur un de ses projets nous avions besoin de développer un modèle  d’architecture naval  pour la consommation d’énergie. Nous avons donc fait appel au savoir-faire des élèves de l’ENSTA Paris.“'
            />
            <Card
                right
                number={2}
                image='/demo/pg.png'
                title='Le consultant idéal'
                text='Fort d’une césure chez Naval-Group, Pierre-Gwenäel connait parfaitement la culture du maritime. Il avait donc les ressources intellectuels et humaines pour accompagner notre client.'
            />
            <Card
                number={3}
                image='/demo/taep_team.png'
                title='Un Chef de Projet qui vous accompagne'
                text='Le rôle de notre chef de projet est de définir à vos côtés la méthodologie projet qui vous convient le mieux. De plus, il s’assurera que notre préstation réponde à vos besoins et vos exigences. C’est votre interlocuteur privilégié.'
            />
            <Card
                right
                number={4}
                image='/demo/eric_pilat.png'
                title='Votre satisfaction'
                text='“ L’équipe de TAEP a su répondre à mon besoin. Ils ont étaient réactif du début à la fin et ont fait preuves d’initiatives pour surmonter les obstacles que nous avons rencontrés.”'
            />
        </div>
    </section>
)

const IndexPage = () => {
    return (
        <Layout>
            <HeroSection />
            <div className='bg-white'>
                <BrandWall />
                <DemoSection />
                <ContactSection />
                <Footer />
            </div>
        </Layout>
    )
}

export default IndexPage
