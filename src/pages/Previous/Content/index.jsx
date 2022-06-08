import React, { Fragment } from 'react'

import Content from '../../../components/Pages/Previous/Content'

export default function Index() {
    const currentPageName = "Previous"

    return (
        <Fragment>
            <Content pageName={currentPageName} />
        </Fragment>
    )
}