import * as React from 'react'
import { SEO, Navbar, CTAButtons } from './index'

export default function Layout({ title, children }) {
    return (
        <>
            <SEO title={title} />
            <div className='bg-blue-1000 text-white'>
                <Navbar />
                <CTAButtons />
                <main>{children}</main>
            </div>
        </>
    )
}
