import React, { useEffect } from 'react'

// Previous show的套件
import Swiper from 'swiper'
// swiper core styles
import '/node_modules/swiper/swiper.min.css'
import '/node_modules/swiper/swiper-bundle.min.css';

import SwiperCore, {
    Autoplay, Navigation
} from 'swiper';

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 讀取動畫樣板
import Loading from '../../Loading'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'

// 引入redux接收狀態
import { connect } from 'react-redux'


export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Previous)

function Previous(props) {
    const { pageName, light } = props

    useEffect(() => {

        // 初始化Swiper
        SwiperCore.use([Autoplay, Navigation]);

        new Swiper('#slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoHeight: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }, [])

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: '/api/Index/getIndexPrev',
        requestConfig: {
            data: {}
        }
    })



    return (
        <section className={`py-8 ${light ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <div className="container mx-auto px-2 pt-4 pb-12 text-white">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    <FormattedMessage id={`app.${pageName}.Previous`} defaultMessage={`PREVIOUS SHOWS`} />

                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full mx-auto my-20">
                    <div id="slider" className="swiper w-full border-2">
                        <div className="swiper-wrapper">
                            {loading && <Loading />}
                            {
                                !loading && !error && data && data?.map((prev) => {
                                    return (
                                        <div key={prev.id} className="swiper-slide bg-cover bg-center shadow-lg"
                                            style={{ backgroundImage: `url(http://127.0.0.1:8000${prev.background_image})` }}>
                                            <div className="container mx-auto px-6 md:px-20 py-6">
                                                <div className="w-full md:w-1/2 bg-opacity-50 bg-black p-2 md:p-0">
                                                    <div className="md:border border-gray-100 md:p-10">
                                                        <h3 className="text-2xl md:text-5xl leading-tight" style={{ fontFamily: 'Niconne, cursive' }}>{prev.date}</h3>
                                                        <h2 className="font-bold leading-tight md:text-6xl text-3xl">EP {prev.stream_number}</h2>
                                                        <h4 className="md:text-3xl text-1xl font-bold leading-tight">
                                                            <FormattedMessage id={`app.Previous.Archive.${prev.stream_number}`} defaultMessage={`Watch episode ${prev.stream_number} of HoloFightz:`} />
                                                        </h4>
                                                        <ul className="text-1xl mt-3 font-light">
                                                            <li>
                                                                <FormattedMessage id={`app.Previous.Archive.Context1.${prev.stream_number}`} defaultMessage={prev.context1} />
                                                            </li>
                                                            <li>
                                                                <FormattedMessage id={`app.Previous.Archive.Context2.${prev.stream_number}`} defaultMessage={prev.context2} />
                                                            </li>
                                                            <li>
                                                                <FormattedMessage id={`app.Previous.Archive.Context3.${prev.stream_number}`} defaultMessage={prev.context3} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="my-10 md:mx-10 md:-mt-2">
                                                        {
                                                            prev.link === null ? <span className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">
                                                                <FormattedMessage id={`app.Index.Uploading`} defaultMessage='UPLOADING...' />
                                                            </span> : <a rel="noreferrer" target="_blank" href={prev.link} className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">
                                                                <FormattedMessage id={`app.Index.Watch`} defaultMessage='WATCH ARCHIVE' />
                                                            </a>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="hidden md:flex swiper-button-prev !text-indigo-500"></div>
                        <div className="hidden md:flex swiper-button-next !text-indigo-500"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

