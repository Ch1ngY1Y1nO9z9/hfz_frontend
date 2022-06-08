import { Fragment } from 'react'

import Wrestlers from '../../components/Pages/Wrestlers/Wrestlers'

export default function Index() {
    const currentPageName = "Wrestlers"

    return (
        <Fragment>
            <Wrestlers pageName={currentPageName} />
        </Fragment>
    )
}







