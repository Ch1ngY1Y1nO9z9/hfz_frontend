import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(CharactersDetail)

function CharactersDetail(props) {
    const { data, data: { detail }, updateHandler, pageName, lang } = props

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
                    data.outfits?.map((outfit) => {
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

                    {
                        data.isHolochampion === 1 &&
                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-crown text-yellow-500" title="HOLO CHAMPION"></i>
                            <FormattedMessage id={`app.${pageName}.CHAMPION`} defaultMessage='HOLO CHAMPION' />
                        </div>
                    }

                    {
                        data.isTagTeamChampion === 1 &&
                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-tags text-yellow-500" title="TAG TEAM CHAMPION"></i>
                            <FormattedMessage id={`app.${pageName}.TAGCHAMPION`} defaultMessage='TAG TEAM CHAMPION' />
                        </div>
                    }

                    {
                        data.isQoj === 1 &&
                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fab fa-accessible-icon text-yellow-500" title="QUEEN OF JOBBER"></i>
                            <FormattedMessage id={`app.${pageName}.Qoj`} defaultMessage='QUEEN OF JOBBER' />
                        </div>
                    }

                    {
                        data.haveBriefcase === 1 &&
                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-briefcase text-blue-500" title="briefcase owner"></i>
                            <FormattedMessage id={`app.${pageName}.BRIEFCASE`} defaultMessage='BRIEFCASE OWNER' />
                        </div>
                    }

                    {
                        data.name_short === 'Miko' &&
                        <i className="fas fa-baby text-pink-500" title="ばぶばぶ..."></i>
                    }

                    {
                        data.name_short === 'Luna' &&
                        <i className="fas fa-baby text-pink-500" title="ばぶばぶ..."></i>
                    }

                    {
                        data.name_short === 'Rushia' &&
                        <i className="fas fa-book-dead" title="DOKI DOKI WAKU WAKU"></i>
                    }

                    {
                        data.name_short === 'Botan' &&
                        <i className="fas fa-shopping-cart" title="Master of shopping-cart"></i>
                    }

                    {
                        data.name_short === 'Yagoo' &&
                        <i className="fas fa-pray" title="Kneel"></i>
                    }

                    <FormattedMessage id={`app.Characters.${data.name_short}`} defaultMessage={data.name_en} />

                </h1>
                <div className="flex mb-4">
                    <span className="flex items-center">
                        <span className="text-gray-600 ml-1">@ {data.aka}</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        {
                            data.twitter_link !== '' &&
                            <a rel="noreferrer" target="_blank" href={data.twitter_link} className=" text-[#1da1f2]">
                                <i className="fab fa-twitter"></i>
                            </a>
                        }
                        {
                            data.youtube_link !== '' &&
                            <a rel="noreferrer" target="_blank" href={data.youtube_link}
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
                            {detail.debut}
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
                    <br /><FormattedMessage id={`app.${pageName}.tagwith`} defaultMessage='team mate' />: {
                        !detail.tag_with
                            ? <span className="font-bold">-</span>
                            : detail.tag_with.split(',').map((mate, index, ary) => {
                                return (
                                    <span key={index} onClick={() => { updateHandler(mate) }} className="font-bold hover:text-blue-500 hover:underline cursor-pointer">
                                        <FormattedMessage id={`app.Characters.${mate}`} defaultMessage={mate} /> {ary.length !== 1 && ary.length - 1 !== index && ',' }
                                    </span>
                                )
                            })
                    }

                </p>
            </div>
        </div>
    )
}