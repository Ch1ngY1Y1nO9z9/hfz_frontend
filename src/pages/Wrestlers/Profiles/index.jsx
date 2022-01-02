import React, { useEffect, useState, Suspense } from 'react'
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


function Profiles(props) {
    const [isLoading, setisLoading] = useState(true)
    const [data, setData] = useState({}) //取得人物基本資料

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/get${page}/${params.name}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Detail')
    }, [])

    return (
        <section className={`min-h-screen pt-12 ${props.light ? 'bg-white' : 'bg-black'}`}>

            <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
                <div onClick={() => { navigate(-1) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <i className="fas fa-arrow-left"></i> Back to Wrestlers Profile
                </div>
            </div>
            {
                isLoading ? <Loading /> : <div>
                    <CharactersDetail data={data} />
                    <MatchRecords data={params.name} />
                    <WinLoseRate data={data.id} />
                    <MatchClips data={data.clips} />
                </div>

            }
        </section>
    )
}

function CharactersDetail(props) {
    const { data, data: { detail } } = props

    return (
        <div className="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded mx-auto md:mx-0 md:ml-auto h-[400px] md:h-[600px]" alt="hero" src={data.picture} />
            </div>
            <div
                className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h2 className="text-sm title-font text-gray-500 tracking-widest ml-1">
                    {data.gens.generations}
                </h2>


                <h1 className="text-3xl title-font font-medium mb-1 font-bold mt-1">

                    {data.isHolochampion
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-crown text-yellow-500" title="HOLO CHAMPION"></i>
                            CURRENT HOLO CHAMPION
                        </div> : ''
                    }

                    {data.isHolochampion
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-tags text-yellow-500" title="TAG TEAM CHAMPION"></i>
                            CURRENT TAG TEAM CHAMPION
                        </div> : ''
                    }

                    {data.isHolochampion
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fab fa-accessible-icon text-yellow-500" title="QUEEN OF JOBBER"></i>
                            CURRENT QUEEN OF JOBBER
                        </div> : ''
                    }

                    {data.isHolochampion
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-briefcase text-blue-500" title="briefcase owner"></i>
                            BRIEFCASE OWNER
                        </div> : ''
                    }

                    {
                        data.name_short === 'Miko' ? <i className="fas fa-baby text-pink-500" title="ばぶばぶ..."></i>
                            : data.name_short === 'Luna' ? <i className="fas fa-baby text-pink-500" title="ばぶばぶ..."></i>
                                : ''
                    }

                    {
                        data.name_short === 'Rushia' ? <i className="fas fa-book-dead" title="DOKI DOKI WAKU WAKU"></i>
                            : ''
                    }

                    {
                        data.name_short === 'Botan' ? <i className="fas fa-shopping-cart" title="Master of shopping-cart"></i>
                            : ''
                    }


                    {
                        data.name_short === 'Yagoo'
                            ? <i className="fas fa-pray" title="Kneel"></i>
                            : ''
                    }

                    {data.name_jp} <br className="md:hidden block" /> / {data.name_en}
                </h1>
                <div className="flex mb-4">
                    <span className="flex items-center">
                        <span className="text-gray-600 ml-1">@ {data.aka}</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <a rel="noreferrer" target="_blank" href={`${data.twitter_link}`} className="text-gray-500 hover_twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a rel="noreferrer" target="_blank" href={`${data.youtube_link}`}
                            className="ml-2 text-gray-500 hover_youtube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </span>
                </div>

                <p>Debut: <span className="font-bold">{detail.debut}</span></p>
                <p><br />Birthday: <span className="font-bold">{detail.birth_day}</span></p>
                <p><br />Weight: <span className="font-bold">{detail.weight} lb</span></p>
                <p><br />Fan base name: <span className="font-bold"> {detail.fan_name} </span></p>
                <p><br />Signature: <span className="font-bold"> {detail.signature} </span></p>
                <p>Finisher: <span className="font-bold"> {detail.finisher} </span></p>

                <p>
                    <br />tag team name:
                    <span className="font-bold"> {detail.team_name === null ? '-' : detail.team_name} </span>
                </p>
                <p>
                    <br />teamate:
                    <a href="/WrestlersProfile/???">
                        <span className="font-bold"> {detail.tag_with === null ? '-' : detail.tag_with} </span>
                    </a>

                </p>
            </div>
        </div>
    )
}

function MatchRecords(props) {
    const [isLoading, setisLoading] = useState(true)
    const [data, setData] = useState({}) //取得人物基本資料

    const params = useParams()

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getMatches/${params.name}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Detail')
    }, [])

    return (
        <div className="container px-5 pb-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className="text-5xl font-medium title-font font-bold text-gray-900">Match Records</h1>
            </div>
            <div className="-my-8 divide-y-2 bg-gray-200 divide-gray-100 h-[635px] overflow-x-auto">
                {
                    isLoading ? <Loading /> : data.map((matches) => {

                        return (
                            <div key={matches.id} className="p-4 block md:flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0  block md:flex flex-col">
                                    <span className="font-semibold title-font text-gray-900">Stream {matches.stream_id}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium title-font mb-2 text-gray-700"> {matches.type} - {matches.rule}</h2>
                                    <p className="leading-relaxed">Participants:</p>
                                    <p className="leading-relaxed font-bold">{matches.participants}</p>
                                    <p className="leading-relaxed"><br />Winners:</p>
                                    <p className={`leading-relaxed font-bold ${matches.result === 'Draw' ? 'text-yellow-700' : 'text-red-600'}`}>{matches.result}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div >
    )
}

function WinLoseRate(props) {
    const [isLoading, setisLoading] = useState(true)
    const [data, setData] = useState({}) //取得人物基本資料

    const params = useParams()

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getWinLoseRate/${params.name}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Detail')
    }, [])

    return (
        <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className="text-5xl font-medium title-font font-bold text-gray-900">Win Lose Ratio</h1>
            </div>
            <div className="flex flex-col">
                {
                    isLoading ? <Loading /> : <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="overflow-y-auto w-full">
                                <table className="w-full text-center h-[250px]">
                                    <thead className="bg-gray-400 text-white text-normal">
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Win</th>
                                            <th scope="col">Lose</th>
                                            <th scope="col">Draw</th>
                                            <th scope="col">Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                all
                                            </td>
                                            <td>{data.total}</td>
                                            <td>{data.total_win}</td>
                                            <td>{data.total_lose}</td>
                                            <td>{data.total_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.total_win_rate}%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                1 v 1
                                            </td>
                                            <td>{data.single_total}</td>
                                            <td>{data.single_win}</td>
                                            <td>{data.single_lose}</td>
                                            <td>{data.single_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.single_win_rate}%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                2 v 2
                                            </td>
                                            <td>{data.tag_total}</td>
                                            <td>{data.tag_win}</td>
                                            <td>{data.tag_lose}</td>
                                            <td>{data.tag_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.tag_win_rate}%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                Multi
                                            </td>
                                            <td>{data.multi_total}</td>
                                            <td>{data.multi_win}</td>
                                            <td>{data.multi_lose}</td>
                                            <td>{data.multi_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.multi_win_rate}%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

function MatchClips(props) {
    return (
        <div className="container px-5 pb-24 mx-auto hidden sm:block">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className="text-5xl font-medium title-font font-bold text-gray-900">Match Clips</h1>
            </div>
            <div className="flex flex-wrap -m-4">


                <div className="p-4 lg:w-1/2 w-full">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <i className="fas fa-hand-sparkles"></i>
                            </div>
                            <h2 className="text-lg title-font font-medium text-gray-900">clip_title</h2>
                        </div>
                        {/* <div className="flex-grow">
                            <iframe width="100%" height="375" src="https://www.youtube.com/embed/???" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> */}
                    </div>
                </div>

                <div className="p-4 lg:w-1/2 w-full">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <i className="fas fa-hand-middle-finger"></i>
                            </div>
                            <h2 className="text-lg title-font font-mediumtext-gray-900">clip_title</h2>
                        </div>
                        {/* <div className="flex-grow">
                            <iframe width="100%" height="375" src="https://www.youtube.com/embed/???" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> */}
                    </div>
                </div>

                <div className="p-4 lg:w-1/2 w-full">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <i className="fas fa-fist-raised"></i>
                            </div>
                            <h2 className="text-lg title-font font-medium text-gray-900">clip_title</h2>
                        </div>
                        {/* <div className="flex-grow">
                            <iframe width="100%" height="375" src="https://www.youtube.com/embed/???" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Profiles)
