import React, { useEffect, Fragment, useState, useRef } from 'react'
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
        <Fragment>
            <Banner data={props} />
            <About data={props} />
            <News data={props} />
            <Ranking data={props} />
            <PREVIOUS data={props} />
            <ContactUs data={props} />
        </Fragment >
    )
}

function Banner(props) {
    const textShadow = "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px"
    const { pageName, live } = props.data


    return (
        <section className={`pt-24 ${live ? 'text-black' : 'text-white'}`}>
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full"
                        style={{ textShadow: textShadow }}>
                        <FormattedMessage id={`app.${pageName}.Welcome`} defaultMessage='welcome to HFZ' />

                    </p>
                    <h1 className="my-4 text-5xl font-bold leading-tight text-center md:text-left w-full"
                        style={{ textShadow: textShadow }}>
                        HOLOFIGHTZ
                    </h1>
                    <p className="leading-normal text-2xl mb-8 md:text-left w-full"
                        style={{ textShadow: textShadow }}>
                        <FormattedMessage id={`app.${pageName}.Subtitle`} defaultMessage='Professional Virtual YouTuber Wrestling' />

                    </p>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.twitch.tv/holofightz"
                        className={`mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${live ? 'hover:bg-red-600 bg-red-500 animate-pulse' : 'hover:bg-indigo-600 bg-indigo-500'}`}>
                        <FormattedMessage id={live ? `app.${pageName}.Streaming` : `app.${pageName}.Live`} defaultMessage={live ? `STREAMING` : 'Watch Live'} />

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
    const { pageName, light } = props.data

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

function News(props) {
    const { pageName, light, lang: { lang } } = props.data
    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        async function getData(page) {
            try {
                const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/getIndexArts`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }
        if (!data.length) getData('Index')//Fetch取得資料
    }, [data])

    const Today = new Date();
    const date = Today.getFullYear() + '/' + (Today.getMonth() + 1) + '/' + Today.getDate()

    return (
        <section className={`py-8 ${light ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    <FormattedMessage id={`app.${pageName}.Arts`} defaultMessage='Fan arts' />
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="w-full flex flex-wrap justify-center">
                    {
                        data.map((Arts) => {
                            return (
                                <div key={Arts.id} className="p-4 lg:w-1/3 w-full">
                                    <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        <h2 className="tracking-widest text-xl title-font font-medium mb-1 text-blue-400">
                                        </h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                            {Arts.title}
                                        </h1>
                                        <img className="mx-auto" height='150px' src={Arts.thumbnail} alt="" />
                                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                            {
                                                date === Arts.date ? <span className="text-white bg-red-600 px-2 inline-flex items-center leading-none text-sm">
                                                    New!
                                                </span> : ''
                                            }
                                            <span className="mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 text-black">
                                                Date: {Arts.date}
                                            </span>
                                            <Link to={`/${lang}/Arts/${Arts.id}`} className="hover:text-orange-600 text-indigo-500 inline-flex items-center">
                                                <FormattedMessage id={`app.${pageName}.ReadMore`} defaultMessage='Read More' />
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
    const { pageName, light, lang: { lang } } = props.data
    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        async function getData(page) {
            try {
                const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/getIndexRank`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        if (!data.length) getData('Index')//Fetch取得資料
    }, [data])

    return (
        <section className={`py-8 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <div className="flex flex-wrap w-full gray_800 text-gray-800">
                    {
                        data.map((profile) => {
                            return (
                                <div key={profile.id} className="p-2 md:p-4 md:w-1/2 w-full">
                                    <div className="h-full p-8 rounded cards-bg bg-gray-100">
                                        <h1 className="w-full my-2 text-4xl md:text-5xl font-bold leading-tight" >
                                            {profile.toindex === 0
                                                ? <FormattedMessage id={`app.${pageName}.Rank`} defaultMessage='RANK LEADER' />
                                                : <FormattedMessage id={`app.${pageName}.Star`} defaultMessage='RISING STAR' />}
                                            <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                                        </h1>
                                        <Link to={`/${lang}/Wrestlers/Profile/${profile.name_short}`}>
                                            <img src={profile.avatar} alt={profile.name_short} />
                                            <span className="flex-grow flex flex-col ">
                                                <h4 className="md:text-3xl text-2xl font-bold leading-tight">
                                                    <FormattedMessage id={`app.Characters.${profile.name_short}`} defaultMessage={`${profile.file_list_name}`} /> @{profile.aka}</h4>
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
    const { pageName, light } = props.data
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
                const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/getIndexPrev`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        if (!data.length) getData('Index')//Fetch取得資料
    }, [data])



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
                            {
                                data.map((prev) => {
                                    return (
                                        <div key={prev.id} className="swiper-slide bg-cover bg-center shadow-lg"
                                            style={{ backgroundImage: `url(https://hfzapi.surai.xyz/${prev.background_image})` }}>
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

function ContactUs(props) {
    const { lang, light } = props.data

    const nameInput = useRef('')

    const emailInput = useRef('')

    const contentInput = useRef('')

    window.dataLayer = window.dataLayer || [];

    function gtag(){window.dataLayer.push(arguments);}

    gtag('js', new Date());

    gtag('config', 'G-2X8NTS7JM2');

    function ContactSubmit()
    {
        const name = nameInput.current.value
        const email = emailInput.current.value
        const content = contentInput.current.value

        if (!name) {
            nameInput.current.focus()
            return false
        }
        else if (!email) {
            emailInput.current.focus()
            return false
        }else if (!content) {
            contentInput.current.focus()
            return false
        }

        // 檢查email是否格式正確
        if(email.indexOf('@') === -1){
            alert('please enter correct email address format')
        }

        const data = {
            name,
            email,
            content
        }

        fetch('https://hfzapi.surai.xyz/api/Index/contact', {
            method: "POST",
            body: JSON.stringify(data),
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'cors'
        })
        .catch(error => {
            console.log('error:', error)
        })
        .then(res => res.json())
        .then(res => {
            nameInput.current.value = 'anons'
            emailInput.current.value = ''
            contentInput.current.value = ''

            alert(res)
        })

    }

    function checkInput() {
        nameInput.current.value = nameInput.current.value.replace(/\s+/g, '')
        emailInput.current.value = emailInput.current.value.replace(/\s+/g, '')
    }

    return (
        <section id="Contact" className="text-center py-6">
            <div className="container px-5 py-12 md:py-24 mx-auto">
                <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-white`}>
                    Contact Us
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <h3 className={`my-4 text-3xl leading-tight text-white`}>
                    If you have any match idea or fan art, even promote<br />
                    We're all welcome you sent the link to us.
                </h3>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div id="ContactForm">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                                    <input ref={nameInput} onChange={()=> checkInput()} type="text" id="name" name="name" defaultValue={'anons'} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                    <input ref={emailInput} onChange={()=> checkInput()} type="email" id="email" name="email" placeholder="if you want us send message back..." className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                                    <textarea ref={contentInput} id="message" name="content" maxLength="300" placeholder="paste any OC video link, fan arts, match suggest to us" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                                <input type="hidden" value="" name="recaptcha_response" id="recaptchaResponse" />
                            <div className="p-2 w-full">
                                <button onClick={()=> ContactSubmit()} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Index)