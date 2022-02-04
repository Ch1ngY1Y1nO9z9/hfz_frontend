import React, { useEffect, useState, Suspense, useRef } from 'react'
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import PagesTitle from '../../../components/PagesTitle'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 紀錄與查看登入狀態
import { ChangeStatus } from '../../../redux/actions/user'

function Roll(props) {
    const { lang: { lang }, user, setUserAccount } = props

    const [isLoading, setisLoading] = useState(1)
    const [getResult, setResult] = useState(false)

    // 紀錄抽卡結果
    const [getCards, setCards] = useState([])
    const [getOldCards, setOldCards] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        document.documentElement.scrollTop = 0;


        // 檢查是否有登入過
        const isLogin = JSON.parse(sessionStorage.getItem('account'))

        if (isLogin) {
            // 刷新卡片和手指數
            fetch(`http://127.0.0.1:8000/api/checkUserYubis/${isLogin.user_name}`, { method: "post" })
                .then((res) => res.json())
                .then((res) => {

                    // 取得狀態
                    isLogin.cards = JSON.parse(res.cards);
                    isLogin.yubis = res.yubis;
                    // 更新狀態
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
            : <Gacha data={{ ...props, getResult, getCards, getOldCards }} allFunctions={{ setResult, setOldCards, setCards, setUserAccount }} />
    )
}


function Gacha(props) {
    const { lang: { lang }, pageName, light, user, getResult } = props.data
    const { setResult, setOldCards, setCards, setUserAccount } = props.allFunctions

    const navigate = useNavigate()

    function pullOne() {

        confirmAlert({
            title: '1x Gacha',
            message: 'this will cost you 5 yubis',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => pullAnimation(5)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    function pullTen() {

        confirmAlert({
            title: '10x Gacha',
            message: 'this will cost you 50 yubis',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => pullAnimation(50)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    function pullAnimation(yubis) {
        const animationGif = document.getElementById('rolling_animation')


        // 前端檢查是否足夠手指
        if (user.yubis < yubis) {
            alert("you don't have enough yubis!")
            return false
        } else {
            user.yubis -= yubis
            setUserAccount(user)
            animationGif.classList.remove('hidden')
            fetch(`http://127.0.0.1:8000/api/roll/${user.user_name}/${yubis}`, { method: "post" })
                .then((res) => res.json())
                .then((res) => {
                    setTimeout(() => {
                        animationGif.classList.add('hidden')
                    }, 3000)

                    if (res === 'not enough') {
                        alert("you don't have enough yubis!")
                        return false
                    }
                    if (res === 'error') {
                        alert('something went wrong! please try it later')
                        return false
                    }

                    // 取得抽卡結果轉換樣板
                    setOldCards(res.old_cards)
                    setCards(res.cards.detail)
                    setResult(true)
                })
        }
    }

    return (
        getResult
            ? <Result data={{ ...props.data }} allFunctions={{ setResult, setOldCards, setCards, setUserAccount }} />
            : <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
                <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                    <div onClick={() => { navigate(`/${lang}/RROL/main`) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                        <i className="fas fa-arrow-left"></i>
                        <FormattedMessage id={`app.${pageName}.Back`} defaultMessage='Back to Main menu' />
                    </div>
                </div>
                <PagesTitle data={{ title: 'ROLL TO WIN', description: 'Give me some yubis and you will get some good item or amazing wrestlers in RRAT:OGEY LEGEND!!', pageName, light }} />

                <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                    <div className="w-full mx-auto overflow-auto" style={{ backgroundImage: "url('https://i.imgur.com/VOuh5o0.jpg')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className="h-96"></div>
                    </div>
                    <div className="flex flex-col text-center w-full text-gray-600 py-5">
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
                    <div className="text-center w-full font-bold text-xl">
                        you have <span className='text-green-500 underline'>{user.yubis}</span> yubis
                    </div>
                    <div className="flex w-full justify-center">
                        <button id="onetime_btn" className={`mr-5 my-10 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg ${user.yubis >= 5 ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-500 hover:bg-gray-600'}`} onClick={() => { pullOne() }}>
                            <FormattedMessage id={`app.${props.pageName}.RollBTN`} defaultMessage='1x Gacha' />
                        </button>
                        <button id="tentimes_btn" className={`ml-5 my-10 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg ${user.yubis >= 50 ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'} `} onClick={() => { pullTen() }}>
                            <FormattedMessage id={`app.${props.pageName}.RollBTN`} defaultMessage='10x Gacha' />
                        </button>
                    </div>
                    {/* <div id="promocode_form" className="flex flex-col text-center w-full my-10 text-gray-600">
                        <h1 className="text-5xl font-medium title-font tracking-widest font-bold">
                            <FormattedMessage id={`app.${props.pageName}.PromoCode`} defaultMessage='Promo code' />
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl mb-4">
                            <FormattedMessage id={`app.${props.pageName}.CodeDescription`} defaultMessage='Have a promo code? Use the promo code to get some good stuff!' />
                        </p>

                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="code" className="leading-7 text-xl text-gray-600">
                                            <FormattedMessage id={`app.${props.pageName}.PromoCodeInput`} defaultMessage='Promo code' />:
                                        </label>
                                        <br />
                                        <input type="text" id="code" name="code" defaultValue="#" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            <FormattedMessage id={`app.${props.pageName}.Send`} defaultMessage='Send' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div id="rolling_animation" className={`w-screen h-screen fixed top-0 left-0 z-50 hidden`}>
                        <img width="100%" height="100%" src="https://i.imgur.com/cXwbpQG.gif" alt="transition" />
                    </div>
                    <div className="prelaod" hidden>
                        <img src="https://i.imgur.com/cXwbpQG.gif" alt="preload" />
                    </div>
                </div>
            </section>
    )
}

function Result(props) {
    const { lang: { lang }, pageName, light, user, getResult, getOldCards, getCards } = props.data
    const { setResult, setOldCards, setCards, setUserAccount } = props.allFunctions

    const navigate = useNavigate()

    function pullOne() {

        confirmAlert({
            title: '1x Gacha',
            message: 'this will cost you 5 yubis',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => pullAnimation(5)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    function pullTen() {

        confirmAlert({
            title: '10x Gacha',
            message: 'this will cost you 50 yubis',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => pullAnimation(50)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    function pullAnimation(yubis) {
        const animationGif = document.getElementById('rolling_animation')


        // 前端檢查是否足夠手指
        if (user.yubis < yubis) {
            alert("you don't have enough yubis!")
            return false
        } else {
            user.yubis -= yubis
            setUserAccount(user)
            animationGif.classList.remove('hidden')
            fetch(`http://127.0.0.1:8000/api/roll/${user.user_name}/${yubis}`, { method: "post" })
                .then((res) => res.json())
                .then((res) => {
                    setTimeout(() => {
                        animationGif.classList.add('hidden')
                    }, 3000)

                    if (res === 'not enough') {
                        alert("you don't have enough yubis!")
                        return false
                    }
                    if (res === 'error') {
                        alert('something went wrong! please try it later')
                        return false
                    }

                    // 取得抽卡結果轉換樣板
                    setOldCards(res.old_cards)
                    setCards(res.cards.detail)
                    setResult(true)
                    document.documentElement.scrollTop = 0;

                })
        }
    }

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                <div onClick={() => { navigate(`/${lang}/RROL/main`) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.${pageName}.Back`} defaultMessage='Back to Main menu' />
                </div>
            </div>
            <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                <div id="res_all" className="flex flex-col text-center w-full text-gray-600">
                    <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold">
                        <FormattedMessage id={`app.${props.pageName}.Reward`} defaultMessage='You got...' />
                    </h1>
                    {
                        getCards.length === 1
                            ?
                            <div className="w-full">
                                <div id="result_pic" className="flex justify-center w-full mx-auto overflow-hidden h-[500px]">
                                    <img src={getCards[0].img} alt={getCards[0].name} className="h-full mx-auto transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 mx-auto" />
                                </div>

                                <div id="res_content" className="flex flex-col text-center w-full mb-10 text-gray-600">
                                    <h1 id="rare" className={`text-2xl font-medium title-font tracking-widest font-bold ${getCards[0].rare === 'SR' ? 'text-yellow-500' : getCards[0].rare === 'SSR' ? 'text-red-500' : getCards[0].rare === 'LEGEND' ? 'text-orange-500' : ''}`}>
                                        {getCards[0].rare}
                                    </h1>
                                    <h2 id="result_item" className={`text-3xl font-medium title-font mb-1 tracking-widest font-bold ${getCards[0].rare === 'SSR' ? 'text-red-500' : getCards[0].rare === 'LEGEND' ? 'text-orange-500' : 'text-[#49c8f0]'}`}>
                                        {getCards[0].name}
                                    </h2>
                                    <p id="result_intro" className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
                                        {getCards[0].intro}
                                    </p>
                                </div>
                            </div>

                            : <div className="flex flex-wrap">
                                {
                                    getCards.map((cards,index) => {
                                        return (
                                            <div key={index} className="flex-initial w-1/5 px-5 pb-5 group">
                                                <div id="result_pic" className="flex justify-center w-full mx-auto overflow-hidden h-[500px]">
                                                    <img src={cards.img} alt={cards.name} className="h-full mx-auto transition ease-in-out duration-300 group-hover:-translate-y-1 group-hover:scale-110 max-w-none" />
                                                </div>
                                                <h1 id="rare" className={`text-2xl font-medium title-font tracking-widest font-bold ${cards.rare === 'SR' ? 'text-yellow-500' : cards.rare === 'SSR' ? 'text-red-500' : cards.rare === 'LEGEND' ? 'text-orange-500' : ''}`}>
                                                    {cards.rare}
                                                </h1>
                                                <h2 id="result_item" className={`text-3xl font-medium title-font mb-1 tracking-widest font-bold ${cards.rare === 'SSR' ? 'text-red-500' : cards.rare === 'LEGEND' ? 'text-orange-500' : 'text-[#49c8f0]'}`}>
                                                    {cards.name}
                                                </h2>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>

                <div className="text-center w-full font-bold text-xl pt-8">
                    you have <span className='text-green-500 underline'>{user.yubis}</span> yubis
                </div>
                <div className="flex w-full justify-center">
                    <button id="onetime_btn" className={`mr-5 my-10 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg ${user.yubis >= 5 ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-500 hover:bg-gray-600'}`} onClick={() => { pullOne() }}>
                        <FormattedMessage id={`app.${props.pageName}.RollBTN`} defaultMessage='1x Gacha' />
                    </button>
                    <button id="tentimes_btn" className={`ml-5 my-10 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg ${user.yubis >= 50 ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'} `} onClick={() => { pullTen() }}>
                        <FormattedMessage id={`app.${props.pageName}.RollBTN`} defaultMessage='10x Gacha' />
                    </button>
                </div>

                <div id="rolling_animation" className={`w-screen h-screen fixed top-0 left-0 z-50 hidden`}>
                    <img width="100%" height="100%" src="https://i.imgur.com/cXwbpQG.gif" alt="transition" />
                </div>
                <div className="prelaod" hidden>
                    <img src="https://i.imgur.com/cXwbpQG.gif" alt="preload" />
                </div>
            </div>
        </section >

    )
}

export default connect(state => ({ light: state.light, lang: state.lang, user: state.user }),
    { setUserAccount: ChangeStatus })(Roll)
