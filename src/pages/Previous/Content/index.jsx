import React, { useEffect, useState, Suspense, useRef } from 'react'
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


function Content(props) {
    const { lang: { lang }, light } = props

    const [isLoading, setisLoading] = useState(true)
    const [data, setData] = useState({}) //取得比賽

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/getMatchResult/${params.id}`, { method: "post" })
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
        <section className={`min-h-screen pt-24 ${light ? 'bg-white' : 'bg-black'}`}>
            {
                isLoading
                    ? <Loading />
                    : <div className="container px-5 mx-auto flex flex-wrap">
                        <div onClick={() => { navigate(`/${lang}/Previous`) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 md:mb-20 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
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
                                isLoading ? <Loading /> : <Matches data={{ data, ...props, isLoading }} />
                            }


                        </div>

                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route path="/:game" element={<SongList matches={data} />} />
                            </Routes>
                        </Suspense>


                    </div>
            }

        </section>
    )
}

function Matches(props) {
    const params = useParams()
    const { data, lang: { lang }, isLoading } = props.data

    return (
        <div className="w-full">
            {
                isLoading
                    ? <Loading />
                    : <table className="table-auto w-full text-left whitespace-no-wrap">
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
                                                    {JSON.parse(match.participants).map((team, $key) => {
                                                        const links = team.split(',').map((wrestler, index) => {
                                                            return <span key={index}> {index !== 0 ? ' , ' : ''} {$key !== 0 && index === 0 ? ' / ' : ''}
                                                                <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                    <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={`${wrestler}`} />
                                                                </Link>
                                                            </span>
                                                        })

                                                        return links
                                                    })}
                                                </td>
                                                <td className={`px-4 py-3 ${match.result === 'Draw' ? 'text-yellow-500' : 'text-red-500'}`}>
                                                    {
                                                        match.result.split(",").map((wrestler, index) => {
                                                            return index === 0
                                                                ? <Link key={index} to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                    <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                                </Link>
                                                                : <Link key={index} to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                    ,&nbsp;<FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                                </Link>
                                                        })
                                                    }
                                                </td>
                                                <td className="px-4 py-3">
                                                    <Link replace to={`/${lang}/Previous/${params.id}/${match.game}`} className="font-bold hover:underline hover:text-blue-500">
                                                        <FormattedMessage id={`app.Previous.Result.Table.SongList`} defaultMessage='Song List' />
                                                    </Link>
                                                </td>
                                            </tr>
                                            : <tr key={match.id}>
                                                <td className="border-t-2 border-gray-200 px-4 py-3">{match.game}</td>
                                                <td className="border-t-2 border-gray-200 px-4 py-3">{match.type}</td>
                                                <td className="border-t-2 border-gray-200 px-4 py-3">{match.rule}</td>
                                                <td className="border-t-2 border-gray-200 px-4 py-3 font-bold">
                                                    {JSON.parse(match.participants).map((team, $key) => {
                                                        const links = team.split(',').map((wrestler, index) => {
                                                            return <span key={index}> {index !== 0 ? ' , ' : ''} {$key !== 0 && index === 0 ? ' / ' : ''}
                                                                <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                    <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={`${wrestler}`} />
                                                                </Link>
                                                            </span>
                                                        })

                                                        return links
                                                    })}
                                                </td>
                                                <td className={`border-t-2 border-gray-200 px-4 py-3 ${match.result === 'Draw' ? 'text-yellow-500' : 'text-red-500'}`}>
                                                    {
                                                        match.result.split(",").map((wrestler, index) => {
                                                            return <span key={index}> {index !== 0 ? ' , ' : ''}
                                                                <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                    <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                                </Link>
                                                            </span>
                                                        })
                                                    }
                                                </td>
                                                <td className="border-t-2 border-gray-200 px-4 py-3">
                                                    <Link replace to={`/${lang}/Previous/${params.id}/${match.game}`} className="font-bold hover:underline hover:text-blue-500">
                                                        <FormattedMessage id={`app.Previous.Result.Table.SongList`} defaultMessage='Song List' />
                                                    </Link>
                                                </td>
                                            </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </div>

    )
}

function SongList(props) {
    const { matches } = props

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState({}) //取得歌曲清單
    const [formOpen, setFormOpen] = useState(false)
    // const [ganeList, setGameList] = useState()
    const gameInput = useRef(undefined);
    const linkInput = useRef(undefined);
    const params = useParams()

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`https://hfzapi.surai.xyz/api/${page}/getSongList/${params.id}/${params.game}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(0)
                makeMatchesAry()
            } catch (error) {
                console.log(error)
            }
        }

        getData('Previous')
    }, [params.game])

    function openForm(e) {
        if (e.target.innerText === 'add') e.target.innerText = "close"
        else e.target.innerText = 'add'
        setFormOpen(!formOpen)
    }

    function makeMatchesAry() {
        const { matchesLength } = props
        const matchAry = []

        for (let i = 1; i <= matchesLength; i++) {
            matchAry.push(i)
        }
    }

    async function sentNewSong() {
        const { id: stream_id } = params
        const { value: link } = linkInput.current
        const { value: game_id } = gameInput.current

        if (game_id === 'Game') {
            return alert('please choose a match')
        }

        if (link.length === 0) {
            return alert('please enter youtube video id')
        }

        try {
            const response = await fetch(`https://hfzapi.surai.xyz/api/addSong/${stream_id}/${game_id}/${link}`, { method: 'post' })
            const result = await response.json()

            linkInput.current.value = ''
            alert(result);

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="w-full">
            <div className="flex flex-col text-center w-full pt-24 mb-10">
                <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                    <FormattedMessage id={`app.Previous.Result.SongList.Title`} defaultMessage={`Song List`} />

                </h2>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    <FormattedMessage id={`app.Previous.Result.SongList.Description`} defaultMessage={`All the songs played in the match.`} />

                </p>
            </div>
            {
                isLoading
                    ? <Loading />
                    : <div className="w-full">
                        <div className="w-full text-right">
                            <div onClick={(e) => { openForm(e) }} className="text-blue-500 cursor-pointer">add</div>
                        </div>

                        <div className={`w-full text-center py-10 ${formOpen ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col text-center w-full my-10">
                                <h2 className="sm:text-5xl text-4xl font-medium title-font mb-4">
                                    <FormattedMessage id={`app.Previous.Result.Edit.Title`} defaultMessage={`Add song to the list`} />
                                </h2>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                    <FormattedMessage id={`app.Previous.Result.Edit.Description`} defaultMessage={`If you know the song, you can add it to the list, but YOUTUBE VIDEO ONLY`} />
                                </p>
                            </div>


                            <form className="w-full max-w-lg mx-auto">
                                <div className="md:flex md:items-center">
                                    <div className="w-full">
                                        <label className="block text-gray-500 font-bold text-center mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                            <FormattedMessage id={`app.Previous.Result.Edit.SubTitle`} defaultMessage={`Play at game:`} />
                                        </label>
                                    </div>
                                </div>
                                <div className="inline-block relative w-64 my-10">
                                    <select ref={gameInput} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected hidden>Game</option>
                                        {
                                            matches.map((match) => {
                                                return (
                                                    <option value={match.game}>{match.game}</option>
                                                )
                                            })
                                        }

                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="w-full">
                                        <label className="block text-gray-500 font-bold text-center mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                            Youtube embed link:
                                        </label>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="w-full">
                                        <input ref={linkInput} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="embed id" defaultValue={''} />
                                    </div>
                                </div>
                                <div className="mx-auto py-3">
                                    <button onClick={() => sentNewSong()} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        <FormattedMessage id={`app.Previous.Result.Edit.Add`} defaultMessage={`Add`} />
                                    </button>
                                </div>
                            </form>
                            <span className='text-red-500 font-bold'>
                                <FormattedMessage id={`app.Previous.Result.Edit.Question`} defaultMessage={`Q: how to get youtube video id?`} /> <br />
                                <FormattedMessage id={`app.Previous.Result.Edit.Answer1`} defaultMessage={`A: click "Share" button below youtube video, youtube will give you an embed code,`} /> <br />
                                <FormattedMessage id={`app.Previous.Result.Edit.Answer2`} defaultMessage={`for example: "https://youtu.be/ViXSzU8UjbI", "ViXSzU8UjbI" is the video id, just copy the id and paste in the input and then click "Add" button, the song will add to the list.`} />


                            </span>
                        </div>
                        <div className="w-full flex flex-wrap -m-2 text-center">
                            {
                                isLoading ? <Loading /> : data.length === 0 ? <h3 className='sm:text-5xl text-4xl font-medium title-font mb-4 w-full'><FormattedMessage id={`app.Previous.Result.SongList.None`} defaultMessage={`No result! Maybe we'll add it later :)`} /></h3> : data.map((song) => {

                                    return (
                                        <div key={song.id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                            <div className="w-full border-gray-200 border p-4 rounded-lg">
                                                <p className="text-xl md:text-2xl pb-3"><FormattedMessage id={`app.Previous.Result.SongList.PlayedAt`} defaultMessage={`played at game `} />{song.played_at}</p>
                                                <div className="flex items-center">
                                                    <iframe width="100%" height="315" src={`https://www.youtube-nocookie.com/embed/${song.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>

                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Content)