import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'

import PagesTitle from '../../components/PagesTitle'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

function Poll(props) {

    const { light, pageName, lang } = props

    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        getData('Poll')//Fetch取得資料
    }, [])

    async function getData(page) {
        try {
            const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/getPollResult`, { method: "post" })
            const result = await getData.json()

            setData(result)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'POLL', description: 'Will announce new poll before next stream(maybe?).', pageName, light }} />

            <div className={`w-full flex flex-wrap ${light ? 'text-gray-800' : 'text-gray-200'}`}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={item.id} className="flex relative sm:items-center w-2/3 mx-auto border-b-2">
                                <div className="h-full w-6 absolute inset-0 flex items-center justify-center"></div>
                                <div
                                    className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center relative z-10 text-red-500 text-2xl font-bold">
                                    {index + 1}</div>
                                <Link to={`/${lang}/Wrestlers/Profile/${item.name_short}`} className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row py-10">
                                    <div
                                        className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center overflow-hidden">
                                        <img width="100%" src={item.avatar} alt={item.name_short} />
                                    </div>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium title-font mb-1 text-2xl font-bold text-center sm:text-left">
                                        <FormattedMessage id={`app.Characters.${item.name_short}`} defaultMessage={item.name_short} />
                                        </h2>
                                        <p className="leading-relaxed text-xl">
                                        <FormattedMessage id={`app.Poll.point`} defaultMessage='Total Point' />: {item.point} <br />
                                        <FormattedMessage id={`app.Poll.votes`} defaultMessage='Total Votes' />: {item.vote}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </section>

    )
}
export default connect(state => ({ light: state.light, lang: state.lang }))(Poll)