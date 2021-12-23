import React, { Fragment, useState, useEffect } from 'react'

import Banner from './Banner'
import About from './About'
import News from './News'
import Ranking from './Ranking'
import Roll from './Roll'

export default function Index() {
    return (
        <Fragment>
            <Banner />
            <About />
            <News />
            <Ranking />
            <Roll />
        </Fragment >
    )
}