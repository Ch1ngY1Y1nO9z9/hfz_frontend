import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入固定資料
import { MembersList } from '../../../staticData'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import axios from '../../../api/getDataFunction'
import useAxiosFunction from '../../../hooks/useAxiosFunction'

import Loading from '../../Loading'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Members)

function Members(props) {
    const { lang, light, pageName } = props
    const navigate = useNavigate();
    const paramas = useParams();
    const [members, setMembers] = useState([])

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: `/api/${pageName}/getWrestlers`,
        requestConfig: {
            data: {}
        }
    })

    useEffect(() => {
        // checkLive()

        appendLiveData()

        // 檢查是否有資料的重導向
        checkData(paramas.id)
    }, [data, paramas.id])

    const [liveList, listError, listLoading, axiosFetch] = useAxiosFunction()

    // 抓直播資料
    const checkLive = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'get',
            url: `https://schedule.hololive.tv/api/list/7`,
            requestConfig: {
                data: {}
            }
        })
    }

    // 將直播資料插入對應的V
    function appendLiveData() {
        liveList.dateGroupList?.forEach((list) => {
            let Live = []
            if (list.videoList) {
                Live = list.videoList.filter((schedule) => {
                    return schedule.isLive
                })
            }

            Live.forEach((stream, index) => {
                const wrestler_id = MembersList.indexOf(stream.name)
                data.forEach((wrestler) => {
                    if (wrestler.id === wrestler_id) {
                        wrestler.liveDetail = Live[index]
                    }
                })
            })
        })
        
        fileterMember()
    }

    // 過濾顯示資料
    function fileterMember() {
        const result = data.filter((profile) => {
            if (paramas.id === 'All') {
                return profile
            }
            if (profile.gens !== null) {
                const gen = profile.gens.generations.replace(/\s+/g, '')
                return gen === paramas.id
            }

            return false
        })

        setMembers(result)
    }

    function checkData(query) {
        const generationAry = ['All', 'Gen0', 'Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'GAMERS', 'HoloX', 'HoloID', 'HoloMyth', 'INNK', 'ProjectHope', 'HoloCouncil']

        if (generationAry.indexOf(query) === -1) {
            alert('>:)')
            navigate(`/${lang}/Wrestlers/All`)
        }
    }

    return (
        <div className="w-full flex flex-wrap">
            {loading && <Loading />}
            {
                members?.map((member) => {
                    return (
                        <div key={member.id} className={"rounded-lg bg-cover bg-center group w-full lg:w-1/2" + (member.liveDetail ? ' text-white' : '') + (member.isVisible === 0 && light ? ' hidden' : ' block') + (light ? ' hover:bg-gray-200' : ' hover:bg-gray-700')} style={member?.liveDetail && { backgroundImage: `url(${member?.liveDetail.thumbnail})` }}>
                            <div className={"h-full flex sm:flex-row flex-col p-4 items-center sm:justify-start justify-center text-center sm:text-left rounded-lg" + (member.liveDetail ? ' bg-black/70' : '') }>
                                <Link to={`/${lang}/Wrestlers/Profile/${member.name_short}`} className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 overflow-hidden">
                                    <img width="100%" className={`rounded-lg object-cover object-center transition ease-in-out duration-300 group-hover:-translate-y-1 group-hover:scale-110`} alt="team" src={`${!member.liveDetail ? member.avatar : member.liveDetail.talent.iconImageUrl}`} />
                                </Link>
                                <div className="flex-grow sm:pl-8">
                                    <Link to={`/${lang}/Wrestlers/Profile/${member.name_short}`}>
                                        <h2 className="title-font text-lg font-bold">
                                            <FormattedMessage id={`app.Characters.${member.name_short}`} defaultMessage={member.name_en} />
                                            {member?.liveDetail && <FormattedMessage id={`app.Profiles.streaming`} defaultMessage={`【STREAMING】`} />}
                                        </h2>
                                        <h3 className={"mb-3 " + (!member.liveDetail ? 'text-gray-500' : 'text-white') }>@ {member.aka}</h3>
                                        <p className="mb-4 break-all">
                                            {!member.liveDetail && `${!member.spamming ? '-' : member.spamming}`}
                                            {member.liveDetail && `${member.liveDetail.title}`}
                                        </p>
                                    </Link>
                                    <span className="inline-flex">
                                        {
                                            member.twitter_link &&
                                            <a rel="noreferrer" target="_blank" href={member.twitter_link} className='text-[#1da1f2]'>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        }
                                        {
                                            member.youtube_link &&
                                            <a rel="noreferrer" target="_blank" href={`${!member.liveDetail ? member.youtube_link : member.liveDetail.url}`} className="ml-2 text-[#ff0000] relative">
                                                <i className={`fab fa-youtube ${member.liveDetail !== null && 'animate-pulse'}`}></i>
                                            </a>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}