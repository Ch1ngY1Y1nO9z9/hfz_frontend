import React, { useEffect, useState, Suspense } from 'react'
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


function Content(props) {
    const [isLoading, setisLoading] = useState(true)
    const [data, setData] = useState({}) //取得比賽

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getMatchResult/${params.id}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Previous')
    }, [])

    return (
        <section className={`min-h-screen pt-24 ${props.light ? 'bg-white' : 'bg-black'}`}>
            <div className="container px-5 mx-auto flex flex-wrap">
                <div onClick={() => { navigate('/Previous') }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 md:mb-20 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.Previous.Result.Back`} defaultMessage={`Back to Previous Shows`} />

                </div>
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="sm:text-5xl text-4xl font-medium title-font mb-4">
                        EP. {params.id}
                        <FormattedMessage id={`app.Previous.Result.Title`} defaultMessage={` Match result`} />
                    </h2>
                </div>
                <div className="w-full mx-auto overflow-auto">
                    {
                        isLoading ? <Loading /> : <Matches data={data} />
                    }


                </div>

                <div className="flex flex-col text-center w-full pt-24 mb-10">
                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                        <FormattedMessage id={`app.Previous.Result.SongList.Title`} defaultMessage={`Song List`} />
                        
                    </h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        <FormattedMessage id={`app.Previous.Result.SongList.Description`} defaultMessage={`All the songs played in the match.`} />
                        
                    </p>
                </div>

                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/:game" element={<SongList />} />
                    </Routes>
                </Suspense>


            </div>
        </section>
    )
}

function Matches(props) {
    const params = useParams()
    const { data } = props

    return (
        <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
                <tr className="text-gray-800">
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100 rounded-tl rounded-bl">
                        <FormattedMessage id={`app.Previous.Result.Table.Game`} defaultMessage='Game' />
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                        <FormattedMessage id={`app.Previous.Result.Table.Type`} defaultMessage='Type' />
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                        <FormattedMessage id={`app.Previous.Result.Table.Context`} defaultMessage='Context' />
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                        <FormattedMessage id={`app.Previous.Result.Table.Participants`} defaultMessage='Participants' />
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                        <FormattedMessage id={`app.Previous.Result.Table.Winner`} defaultMessage='Winner' />
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100"></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((match) => {
                        return (
                            match.game === 1
                                ? <tr key={match.id} >
                                    <td className="px-4 py-3">
                                        {match.game}
                                    </td>
                                    <td className="px-4 py-3">
                                        {match.type}
                                    </td>
                                    <td className="px-4 py-3">
                                        {match.rule}
                                    </td>
                                    <td className="px-4 py-3 font-bold">
                                        {match.participants}
                                    </td>
                                    <td className={`px-4 py-3 ${match.result === 'Draw' ? 'text-yellow-500' : 'text-red-500'}`}>
                                        {
                                            match.result.split(",").map((wrestler, index) => {
                                                return index === 0
                                                    ? <Link key={index} to={`/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                        <FormattedMessage id={`app.Character.${wrestler}`} defaultMessage={wrestler} />
                                                    </Link>
                                                    : <Link key={index} to={`/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                        ,&nbsp;<FormattedMessage id={`app.Character.${wrestler}`} defaultMessage={wrestler} />
                                                    </Link>
                                            })
                                        }
                                    </td>
                                    <td className="px-4 py-3">
                                        <Link replace to={`/Previous/${params.id}/${match.game}`} className="font-bold hover:underline hover:text-blue-500">
                                            <FormattedMessage id={`app.Previous.Result.Table.SongList`} defaultMessage='Song List' />
                                        </Link>
                                    </td>
                                </tr>
                                : <tr key={match.id}>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">{match.game}</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">{match.type}</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">{match.rule}</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 font-bold">{match.participants}</td>
                                    <td className={`border-t-2 border-gray-200 px-4 py-3 ${match.result === 'Draw' ? 'text-yellow-500' : 'text-red-500'}`}>
                                        {
                                            match.result.split(",").map((wrestler, index) => {
                                                return index === 0
                                                    ? <Link key={index} to={`/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                        <FormattedMessage id={`app.Character.${wrestler}`} defaultMessage={wrestler} />
                                                    </Link>
                                                    : <Link key={index} to={`/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                        ,&nbsp;<FormattedMessage id={`app.Character.${wrestler}`} defaultMessage={wrestler} />
                                                    </Link>
                                            })
                                        }
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                        <Link replace to={`/Previous/${params.id}/${match.game}`} className="font-bold hover:underline hover:text-blue-500">
                                            <FormattedMessage id={`app.Previous.Result.Table.SongList`} defaultMessage='Song List' />
                                        </Link>
                                    </td>
                                </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

function SongList(props) {
    const [isLoading, setisLoading] = useState(true)
    const [data, setData] = useState({}) //取得歌曲清單
    const params = useParams()

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getSongList/${params.id}/${params.game}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Previous')
    }, [params.game])

    return (
        <div className="w-full flex flex-wrap -m-2 text-center">
            {
                isLoading ? <Loading /> : data.length === 0 ? <h3 className='sm:text-5xl text-4xl font-medium title-font mb-4'><FormattedMessage id={`app.Previous.Result.SongList.None`} defaultMessage={`No result! Maybe we'll add it later :)`} /></h3> : data.map((song) => {

                    return (
                        <div key={song.id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="w-full border-gray-200 border p-4 rounded-lg">
                                <p className="text-xl md:text-2xl pb-3"><FormattedMessage id={`app.Previous.Result.SongList.PlayedAt`} defaultMessage={`played at game `} />{song.played_at}</p>
                                <div className="flex items-center">
                                    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${song.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>

                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Content)