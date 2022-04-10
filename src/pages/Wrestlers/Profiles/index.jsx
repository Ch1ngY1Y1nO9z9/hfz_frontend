import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


function Profiles(props) {

    const { lang: { lang }, light, pageName } = props

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState({}) //取得人物基本資料
    const [updatePage, setPageUpdate] = useState(false);

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        function getData(page) {
            fetch(`http://127.0.0.1:8000/api/${page}/get${page}/${params.name}`, { method: "post" })
                .then((result) => result.json())
                .then((result) => {
                    setData(result)
                    setisLoading(0)
                    backToTop()
                })
                .catch((error) => {
                    alert("WATAMAGE: :)")
                    navigate(`/${lang}/Wrestlers/All`)
                })
        }

        getData('Detail')

    }, [updatePage, params.name])

    function backToTop() {
        document.documentElement.scrollTop = 0;
    }

    function updateHandler(name) {
        if (name) navigate(`/${lang}/Wrestlers/Profile/${name}`)
        setPageUpdate(!updatePage)
    }

    // 取得前頁網址來判斷是否要單純回上頁或重新導向到ALL或指定期生畫面
    function checkRoute() {
        const prev_link = document.referrer

        if (prev_link === '') {
            navigate(`/${lang}/Wrestlers/All`)
        } else {
            if (prev_link.indexOf('All') === -1) {
                navigate(`/${lang}/Wrestlers/`)
            } else {
                navigate(-1)
            }
        }

    }


    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>

            <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
                <div onClick={() => { checkRoute() }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.${pageName}.Back`} defaultMessage='Back to Wrestlers Profile' />
                </div>
            </div>
            {
                isLoading
                    ? <Loading />
                    : !data.detail
                        ? params.name === 'JohnCena'
                            ? <div className='flex justify-center'>
                                <iframe width="720" height="480" src="https://www.youtube.com/embed/JYhZTg6-SpY?&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            : params.name === 'Battler' ? <div className='flex justify-center'>
                                <iframe width="720" height="480" src="https://www.youtube.com/embed/pQDHcDeTCKg?&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div> : navigate(`/${lang}/Wrestlers/All`)
                        : <div>
                            <CharactersDetail data={{ data, ...props, updateHandler }} />
                            <Fanbase data={{ name: data.detail.fan_name, ...props }} />
                            {
                                !data.isVisible
                                    ? ''
                                    : <div>
                                        <MatchRecords data={{ name: params.name, pageName, updateHandler, lang }} />
                                        <WinLoseRate data={{ name: params.name, pageName }} />
                                        <MatchClips data={{ name: params.name, clips: data.clips, pageName }} />
                                    </div>
                            }
                        </div>

            }
        </section>
    )
}

function CharactersDetail(props) {
    const { data, data: { detail }, updateHandler, pageName, lang: { lang } } = props.data

    const [outfit, setOutfit] = useState(data.picture)
    const [outfitName, setOutfitName] = useState('Default')

    function changOutfit(e, Name) {
        const outfitpath = e.target.getAttribute('src');
        setOutfit(outfitpath);
        setOutfitName(Name)
    }

    useEffect(() => {
        setOutfit(data.picture)
    }, [data])

    return (
        <div className="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
            <div className="py-5 px-10 mb-10 md:mb-0 lg:flex hidden flex-col h-[600px]">
                {
                    data.outfits.length === 0
                        ? ''
                        : data.outfits.map((outfit) => {
                            return (
                                <div key={outfit.id} className="relative mb-5 group outfit">
                                    <div className="border-4 border-gray-500 rounded-full overflow-hidden w-[150px] h-[150px] border-sky-500">
                                        <img onClick={(e) => { changOutfit(e, outfit.outfit_name) }} className={`w-full ${outfitName}`} src={outfit.image_link} alt={outfit.name_short} />
                                    </div>
                                    <span className="absolute bottom-0 right-0 text-black text-xl">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>

                            )
                        })
                }
            </div>
            <div className='mb-10 md:mb-0'>
                <img id="outfit" className="object-cover object-center rounded mx-auto md:mx-0 md:ml-auto h-[400px] md:h-[600px]" alt="hero" src={outfit} />
                <h3 className='text-lg title-font tracking-widest text-center'>{data.name_short} - {outfitName}</h3>
            </div>
            <div
                className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h2 className="text-sm title-font text-gray-500 tracking-widest ml-1">
                    {
                        data.gens
                            ? <Link to={`/${lang}/Wrestlers/${data.gens.generations.replace(/\s+/g, '')}`} className="font-bold hover:underline hover:text-blue-500">
                                <FormattedMessage id={`app.Profiles.${data.gens.generations.replace(/\s+/g, '')}`} defaultMessage={data.gens.generations} />
                            </Link>
                            : 'Cover'
                    }

                </h2>


                <h1 className="text-3xl title-font font-medium mb-1 font-bold mt-1">

                    {data.isHolochampion
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-crown text-yellow-500" title="HOLO CHAMPION"></i>
                            <FormattedMessage id={`app.${pageName}.CHAMPION`} defaultMessage='HOLO CHAMPION' />
                        </div> : ''
                    }

                    {data.isTagTeamChampion
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-tags text-yellow-500" title="TAG TEAM CHAMPION"></i>
                            <FormattedMessage id={`app.${pageName}.TAGCHAMPION`} defaultMessage='TAG TEAM CHAMPION' />
                        </div> : ''
                    }

                    {data.isQoj
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fab fa-accessible-icon text-yellow-500" title="QUEEN OF JOBBER"></i>
                            <FormattedMessage id={`app.${pageName}.Qoj`} defaultMessage='QUEEN OF JOBBER' />
                        </div> : ''
                    }

                    {data.haveBriefcase
                        ? <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-briefcase text-blue-500" title="briefcase owner"></i>
                            <FormattedMessage id={`app.${pageName}.BRIEFCASE`} defaultMessage='BRIEFCASE OWNER' />
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

                    <FormattedMessage id={`app.Characters.${data.name_short}`} defaultMessage={data.name_en} />

                </h1>
                <div className="flex mb-4">
                    <span className="flex items-center">
                        <span className="text-gray-600 ml-1">@ {data.aka}</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        {
                            !data.twitter_link
                                ? ''
                                : <a rel="noreferrer" target="_blank" href={`${data.twitter_link}`} className=" text-[#1da1f2]">
                                    <i className="fab fa-twitter"></i>
                                </a>
                        }
                        {
                            !data.twitter_link
                                ? ''
                                : <a rel="noreferrer" target="_blank" href={`${data.youtube_link}`}
                                    className="ml-2 text-[#ff0000]">
                                    <i className="fab fa-youtube"></i>
                                </a>
                        }
                    </span>
                </div>

                <p>
                    <FormattedMessage id={`app.${pageName}.debut`} defaultMessage='Debut' />:
                    <span className="font-bold">
                        <Link to={`/${lang}/Previous/${detail.debut.split(' ')[1]}`}>
                            {` ${detail.debut}`}
                        </Link>
                    </span>
                </p>
                <p>
                    <br /><FormattedMessage id={`app.${pageName}.birthday`} defaultMessage='Birthday' />: <span className="font-bold">
                        <FormattedMessage id={`app.Characters.birthday.${data.name_short}.${detail.birth_day.replace(/\s+/g, '').toLowerCase()}`} defaultMessage={detail.birth_day} />
                    </span>
                </p>
                <p>
                    <br /><FormattedMessage id={`app.${pageName}.weight`} defaultMessage='Weight' />: <span className="font-bold">{detail.weight} <FormattedMessage id={`app.${pageName}.lb`} defaultMessage='lb' /></span>
                </p>
                <p>
                    <br /><FormattedMessage id={`app.${pageName}.fans`} defaultMessage='Fan base name' />: <span className="font-bold">
                        {detail.fan_name}
                    </span>
                </p>
                <p>
                    <br /><FormattedMessage id={`app.${pageName}.sig`} defaultMessage='Signature' />: <span className="font-bold">
                        {detail.signature}
                    </span>
                </p>
                <p>
                    <FormattedMessage id={`app.${pageName}.finisher`} defaultMessage='Finisher' />: <span className="font-bold">
                        {detail.finisher}
                    </span>
                </p>

                <p>
                    <br />
                    <FormattedMessage id={`app.${pageName}.teamName`} defaultMessage='tag team name' />:
                    <span className="font-bold"> {detail.team_name === null ? '-' : detail.team_name} </span>
                </p>
                <p>
                    <br /><FormattedMessage id={`app.${pageName}.tagwith`} defaultMessage='team mate' />:{
                        !detail.tag_with
                            ? <span className="font-bold">-</span>
                            : detail.tag_with.split(',').map((mate, index, ary) => {
                                return (
                                    <span key={index} onClick={() => { updateHandler(mate) }} className="font-bold hover:text-blue-500 hover:underline cursor-pointer">
                                        <FormattedMessage id={`app.Characters.${mate}`} defaultMessage={` ${mate}`} /> {ary.length !== 1 && ary.length - 1 !== index ? ',' : ''}
                                    </span>
                                )
                            })
                    }

                </p>
            </div>
        </div>
    )
}

function Fanbase(props) {
    const { name, light, pageName } = props.data

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState(null) //取得粉絲基本資料

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getFanbase/${name}`, { method: "post" })
                const result = await getData.json()

                setData(result.data)
                setisLoading(0)
            } catch (error) {
                console.log(error)
                setisLoading(1)
            }
        }
        setisLoading(1)
        getData('Detail')
    }, [name])

    return (
        <div className={`flex flex-col text-center w-full mb-10 lg:mb-20 ${light ? 'hidden' : 'block'}`}>
            <div className="container mx-auto">
                {
                    isLoading
                        ? <Loading />
                        : !data
                            ? ''
                            : <div className="flex px-5 pb-12 md:flex-row flex-col items-center"> <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img className="object-cover object-center rounded mx-auto md:mx-0 md:ml-auto h-[400px] md:h-[600px]" alt="hero" src={data.img} />
                            </div>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">

                                    <h1 className="text-3xl title-font font-medium mb-1 font-bold mt-1">
                                        <FormattedMessage id={`app.${pageName}.fans`} defaultMessage='Fanbase' />: <FormattedMessage id={`app.${pageName}.fanbase.${data.fan_name.replace(/\s+/g, '')}`} defaultMessage={data.fan_name} />
                                    </h1>
                                    <p>
                                        <br /><FormattedMessage id={`app.${pageName}.weight`} defaultMessage='WEIGHT' />: <span className="font-bold">{data.weight} <FormattedMessage id={`app.${pageName}.lb`} defaultMessage='lb' /></span>
                                    </p>
                                    <p>
                                        <br /><FormattedMessage id={`app.${pageName}.height`} defaultMessage='HEIGHT' />: <span className="font-bold">{data.height}"</span>
                                    </p>
                                    <p>
                                        <br /><FormattedMessage id={`app.${pageName}.sig`} defaultMessage='Signature' />: <span className="font-bold"> {data.signature} </span>
                                    </p>
                                    <p>
                                        <FormattedMessage id={`app.${pageName}.finisher`} defaultMessage='Finisher' />: <span className="font-bold"> {data.finisher} </span>
                                    </p>
                                </div>
                            </div>
                }
            </div>
        </div>


    )
}

