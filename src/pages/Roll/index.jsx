import React, { useEffect, useState, Suspense, useRef } from 'react'
import PagesTitle from '../../components/PagesTitle'

// 引入redux接收狀態
import { connect } from 'react-redux'
// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

function Roll(props) {
    const { lang: { lang }, pageName, light } = props

    const [data, setData] = useState([]);
    
    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'ROLL TO WIN', description: 'Roll to get some good item or amazing wrestlers in RRAT:OGEY LEGEND!!', pageName, light }} />

            <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                <div className="flex flex-col text-center w-full mb-10 text-gray-600">
                    <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">

                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">

                    </p>
                </div>
                <div className="w-full mx-auto overflow-auto" style={{ backgroundImage: "url('https://i.imgur.com/VOuh5o0.jpg')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="h-96"></div>
                </div>
                <div className="flex flex-col text-center w-full text-gray-600">
                    <h1 className="text-3xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                        <FormattedMessage id={`app.${props.pageName}.RRAT`} defaultMessage='RRAT' />
                        :
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
                        <b className="text-[#49c8f0]">
                            <FormattedMessage id={`app.${props.pageName}.Rare`} defaultMessage='Rare' />: 90%
                        </b>
                        <br />
                        <b className="text-blue-500">
                            <FormattedMessage id={`app.${props.pageName}.SR`} defaultMessage='SR' />: 8%
                        </b>
                        <br />
                        <b className="text-red-500">
                            <FormattedMessage id={`app.${props.pageName}.SSR`} defaultMessage='SSR' />: 1.9%
                        </b>
                        <br />
                        <b className="text-yellow-500">
                            <FormattedMessage id={`app.${props.pageName}.LEGEND`} defaultMessage='LEGEND' />: 0.1%
                        </b>
                        <br />
                    </p>
                </div>
                <button id="roll_btn" className="flex mx-auto my-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <FormattedMessage id={`app.${props.pageName}.RollBTN`} defaultMessage='ROLL' />   
                </button>

                <div id="res_all" x-show="show" className="flex flex-col text-center w-full text-gray-600">
                    <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold">
                        <FormattedMessage id={`app.${props.pageName}.Reward`} defaultMessage='You got...' />
                    </h1>
                    <h2 id="result_item" className="text-4xl font-medium title-font mb-1 tracking-widest font-bold text-[#49c8f0]">

                    </h2>
                </div>

                <div x-show="show" id="result_pic" className="w-full mx-auto overflow-auto">
                    <img src="" alt="" className="mx-auto" />
                </div>

                <div id="res_content" x-show="show" className="flex flex-col text-center w-full mb-10 text-gray-600">
                    <h1 id="rare" className="text-5xl font-medium title-font mb-4 tracking-widest font-bold">

                    </h1>
                    <p id="result_intro" className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">

                    </p>
                </div>

                <div id="promocode_form" className="flex flex-col text-center w-full my-10 text-gray-600">
                    <h1 className="text-5xl font-medium title-font tracking-widest font-bold">
                        <FormattedMessage id={`app.${props.pageName}.PromoCode`} defaultMessage='Promo code' />
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl mb-4">
                        <FormattedMessage id={`app.${props.pageName}.CodeDescription`} defaultMessage='Have a promo code? Use the promo code to get 1 free roll!' />
                    </p>

                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="code" className="leading-7 text-xl text-gray-600">
                                        <FormattedMessage id={`app.${props.pageName}.PromoCodeInput`} defaultMessage='Promo code' />:
                                    </label>
                                    <br />
                                    <input type="text" id="code" name="code" value="#" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        <FormattedMessage id={`app.${props.pageName}.Send`} defaultMessage='Send' />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="rolling_animation" hidden>
                        <img width="100%" height="100%" src="" alt="transition" />
                    </div>
                    <div className="prelaod" hidden>
                        <img src="https://i.imgur.com/cXwbpQG.gif" alt="preload" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Roll)
