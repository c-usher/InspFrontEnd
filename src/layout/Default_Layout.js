import React from 'react'
import { Footer } from './partials/Footer_Comp'
import { Header } from './partials/Header_Comp'

export const DefaultLayout = () => {
    return (
        <div>
            <Header />
            Main content goes here!
            <Footer />
        </div>
    )
}
