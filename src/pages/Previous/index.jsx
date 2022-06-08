import React, { Fragment } from 'react'

import Previous from '../../components/Pages/Previous/Previous'

export default function Index() {
    const currentPageName = "Previous"

    return (
        <Fragment>
            <Previous pageName={currentPageName} />
        </Fragment>
    )
}