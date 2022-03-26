import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import PagesTitle from '../../components/PagesTitle'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

function Previous(props) {

    const { light, pageName } = props

    const [data, setData] = useState([]) //取得頁面資料

    useEffect(() => {
        getData('Previous')//Fetch取得資料
    }, [])

    async function getData(page) {
        try {
            const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/get${page}`, { method: "post" })
            const result = await getData.json()

            setData(result.reverse())
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'PREVIOUS SHOWS', description: 'Watch all stream archived episode in here.', pageName, light }} />
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -mx-4 text-left text-white">
                    {
                        data.map(prev => {
                            return (
                                <div key={prev.id} className="w-full sm:w-1/2 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${prev.background_image.slice(0,1) === 'h' ? prev.background_image : 'https://hfzapi.surai.xyz/'+prev.background_image })` }}>
                                    <div className="rounded-lg h-[350px] overflow-hidden px-5 bg-black/50">
                                        <h2 className="title-font text-4xl font-medium mt-6 mb-1">Ep {prev.stream_number}</h2>
                                        <h3 className="title-font text-1xl font-medium mb-3">{prev.date}</h3>
                                        <p className="leading-relaxed text-base">
                                            <FormattedMessage id={`app.${pageName}.Archive.${prev.stream_number}`} defaultMessage={`Watch episode ${prev.stream_number} of HoloFightz:`} />
                                        </p>

                                        <ul className="list-disc text-indent pl-5">
                                            <li>
                                                <FormattedMessage id={`app.${pageName}.Archive.Context1.${prev.stream_number}`} defaultMessage={prev.context1} />
                                            </li>
                                            <li>
                                                <FormattedMessage id={`app.${pageName}.Archive.Context2.${prev.stream_number}`} defaultMessage={prev.context2} />
                                            </li>
                                            <li>
                                                <FormattedMessage id={`app.${pageName}.Archive.Context3.${prev.stream_number}`} defaultMessage={prev.context3} />
                                            </li>
                                        </ul>

                                        <div className="flex pt-3">
                                            <Link to={`${prev.stream_number}`} className="inline-block ml-auto mt-3 bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                                                <FormattedMessage id={`app.${pageName}.Archive.BOX`} defaultMessage='BOX' />
                                            </Link>
                                            <a target="_blank" href={`${prev.link}`} rel="noreferrer noopener" className="inline-block ml-3 mt-3 bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                                                <FormattedMessage id={`app.${pageName}.Archive.Watch`} defaultMessage='Watch Archive' />
                                            </a>
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
export default connect(state => ({ light: state.light, lang: state.lang }))(Previous)