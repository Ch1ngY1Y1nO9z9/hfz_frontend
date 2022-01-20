import React from 'react'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default function PagesTitle(props) {
    const { light, title, pageName, description } = props.data

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full">
                <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                    <FormattedMessage id={`app.${pageName}.Title`} defaultMessage={title} />

                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    <FormattedMessage id={`app.${pageName}.Description`} defaultMessage={description} /> <br />
                    {
                        pageName === 'Profiles' && !light
                            ? <FormattedMessage id={`app.${pageName}.Description_Dark`} defaultMessage='also something "DARK" in here...' />
                            : ''
                    }
                </p>
            </div>
        </div>
    )
}
