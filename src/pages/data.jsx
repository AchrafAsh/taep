import * as React from 'react'
import { Page } from '../components/expertise'

const specialities = [
    {
        title: 'Développement de site/app',
        image: 'https://cdn0.iconfinder.com/data/icons/data-analytics-orchid-vol-1/256/Data_Science-512.png',
        description:
            'Développement complet de site (landing page, blog, formulaire de contacts, CMS) \nUtilisation de technologies modernes, performantes et scalables \nApplications mobiles natives Android et iOS'
    },
    {
        title: 'Amélioration d’une application existante',
        image: 'https://cdn0.iconfinder.com/data/icons/data-analytics-orchid-vol-1/256/Data_Science-512.png',
        description:
            "Correction de bugs Renouvellement visuel de l'interface utilisateur \nAmélioration des performances de chargement \nAudit sur la faisabilité et les problèmes de performances"
    },
    {
        title: 'Implémenation de fonctionnalités avancées',
        image: 'https://cdn0.iconfinder.com/data/icons/data-analytics-orchid-vol-1/256/Data_Science-512.png',
        description:
            "Système d'authentification et d'identification via un compte tiers \nImplémentation d'une interface sécurisée de paiement \nGestion de bases de données \nImplémentation de requêtes SQL avancées"
    }
]

export default function Expertise() {
    return (
        <Page
            backgroundImage='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80'
            title='Donner du sens à nos données'
            subtitle='Sous-titre / description générique avec élément correspondant à la spécialité.'
            specialities={specialities}
        >
            Hello
        </Page>
    )
}
