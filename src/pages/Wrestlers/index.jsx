import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useParams, Link, useNavigate, Navigate } from 'react-router-dom'

import Loading from '../../components/Loading'

// 引入頁面標題架構
import PagesTitle from '../../components/PagesTitle'

// 引入按鈕樣式
import ButtonsLink from '../../components/ContentLinks'

// 引入固定資料
import { Generations } from '../../staticData'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入姓名對照表
import { MembersList, TestList } from '../../staticData'


function Wrestlers(props) {


    const { lang: { lang }, light, pageName } = props
    const [data, setData] = useState([]) //取得頁面資料
    const [isLive, setIsLive] = useState(0) //紀錄是否直播

    useEffect(() => {
        if (!data.length) {
            getData('Wrestlers')//Fetch取得資料
        }
    }, [isLive])

    function getData(page) {
        fetch(`http://127.0.0.1:8000/api/${page}/get${page}`, { method: "post" })
            .then((response) => response.json())
            .then((result) => {
                fetch(`https://schedule.hololive.tv/api/list/7`, { method: "get" })
                    .then((response) => response.json())
                    .then((liveList) => {
                        liveList.dateGroupList.forEach((list) => {
                            if (list.videoList) {
                                var Live = list.videoList.filter((schedule) => {
                                    return schedule.isLive
                                })

                                Live.forEach((stream, index) => {
                                    const wrestler_id = MembersList.indexOf(stream.name)
                                    result.forEach((wrestler) => {
                                        if (wrestler.id === wrestler_id) {
                                            wrestler.liveDetail = Live[index]
                                        }
                                    })
                                })
                            }
                        })
                    })
                    .then(() => {
                        setData(result)
                    })
                setIsLive(1)
            })
    }

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>

            <PagesTitle data={{ title: 'WRESTLERS PROFILE', description: 'All HoloFightZ wrestler personal file, spamming text are in here.', pageName, light }} />

            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <Link to={`/${lang}/Wrestlers/rank`} className="mx-auto text-white font-bold rounded-full my-5 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-[#49c8f0]" >
                        <i className="fas fa-arrow-right"></i>
                        <FormattedMessage id={`app.${pageName}.PowerRanking`} defaultMessage='Power Rankings' />
                    </Link>
                </div>
                <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                    <nav className="w-full flex-grow grid grid-cols-2 md:grid-cols-4 md:pr-20 text-center order-first">
                        <ButtonsLink to={`/${lang}/Wrestlers/All`}>All</ButtonsLink>
                        {
                            Generations.map((generation) => {
                                return (
                                    <ButtonsLink key={generation.id} to={`/${lang}/Wrestlers/${generation.link}`}>
                                        <FormattedMessage id={`app.Profiles.${generation.langId}`} defaultMessage={generation.name} />
                                    </ButtonsLink>
                                )
                            })
                        }

                    </nav>
                </div>

                <hr />

                <div className="flex flex-wrap portfolio">
                    <div className="w-full flex flex-wrap">
                        <Routes>
                            <Route path="/rank" element={<PowerRanking data={{ data, ...props }} />} />
                            <Route path="/:id" element={<Members data={{ data, ...props }} />} />
                            <Route path="/*" element={<Navigate to={`/${lang}/Wrestlers/All`} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Members(props) {


    const { lang: { lang }, light, data } = props.data
    const navigate = useNavigate();
    const paramas = useParams();
    const [isLoading, setisLoading] = useState(1)
    const [members, setMembers] = useState([])

    useEffect(() => {
        const result = data.filter((profile) => {
            if (paramas.id === 'All') {
                return profile
            }
            if (profile.gens !== null) {
                const gen = profile.gens.generations.replace(/\s+/g, '')
                return gen === paramas.id
            }
        })

        setMembers(result)
        setisLoading(0)
        // 檢查是否有資料的重導向
        checkData(paramas.id)
    }, [data, paramas.id])


    function checkData(query) {
        const generationAry = ['All', 'Gen0', 'Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'GAMERS', 'HoloX', 'HoloID', 'HoloMyth', 'INNK', 'ProjectHope', 'HoloCouncil']

        if (generationAry.indexOf(query) === -1) {
            alert('>:)')
            navigate(`/${lang}/Wrestlers/All`)
        }
    }

    return (
        isLoading
            ? <Loading />
            : members.map((member) => {
                return (
                    <div key={member.id} className={`rounded-lg bg-cover bg-center group w-full lg:w-1/2 ${!member.liveDetail ? '' : 'text-white'} ${member.isVisible === 0 && light ? 'hidden' : 'block'} ${light ? 'hover:bg-gray-200' : 'hover:bg-gray-700'}`} style={!member.liveDetail ? {} : { backgroundImage: `url(${member.liveDetail.thumbnail})` }}>
                        <div className={`h-full flex sm:flex-row flex-col p-4 items-center sm:justify-start justify-center text-center sm:text-left rounded-lg ${!member.liveDetail ? '' : 'bg-black/70'}`}>
                            <Link to={`/${lang}/Wrestlers/Profile/${member.name_short}`} className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 overflow-hidden">
                                <img width="100%" className={`rounded-lg object-cover object-center transition ease-in-out duration-300 group-hover:-translate-y-1 group-hover:scale-110`} alt="team" src={`${!member.liveDetail ? member.avatar : member.liveDetail.talent.iconImageUrl}`} />
                            </Link>
                            <div className="flex-grow sm:pl-8">
                                <Link to={`/${lang}/Wrestlers/Profile/${member.name_short}`}>
                                    <h2 className="title-font text-lg font-bold">
                                        <FormattedMessage id={`app.Characters.${member.name_short}`} defaultMessage={member.name_en} />
                                        {!member.liveDetail ? `` : <FormattedMessage id={`app.Profiles.streaming`} defaultMessage={`【STREAMING】`} />}
                                    </h2>
                                    <h3 className={`mb-3 ${!member.liveDetail ? 'text-gray-500' : 'text-white'}`}>@ {member.aka}</h3>
                                    <p className="mb-4 break-all">
                                        {!member.liveDetail ? `${member.spamming}` : `${member.liveDetail.title}`}
                                    </p>
                                </Link>
                                <span className="inline-flex">
                                    {
                                        member.twitter_link
                                            ? <a rel="noreferrer" target="_blank" href={`${member.twitter_link}`} className='text-[#1da1f2]'>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            : ''
                                    }
                                    {
                                        member.youtube_link
                                            ? <a rel="noreferrer" target="_blank" href={`${!member.liveDetail ? member.youtube_link : member.liveDetail.url}`} className="ml-2 text-[#ff0000] relative">
                                                <i className={`fab fa-youtube ${!member.liveDetail ? '' : 'animate-pulse'}`}></i>
                                            </a>
                                            : ''
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })
    )
}

function PowerRanking(props) {

    const { data, lang: { lang } } = props.data
    const [isLoading, setisLoading] = useState(1)

    // 深拷貝 避免影響原排序
    const profile_ary = [...data]

    profile_ary.sort(function (next, current) {
        return next.rank > current.rank ? 1 : -1;
    });

    const rank = profile_ary.filter((current) => {
        return current.rank !== 0 && current.isVisible !== 0
    })

    useEffect(() => {
        if (data.length !== 0) setisLoading(0)
    }, [])

    let colorSetting = { color: '', arrow: '' }

    return (
        <div className="container px-5 py-12 mx-auto flex flex-wrap text-gray-800">
            {
                isLoading
                    ? <Loading />
                    : rank.map((current) => {
                        current.rank < current.last_week_rank ? colorSetting = { color: 'text-green-600', arrow: 'fa-arrow-up', bg: "bg-green-200", hover: "hover:bg-green-300" }
                            : current.rank > current.last_week_rank
                                ? colorSetting = { color: 'text-red-600', arrow: 'fa-arrow-down', bg: "bg-red-200", hover: "hover:bg-red-300" }
                                : colorSetting = { color: 'text-gray-600', arrow: 'fa-circle', bg: "bg-gray-200", hover: "hover:bg-gray-300" };

                        return (
                            <Link key={current.id} className="flex relative sm:items-center w-2/3 mx-auto border-b-2 hover:font-bold" to={`/${lang}/Wrestlers/Profile/${current.name_short}`}>
                                <div className={`h-full w-6 absolute inset-0 flex items-center justify-center ${colorSetting.bg}`}></div>
                                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center relative z-10 title-font text-xl">{current.rank}</div>
                                <div className={`flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row py-10 ${colorSetting.bg} ${colorSetting.hover}`}>
                                    <div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center overflow-hidden">
                                        <img width="100%" src={current.avatar} alt={current.name_short} />
                                    </div>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className=" title-font mb-1 text-xl text-center sm:text-left">
                                            <FormattedMessage id={`app.Characters.${current.name_short}`} defaultMessage={current.name_short} />
                                        </h2>
                                        <p className="leading-relaxed">
                                            <i className={`text-xl fas ${colorSetting.arrow} ${colorSetting.color}`}></i>
                                            <FormattedMessage id='app.Profiles.LastWeek' defaultMessage='Last week' />
                                            : {current.last_week_rank}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
            }
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Wrestlers)