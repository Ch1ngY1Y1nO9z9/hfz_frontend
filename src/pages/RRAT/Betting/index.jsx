import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Loading from '../../../components/Loading'

// 引入頁面標題架構
import PagesTitle from '../../../components/PagesTitle'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 紀錄與查看登入狀態
import { ChangeStatus } from '../../../redux/actions/user'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 按鈕送出後連結伺服器
import Echo from 'laravel-echo';

// 匯入測試資料串接畫面用
import { testData } from '../../../staticData'

function Login(props) {
    const { lang: { lang }, setUserAccount } = props

    const [isLoading, setisLoading] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        document.documentElement.scrollTop = 0;

        // 檢查是否有登入過
        const isLogin = JSON.parse(sessionStorage.getItem('account'))

        if (isLogin) {
            // 刷新卡片和手指數
            fetch(`https://hfzapi.surai.xyz/api/checkUserYubis/${isLogin.user_name}`, { method: "post" })
                .then((res) => res.json())
                .then((res) => {

                    if (res.daily) {
                        alert(`you got daily yubis!(${res.daily})`)
                    }

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

    // window.Pusher = require('pusher-js');

    // window.Echo = new Echo({
    // broadcaster: 'pusher',
    // key: 'holofightz123456789', // 這裡隨便填，跟.env檔案裡面一致即可
    // wsHost: window.location.hostname,
    // wsPort: 6001,
    // forceTLS: false,
    // disableStats: true,
    // })

    // window.Echo.channel('test')
    // .listen('Test', (e) => {
    //     console.log(e);
    // });

    return (
        isLoading
            ? <Loading />
            : <Betting data={props} />
    )
}

function Betting(props) {
    const navigate = useNavigate()
    const { lang, light, pageName, user } = props.data

    const [isBetLoading, setBetLoading] = useState(1)
    const [isRecordsLoading, setRecordsLoading] = useState(1)

    const [betData, setBetData] = useState()
    const [matchData, setMatchData] = useState()

    useEffect(() => {
        if (!Object.keys(testData).length) {
            const newData = {
                bet: {
                    users: 'null',
                    betting_data: 'null'
                }
            }
            setBetData(newData)
        } else {
            setBetData(testData)
        }

        fetch(`https://hfzapi.surai.xyz/api/getBettingRecord/${user.user_name}`, { method: "post" })
            .then((res) => res.json())
            .then((res) => {
                setMatchData(res);
                setRecordsLoading(0)
            })

        setBetLoading(0)
    }, [])

    // useEffect(()=>{
    //     fetch(`https://hfzapi.surai.xyz/api/getCurrentBetting`, { method: "post" })
    //     .then((res) => res.json())
    //     .then((res) => {
    //      
    //     })
    // },[])

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container px-5 mx-auto flex flex-wrap text-gray-900">
                <div onClick={() => { navigate(`/${lang}/RROL/main`) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.${pageName}.Back`} defaultMessage='Back to Main menu' />
                </div>
            </div>
            <PagesTitle data={{ title: 'Betting', description: 'bet your yubis to win more yubis!', pageName, light }} />
            {
                isBetLoading
                    ? <Loading />
                    : <BettingForm data={props.data} betData={betData} />
            }
            {
                isRecordsLoading
                    ? <Loading />
                    : <Records data={props.data} matchData={matchData} betData={betData} />
            }
        </section>
    )
}

function BettingForm(props) {
    const { lang, light, user } = props.data
    const { type, rule, bet: { users }, bet: { betting_data } } = props.betData

    const [checkBet, setCheckBet] = useState(1)

    useEffect(() => {
        const bet_match = JSON.parse(user.bet_match)

        if (bet_match.indexOf(props.betData.bet.id) === -1) {
            setCheckBet(0)
        }

    }, [])

    return (
        betting_data === 'null'
            ? <div class="container px-5 mx-auto text-center">
                <div class="pb-5">
                    <h1 class="text-3xl title-font font-medium mb-4">WE DONT'T HAVE ANY MATCH GOING RIGHT NOW :| <br /> <span className="text-white">OP RAN WITH THE MONEY...</span></h1>
                </div>
            </div>
            : <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
                        USER: {user.user_name} <br />
                        YUBIS: {user.yubis}
                    </p>
                </div>
                <div className="pb-5">
                    <h1 className="text-3xl title-font font-medium mb-4">Currently Match:</h1>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{type}</h2>
                    <h3 className="text-2xl title-font font-medium mb-4">{rule}</h3>
                    {
                        betting_data.map((participant) => {
                            return (
                                <div key={participant.name} className="sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded p-4 h-full mx-auto flex justify-between">
                                        <span className="text-xl title-font font-medium">{participant.name}</span>
                                        <span className="text-xl title-font font-medium">
                                            {(participant.bet_user.length / users.length) * 100} %
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <hr className="mt-5" />
                </div>
                {
                    checkBet
                        ? <h1 className='text-red-500 text-3xl title-font font-medium mb-4 text-center pt-3'>
                            YOU'RE ALREADY PUT YOUR YUBIS IN THIS MATCH, PLEASE WAIT FOR THE RESULT <br />
                            <span className="text-white">HOPE SHE WON'T KWAB...</span>
                        </h1>
                        : <BetForm user={user} bettingData={betting_data} />
                }


                <hr className="mt-4" />
            </div>

    )
}

function BetForm(props) {
    const { user, bettingData } = props


    function changeMaxYubis(e) {
        const inputAry = document.querySelectorAll('.betInputs')
        let currentYubis = 0

        // 先判斷是加或減再看是否手指數量足夠
        inputAry.forEach((input) => {
            currentYubis = input.value * 1 + currentYubis
        })



        if (user.yubis - currentYubis < 0) {
            alert("you're out of your yubis...")
            e.target.value = user.yubis - (currentYubis - e.target.value)
            return false
        }
    }

    function checkstake() {
        confirmAlert({
            title: 'ARE YOU SURE?',
            message: "you can't change your bet after submit",
            buttons: [
                {
                    label: 'OGEY',
                    onClick: () => betSumbit()
                },
                {
                    label: 'wait thinking time plese'
                }
            ]
        });
    }


    function betSumbit() {
        const inputAry = document.querySelectorAll('.betInputs')

        const data = []

        inputAry.forEach((input) => {
            const stake = {
                name: input.id,
                stake: input.value
            }
            data.push(stake)
        })

        fetch(`https://hfzapi.surai.xyz/api/Betting/${user.user_name}`, {
            method: "post",
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
        })
            .then((res) => res.json())
            .then((res) => {
                if (res === 'not enough') alert("you're out of your yubis...")
                if (res.status === 'done') {
                    document.querySelector('.betForm').innerHTML = ''
                    alert('we got your yubis, please wait for the result :)')
                }
            })
    }

    return (
        <div className="w-full betForm">
            <div className="p-2 text-center">
                <div onClick={() => { checkstake() }} className="inline-block text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">bet</div>
            </div>
            <h2 className="text-2xl title-font text-gray-500 tracking-widest">Participants:</h2>
            <div className="flex flex-wrap mt-4">
                {
                    bettingData.map((wrestler, index) => {
                        return (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full border flex flex-col">
                                <div className="block relative h-48 rounded overflow-hidden">
                                    <img alt={wrestler.name} className="object-cover object-top w-full h-full block"
                                        src={wrestler.img} />
                                </div>
                                <div className="mt-4 flex-1 flex-col flex">
                                    <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">{wrestler.gen}</h3>
                                    <h2 className="text-gray-900 title-font text-2xl font-medium">{wrestler.name}</h2>
                                    <p className="mb-3">
                                        win rate: {!wrestler.winRate ? '-' : wrestler.winRate + '%'} <br />
                                    </p>
                                    <input onChange={(e) => changeMaxYubis(e)} id={wrestler.name} type="number" className="betInputs w-full mt-auto py-1 pl-2" defaultValue="0" min="0" max={user.yubis} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

function Records(props) {
    const { lang, light, user, pageName } = props.data
    const { matchData, betData } = props
    const [userRecord, setUserRecord] = useState([])

    useEffect(() => {
        console.log(user);
        const recordAry = JSON.parse(user.collect_bet)
        setUserRecord(recordAry)
    }, [user])

    function collectYubi(id) {
        fetch(`https://hfzapi.surai.xyz/api/collectYubis/${user.user_name}/${id}`, {
            method: "post"
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="w-full flex flex-col text-center w-full mb-10 lg:mb-20">
                <h2 className="text-5xl font-medium title-font font-bold text-gray-600">Betting Records</h2>
            </div>
            <div className="-my-8 divide-y-2 bg-gray-200 divide-gray-100 max-h-[635px] overflow-x-auto">
                {
                    matchData === 'none'
                        ? <h1 className="text-2xl font-medium p-5 text-center">YOU DIDN'T BET ANY MATCH YET</h1>
                        : matchData.map((matches, index) => {
                            return (
                                <div key={index} className="p-4 block md:flex flex-wrap md:flex-nowrap text-black">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0  block md:flex flex-col">
                                        <span className="font-semibold title-font">
                                            <Link to={`/${lang}/Previous/${matches.stream_id}`} className='hover:text-blue-500 hover:underline'>
                                                <FormattedMessage id={`app.${pageName}.Stream`} defaultMessage='Stream' /> {matches.stream_id}
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="md:flex-grow relative">
                                        <h2 className="text-2xl font-medium title-font mb-2 text-gray-700">
                                            <FormattedMessage id={`app.${pageName}.${matches.type}`} defaultMessage={matches.type} /> - {matches.rule}
                                        </h2>
                                        <p className="leading-relaxed">
                                            <FormattedMessage id={`app.${pageName}.Participants`} defaultMessage='Participants' />:
                                        </p>
                                        <p className="leading-relaxed font-bold">
                                            {JSON.parse(matches.participants).map((team, $key) => {
                                                const links = team.split(',').map((wrestler, index) => {
                                                    return <span key={index}> {index !== 0 ? ' , ' : ''} {$key !== 0 && index === 0 ? ' / ' : ''}
                                                        <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                            <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={`${wrestler}`} />
                                                        </Link>
                                                    </span>
                                                })

                                                return links
                                            })}
                                        </p>
                                        <p className="leading-relaxed">
                                            <br />
                                            <FormattedMessage id={`app.${pageName}.Winners`} defaultMessage='Winners' />:
                                        </p>
                                        <p className={`leading-relaxed font-bold ${matches.result === 'Draw' ? 'text-yellow-700' : matches.result === 'crashed' ? '' : 'text-red-600'}`}>
                                            {
                                                matches.result === 'Draw'
                                                    ? <FormattedMessage id={`app.${pageName}.Draw`} defaultMessage='Draw' />
                                                    : matches.result === 'crashed'
                                                        ? <FormattedMessage id={`app.${pageName}.Crashed`} defaultMessage='Crashed' />
                                                        : matches.result.split(',').map((mate, index, ary) => {
                                                            return (
                                                                <span key={index} className="font-bold hover:text-blue-500 hover:underline cursor-pointer">
                                                                    <FormattedMessage id={`app.Characters.${mate}`} defaultMessage={mate} /> {ary.length !== 1 && ary.length - 1 !== index ? ',' : ''}
                                                                </span>
                                                            )
                                                        })
                                            }
                                        </p>
                                        {
                                            !userRecord.indexOf(matches.id)
                                                ? <span className="absolute right-0 bottom-0 inline text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-not-allowed">Collect Yubi</span>
                                                : <div onClick={() => collectYubi(matches.id)} className="absolute right-0 bottom-0 inline text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">Collect Yubi</div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                }

            </div>
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang, user: state.user }),
    { setUserAccount: ChangeStatus })(Login)