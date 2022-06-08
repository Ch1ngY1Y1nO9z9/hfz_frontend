import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(MatchRecords)

function MatchRecords(props) {
    const { name, pageName, updateHandler, lang, light } = props

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState({}) //取得人物基本資料

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getMatches/${name}`, { method: "post" })
                
                const result = await getData.json()

                setData(result)
                setisLoading(0)
            } catch (error) {
                console.log(error)
            }
        }

        setisLoading(1)
        getData('Detail')
        
    }, [name])

    return (
        <div id="Fanbase" className="container px-5 pb-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className={`text-5xl font-medium title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>
                    <FormattedMessage id={`app.${pageName}.MatchRecords`} defaultMessage='Match Records' />

                </h1>
            </div>
            <div className={`-my-8 divide-y-2 divide-gray-100 max-h-[635px] overflow-x-auto ${light ? 'bg-gray-200' : 'bg-gray-700'}`}>
                {
                    isLoading
                        ? <Loading />
                        : data.map((matches) => {
                            return (
                                <div key={matches.id} className={`p-4 block md:flex flex-wrap md:flex-nowrap ${light ? 'text-black' : 'text-white'}`}>
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0  block md:flex flex-col">
                                        <span className="font-semibold title-font">
                                            <Link to={`/${lang}/Previous/${matches.stream_id}`} className='hover:text-blue-500 hover:underline'>
                                                <FormattedMessage id={`app.${pageName}.Stream`} defaultMessage='Stream' /> {matches.stream_id}
                                            </Link>

                                        </span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className={`text-2xl font-medium title-font mb-2 ${light ? 'text-gray-700' : 'text-gray-300'}`}>
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
                                                                <span key={index} onClick={() => { updateHandler(mate) }} className="font-bold hover:text-blue-500 hover:underline cursor-pointer">
                                                                    <FormattedMessage id={`app.Characters.${mate}`} defaultMessage={mate} /> {ary.length !== 1 && ary.length - 1 !== index ? ',' : ''}
                                                                </span>
                                                            )
                                                        })
                                            }
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div >
    )
}