function MatchRecords(props) {
    const { name, pageName, updateHandler, lang, light } = props.data

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

function WinLoseRate(props) {
    const { light } = props
    const { name, pageName } = props.data

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState({}) //取得人物基本資料

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getWinLoseRate/${name}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(0)
            } catch (error) {
                console.log(error)
            }
        }

        getData('Detail')
    }, [])

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className={`text-5xl font-medium title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>
                    <FormattedMessage id={`app.${pageName}.WinLoseRatio`} defaultMessage='Win Lose Ratio' />
                </h1>
            </div>
            <div className="flex flex-col">
                {
                    isLoading
                        ? <Loading />
                        : <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                            <div className="rounded overflow-hidden shadow bg-white text-black mx-2 w-full">
                                <div className="overflow-y-auto w-full">
                                    <table className="w-full text-center h-[250px]">
                                        <thead className="bg-gray-400 text-white text-normal">
                                            <tr>
                                                <th scope="col">
                                                    <FormattedMessage id={`app.${pageName}.Type`} defaultMessage='Type' />
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id={`app.${pageName}.Total`} defaultMessage='Total' />
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id={`app.${pageName}.Win`} defaultMessage='Win' />
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id={`app.${pageName}.Lose`} defaultMessage='Lose' />
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id={`app.${pageName}.Draw`} defaultMessage='Draw' />
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id={`app.${pageName}.Rate`} defaultMessage='Rate' />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="font-bold">
                                                    <FormattedMessage id={`app.${pageName}.all`} defaultMessage='all' />
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
                                                <td className="font-bold">
                                                    <FormattedMessage id={`app.${pageName}.1v1`} defaultMessage='1 v 1' />
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
                                                <td className="font-bold">
                                                    <FormattedMessage id={`app.${pageName}.2v2`} defaultMessage='2 v 2' />
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
                                                <td className="font-bold">
                                                    <FormattedMessage id={`app.${pageName}.MULTi`} defaultMessage='MULTi' />
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
    const { light}  = props
    const { clips, pageName } = props.data


    return (
        <div className="container px-5 pb-24 mx-auto hidden sm:block">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className={`text-5xl font-medium title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>
                    <FormattedMessage id={`app.${pageName}.Clips`} defaultMessage='Clips' />
                </h1>
            </div>
            <div className="flex flex-wrap -m-4">

                {
                    clips.map((clip) => {
                        return <div key={clip.id} className="p-4 lg:w-1/2 w-full">
                            <div className={`flex rounded-lg h-full p-8 flex-col ${light ? 'bg-gray-100' : 'bg-gray-900'}`}>
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        {
                                            clip.type === 'finisher'
                                                ? <i className="fas fa-hand-sparkles"></i>
                                                : clip.type === 'signature'
                                                    ? <i className="fas fa-hand-middle-finger"></i>
                                                    : <i className="fas fa-fist-raised"></i>
                                        }
                                    </div>
                                    <h2 className={`text-lg title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>{clip.clip_title}</h2>
                                </div>
                                <div className="flex-grow">
                                    <iframe width="100%" height="375" src={`https://www.youtube-nocookie.com/embed/${clip.embed_code}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Profiles)
