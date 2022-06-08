import React from 'react'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入redux接收狀態
import { connect } from 'react-redux'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(About)

function About(props) {
    const { pageName, light } = props

    return (
        <section className={`py-8 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    <FormattedMessage id={`app.${pageName}.About`} defaultMessage='ABOUT HOLOFIGHTZ' />
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 p-6">
                        <h3 className="text-3xl font-bold leading-none mb-3 gray_800">
                            <FormattedMessage id={`app.${pageName}.About.Title`} defaultMessage='Stream time' />
                        </h3>
                        <p className="text-gray-600">
                            <FormattedMessage id={`app.${pageName}.About.Description`} defaultMessage='Streams still random, but will most likely happen on the weekend, starting at 10am CST, or possibly later in the night, around 1am CST' />
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 px-6 py-0 md:p-6">
                        <div className="h-64" style={{ backgroundImage: "url('/images/ring.webp')", backgroundPosition: "center", backroundSize: "cover" }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
