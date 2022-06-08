import { Fragment } from 'react'

import Profiles from '../../../components/Pages/Wrestlers/Profiles'

export default function Index() {
    const currentPageName = "Detail"

    return (
        <Fragment>
            <Profiles pageName={currentPageName} />
        </Fragment>
    )
}