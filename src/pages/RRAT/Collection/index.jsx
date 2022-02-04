import React, { useEffect, useState, Suspense, useRef } from 'react'
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

// Swiper的套件
import { Swiper, SwiperSlide } from "swiper/react";
// swiper core styles
import 'swiper/css'
import 'swiper/css/navigation';

import { Lazy } from "swiper";


import PagesTitle from '../../../components/PagesTitle'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 紀錄與查看登入狀態
import { ChangeStatus } from '../../../redux/actions/user'

function Collection(props) {
    const { lang: { lang }, setUserAccount } = props

    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        // 檢查是否有登入過
        const isLogin = JSON.parse(sessionStorage.getItem('account'))

        if (isLogin) {
            // 刷新卡片和手指數
            fetch(`http://127.0.0.1:8000/api/ColllectionBook/${isLogin.user_name}`, { method: "post" })
                .then((res) => res.json())
                .then((res) => {

                    // 取得卡片資訊
                    setData(res)

                    // 更新登入狀態
                    sessionStorage.clear()
                    sessionStorage.setItem('account', JSON.stringify(isLogin))
                    setUserAccount(isLogin)
                    setisLoading(0)
                })
        }

        if (!isLogin) {
            navigate(`/${lang}/RROL/main`)
        }
    }, [])

    return (

        isLoading
            ? <Loading />
            : <Book data={{ ...props, data }} />
    )
}


function Book(props) {
    const { lang: { lang }, pageName, light, user, data } = props.data

    const { rare, SR, SSR, LEGEND } = data

    console.log(data)

    const navigate = useNavigate()

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                <div onClick={() => { navigate(`/${lang}/RROL/main`) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.${pageName}.Back`} defaultMessage='Back to Main menu' />
                </div>
            </div>
            <PagesTitle data={{ title: 'Collection Book', description: 'you can check all cards or item you got in here.', pageName, light }} />
            <div className="flex flex-col text-center w-full">
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
                    USER: {user.user_name}
                </p>
            </div>
            <div className="w-full text-center p-24">
                <h3 id="rare" className={`text-2xl font-medium title-font tracking-widest font-bold`}>
                    Rare  ({rare.length}/50)
                </h3>
                {
                    rare.length === 0
                        ? <div className='text-3xl font-medium title-font tracking-widest font-bold' >You don't have any rare card :|</div>
                        : <Swiper lazy={true} slidesPerView={1} breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }} modules={[Lazy]} className="rare">
                            {
                                rare.map((card) => {
                                    return (
                                        <SwiperSlide key={card.id}>
                                            <img alt={card.name} data-src={card.img} className="swiper-lazy" />
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                }

                {/* <h3 id="rare" className={`text-2xl font-medium title-font tracking-widest font-bold ${getCards[0].rare === 'SR' ? 'text-yellow-500' : getCards[0].rare === 'SSR' ? 'text-red-500' : getCards[0].rare === 'LEGEND' ? 'text-orange-500' : ''}`}>
                {getCards[0].rare}
            </h3> */}

                <h3 id="SR" className={`text-2xl font-medium title-font tracking-widest font-bold text-yellow-500 mt-10`}>
                    SR ({SR.length}/29)
                </h3>
                {
                    SR.length === 0
                        ? <div className='text-3xl font-medium title-font tracking-widest font-bold' >You don't have any SR card :|</div>
                        : <Swiper lazy={true} slidesPerView={1} breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }} modules={[Lazy]} className="SR">
                            {
                                SR.map((card) => {
                                    return (
                                        <SwiperSlide key={card.id} className="overflow-hidden">
                                            <img alt={card.name} data-src={card.img} className="mx-auto swiper-lazy max-w-none h-[500px]" />
                                            <h2 id="result_item" className={`text-3xl font-medium title-font mb-1 tracking-widest font-bold text-[#49c8f0] `}>
                                                {card.name}
                                            </h2>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                }

                <h3 id="SSR" className={`text-2xl font-medium title-font tracking-widest font-bold text-yellow-500 mt-10`}>
                    SSR ({SSR.length}/16)
                </h3>
                {
                    SSR.length === 0
                        ? <div className='text-3xl font-medium title-font tracking-widest font-bold' >You don't have any SSR card ;(</div>
                        : <Swiper lazy={true} slidesPerView={1} breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }} modules={[Lazy]} className="SSR">
                            {
                                SSR.map((card) => {
                                    return (
                                        <SwiperSlide key={card.id} className="overflow-hidden">
                                            <img alt={card.name} data-src={card.img} className="mx-auto swiper-lazy max-w-none h-[500px]" />
                                            <h2 id="result_item" className={`text-3xl font-medium title-font mb-1 tracking-widest font-bold text-red-500`}>
                                                {card.name}
                                            </h2>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                }

                <h3 id="LEGEND" className={`text-2xl font-medium title-font tracking-widest font-bold text-yellow-500 mt-10`}>
                    LEGEND ({LEGEND.length}/5)
                </h3>
                {
                    LEGEND.length === 0
                        ? <div className='text-3xl font-medium title-font tracking-widest font-bold' >You don't have any LEGEND card ;(</div>
                        : <Swiper lazy={true} slidesPerView={1} breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }} modules={[Lazy]} className="LEGEND">
                            {
                                LEGEND.map((card) => {
                                    return (
                                        <SwiperSlide key={card.id} className="overflow-hidden">
                                            <img alt={card.name} data-src={card.img} className="mx-auto swiper-lazy max-w-none h-[500px]" />
                                            <h2 id="result_item" className={`text-3xl font-medium title-font mb-1 tracking-widest font-bold text-red-500`}>
                                                {card.name}
                                            </h2>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                }
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang, user: state.user }),
    { setUserAccount: ChangeStatus })(Collection)
