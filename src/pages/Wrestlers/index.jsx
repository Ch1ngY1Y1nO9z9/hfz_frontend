import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'

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

// Fetch取得資料
// import {getData} from '../../fetch'

function Wrestlers(props) {
    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        getData('Wrestlers')//Fetch取得資料
    }, [])

    async function getData(page) {
        try {
            const getData = await fetch(`http://127.0.0.1:8000/api/${page}/get${page}`, { method: "post" })
            const result = await getData.json()
    
            setData(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="min-h-screen">

            <PagesTitle page={{ title: 'WRESTLERS PROFILE', description: 'All HoloFightZ wrestler personal file, spamming text are in here.', pageName: props.pageName }} />

            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <Link to="/Wrestlers/rank" className="mx-auto text-white font-bold rounded-full my-5 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-[#49c8f0]" >
                        <i className="fas fa-arrow-right"></i>
                        <FormattedMessage id={`app.${props.pageName}.PowerRanking`} defaultMessage='Power Rankings' />
                    </Link>
                </div>
                <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                    <nav className="w-full flex-grow grid grid-cols-2 md:grid-cols-4 md:pr-20 text-center order-first">
                        <ButtonsLink to={`/Wrestlers/All`}>All</ButtonsLink>
                        {
                            Generations.map((generation) => {
                                return (
                                    <ButtonsLink key={generation.id} to={`/Wrestlers/${generation.link}`}>
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
                            <Route path="/rank" element={<PowerRanking data={data} animate={true} />} />
                            <Route path="/:id" element={<Members data={data} animate={true} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Members(props) {
    const paramas = useParams();

    const members = props.data.filter((profile) => {
        if (paramas.id === 'All') {
            return profile.generations_id
        }
        else {
            return profile.generations_id === paramas.id
        }

    })

    return (
        members.map((member) => {
            return (
                <div key={member.id} className="p-4 w-full lg:w-1/2">
                    <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <a href={`/WrestlersProfile/${member.name_short}`} className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4">
                            <img width="100%" className="rounded-lg object-cover object-center" alt="team" src={`${member.avatar}`} />
                        </a>
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">
                                <FormattedMessage id={`app.Characters.${member.name_short}`} defaultMessage={member.name_en} />

                            </h2>
                            <h3 className="text-gray-500 mb-3">@ {member.aka}</h3>
                            <p className="mb-4">
                                {member.spamming}
                            </p>
                            <span className="inline-flex">
                                <a rel="noreferrer" target="_blank" href={`${member.twitter_link}`} className="text-gray-500 hover:text-[#1da1f2]">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a rel="noreferrer" target="_blank" href={`${member.youtube_link}`} className="ml-2 text-gray-500 hover:text-[#ff0000]">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

function PowerRanking(props) {
    // 深拷貝 避免影響原排序
    const profile_ary = [...props.data]

    profile_ary.sort(function (next, current) {
        return next.rank > current.rank ? 1 : -1;
    });

    const rank = profile_ary.filter((current) => {
        return current.rank !== 0
    })

    let colorSetting = { color: '', arrow: '' }

    return (
        <div className="container px-5 py-12 mx-auto flex flex-wrap text-gray-800">
            {
                rank.map((current) => {
                    current.rank > current.last_week_rank ? colorSetting = { color: 'green', arrow: 'fa-arrow-up' }
                        : current.rank < current.last_week_rank ? colorSetting = { color: 'red', arrow: 'fa-arrow-down' }
                            : colorSetting = { color: 'gray', arrow: 'fa-circle' };

                    return (
                        <Link key={current.id} className="flex relative sm:items-center w-2/3 mx-auto border-b-2" to="/WrestlersProfile/{current.name_short}">
                            <div className={`h-full w-6 absolute inset-0 flex items-center justify-center bg-${colorSetting.color}-400`}></div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center relative z-10 title-font font-medium text-xl">{current.rank}</div>
                            <div className={`flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row py-10 bg-${colorSetting.color}-200 hover:bg-${colorSetting.color}-300`}>
                                <div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center overflow-hidden">
                                    <img width="100%" src={current.avatar} alt={current.name_short} />
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font mb-1 text-xl text-center sm:text-left">
                                        <FormattedMessage id={`app.Characters.${current.name_short}`} defaultMessage={current.name_short} />
                                    </h2>
                                    <p className="leading-relaxed">
                                        <i className={`text-xl fas ${colorSetting.arrow} text-${colorSetting.color}-600`}></i>
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