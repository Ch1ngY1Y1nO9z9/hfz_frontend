import React, { Fragment } from 'react'

import Arts from '../../components/Pages/News/Arts'

export default function Index() {
    const currentPageName = 'News'

    return (
        <Fragment>
            <Arts pageName={currentPageName} />
        </Fragment>
    )
}