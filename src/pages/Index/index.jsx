import React, { useEffect, Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
// Banner的波浪圖
import Wave from './wave.jsx';
// Previous show的套件
import Swiper from 'swiper'
// swiper core styles
import 'swiper/css'
import 'swiper/css/navigation';

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

import SwiperCore, {
    Autoplay, Navigation
} from 'swiper';





function Index(props) {
    return (
        <Fragment >
            <Banner pageName={props.pageName} />
            <About pageName={props.pageName} light={props.light} />
            <News pageName={props.pageName} light={props.light} />
            <Ranking pageName={props.pageName} light={props.light} />
            <PREVIOUS pageName={props.pageName} light={props.light} />
        </Fragment >
    )
}

function Banner(props) {
    return (
        <section className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full"
                        style={{ textShadow: "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px" }}>
                        <FormattedMessage id={`app.${props.pageName}.Welcome`} defaultMessage='welcome to HFZ' />

                    </p>
                    <h1 className="my-4 text-5xl font-bold leading-tight text-center md:text-left w-full"
                        style={{ textShadow: "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px" }}>
                        HOLOFIGHTZ
                    </h1>
                    <p className="leading-normal text-2xl mb-8 md:text-left w-full"
                        style={{ textShadow: "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px" }}>
                        <FormattedMessage id={`app.${props.pageName}.Subtitle`} defaultMessage='Professional Virtual YouTuber Wrestling' />

                    </p>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.twitch.tv/holofightz"
                        className="mx-auto lg:mx-0 hover:underline hover:bg-indigo-600 bg-indigo-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <FormattedMessage id={`app.${props.pageName}.Live`} defaultMessage='WATCH LIVE' />

                    </a>
                </div>

                <div className="w-full md:w-3/5 py-6 text-center">
                    <div className="h-auto md:h-[65vh] lg:h-[60vh]"></div>
                </div>
            </div>

            <Wave />
        </section>
    )
}

function About(props) {
    return (
        <section className={`py-8 ${props.light ? 'bg-white' : 'bg-black'}`}>
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    <FormattedMessage id={`app.${props.pageName}.About`} defaultMessage='ABOUT HOLOFIGHTZ' />
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 p-6">
                        <h3 className="text-3xl font-bold leading-none mb-3 gray_800">
                            <FormattedMessage id={`app.${props.pageName}.About.Title`} defaultMessage='Stream time' />
                        </h3>
                        <p className="text-gray-600">
                            <FormattedMessage id={`app.${props.pageName}.About.Description`} defaultMessage='Streams still random, but will most likely happen on the weekend, starting at 10am CST, or possibly later in the night, around 1am CST' />
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 px-6 py-0 md:p-6">
                        <div className="h-64" style={{ backgroundImage: "url('/images/ring.jpg')", backgroundPosition: "center", backroundSize: "cover" }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function News(props) {
    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getIndexNews`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Index')//Fetch取得資料
    }, [])

    const Today = new Date();
    const date = Today.getFullYear() + '/' + (Today.getMonth() + 1) + '/' + Today.getDate()

    return (
        <section className={`py-8 ${props.light ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    <FormattedMessage id={`app.${props.pageName}.News`} defaultMessage='FightZ News' />
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="w-full flex flex-wrap justify-center">
                    {
                        data.map((news) => {
                            return (
                                <div key={news.id} className="p-4 lg:w-1/3 w-full">
                                    <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        <h2 className="tracking-widest text-xl title-font font-medium mb-1 text-blue-400">
                                        </h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{news.title}</h1>
                                        <p className="leading-relaxed mb-3 text-gray-800">{news.description}</p>
                                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                            {
                                                date === news.date ? <span className="text-white bg-red-600 px-2 inline-flex items-center leading-none text-sm">
                                                    New!
                                                </span> : ''
                                            }
                                            <span className="mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 text-black">
                                                Date: {news.date}
                                            </span>
                                            <Link to={`/FightZNews/${news.id}`} className="hover:text-orange-600 text-indigo-500 inline-flex items-center">Learn More
                                                <i className="fas fa-arrow-right ml-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

function Ranking(props) {
    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getIndexRank`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Index')//Fetch取得資料
    }, [])

    return (
        <section className={`py-8 ${props.light ? 'bg-white' : 'bg-black'}`}>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <div className="flex flex-wrap w-full gray_800 text-gray-800">
                    {
                        data.map((profile) => {
                            return (
                                <div  key={profile.id} className="p-2 md:p-4 md:w-1/2 w-full">
                                    <div className="h-full p-8 rounded cards-bg bg-gray-100">
                                        <h1 className="w-full my-2 text-4xl md:text-5xl font-bold leading-tight" >
                                            {profile.toindex === 0 ? 'RANK LEADER': 'RISING STAR'}
                                            <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                                        </h1>
                                        <Link to={`/WrestlersProfile/${profile.name_short}`}>
                                            <img src={profile.avatar} alt={profile.name_short} />
                                            <span className="flex-grow flex flex-col ">
                                                <h4 className="md:text-3xl text-2xl font-bold leading-tight">{profile.file_list_name} @{profile.aka}</h4>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

function PREVIOUS(props) {

    const [data, setData] = useState([]) //取得頁面資料

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

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getIndexPrev`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Index')//Fetch取得資料
    }, [])



    return (
        <section className={`py-8 ${props.light ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <div className="container mx-auto px-2 pt-4 pb-12 text-white">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    PREVIOUS SHOWS
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full mx-auto my-20">
                    <div id="slider" className="swiper w-full border-2">
                        <div className="swiper-wrapper">
                            {
                                data.map((prev) => {
                                    return (
                                        <div key={prev.id} className="swiper-slide bg-cover bg-center shadow-lg"
                                            style={{ backgroundImage: `url(https://holofightz.surai.xyz${prev.background_image})` }}>
                                            <div className="container mx-auto px-6 md:px-20 py-6">
                                                <div className="w-full md:w-1/2 bg-opacity-50 bg-black p-2 md:p-0">
                                                    <div className="md:border border-gray-100 md:p-10">
                                                        <h3 className="text-2xl md:text-5xl leading-tight" style={{ fontFamily: 'Niconne, cursive' }}>{prev.date}</h3>
                                                        <h2 className="font-bold leading-tight md:text-6xl text-3xl">EP {prev.stream_number}</h2>
                                                        <h4 className="md:text-3xl text-1xl font-bold leading-tight">Watch episode {prev.stream_number} of HoloFightz:</h4>
                                                        <ul className="text-1xl mt-3 font-light">
                                                            <li>{prev.context1}</li>
                                                            <li>{prev.context2}</li>
                                                            <li>{prev.context3}</li>
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

export default connect(state => ({ light: state.light, lang: state.lang }))(Index)

