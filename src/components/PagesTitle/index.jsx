import React from 'react'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default function PagesTitle(props) {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full text-gray-600">
                <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                    <FormattedMessage id={`app.${props.page.pageName}.Title`} defaultMessage={props.page.title} />
                    
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    <FormattedMessage id={`app.${props.page.pageName}.Description`} defaultMessage={props.page.description} />
                    
                </p>
            </div>
        </div>
    )
}
