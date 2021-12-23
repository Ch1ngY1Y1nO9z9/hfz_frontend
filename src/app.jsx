import React, { Fragment } from 'react'
import Redux from 'redux'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from './components/Index'

export default function app() {



    return (
        <Fragment>
            <Nav />
            <Index />
            <Footer />
        </Fragment >
    )
}