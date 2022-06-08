import React, { Fragment } from 'react'

// 引入組件
import Banner from '../../components/Pages/Index/Banner'
import About from '../../components/Pages/Index/About'
import News from '../../components/Pages/Index/News'
import Ranking from '../../components/Pages/Index/Ranking'
import Previous from '../../components/Pages/Index/Previous'
import ContactUs from '../../components/Pages/Index/ContactUs'

export default function Index(props) {
    const currentPageName = 'Index'

    return (
        <Fragment>
            <Banner live={props?.live} />
            <About pageName={currentPageName} />
            <News pageName={currentPageName} />
            <Ranking pageName={currentPageName} />
            <Previous pageName={currentPageName} />
            <ContactUs pageName={currentPageName} />
        </Fragment>
    )
}