import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import CharactersDetail from './Content/CharactersDetail'
import Fanbase from './Content/Fanbase'
import MatchRecords from './Content/MatchRecords'
import WinLoseRate from './Content/WinLoseRate'
import MatchClips from './Content/MatchClips'

import Loading from '../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import axios from '../../../api/getDataFunction'
import useAxiosFunction from '../../../hooks/useAxiosFunction'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Profiles)

function Profiles(props) {

    const { lang, light, pageName } = props

    const [updatePage, setPageUpdate] = useState(false);

    const params = useParams()
    const navigate = useNavigate();

    const [data, error, loading, axiosFetch] = useAxiosFunction()

    useEffect(() => {
        getData()

        backToTop()
    }, [updatePage, params.name])

    function getData() {
        axiosFetch({
            axiosInstance: axios,
            method: 'get',
            url: `/api/${pageName}/get${pageName}/${params.name}`,
            requestConfig: {
                data: {}
            }
        })
    }

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
                <div onClick={() => checkRoute() } className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.${pageName}.Back`} defaultMessage='Back to Wrestlers Profile' />
                </div>
            </div>

            {loading && <Loading />}
            {
                !loading && !error && !data.detail && params.name === 'JohnCena' &&
                <div className='flex justify-center'>
                    <iframe width="720" height="480" src="https://www.youtube.com/embed/JYhZTg6-SpY?&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            }
            {
                !loading && !error && !data.detail && params.name === 'BATTLER' &&
                <div className='flex justify-center'>
                    <iframe width="720" height="480" src="https://www.youtube.com/embed/pQDHcDeTCKg?&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            }
            {
                !loading && !error && data.detail &&
                <div>
                    <CharactersDetail
                        data={data}
                        updateHandler={updateHandler}
                    />
                    <Fanbase
                        name={data.detail.fan_name}
                    />
                    {
                        data.isVisible &&
                        <div>
                            <MatchRecords
                                name={params.name}
                                pageName={pageName}
                                updateHandler={updateHandler}
                            />
                            <WinLoseRate
                                name={params.name}
                                pageName={pageName}
                            />
                            <MatchClips
                                name={params.name}
                                clips={data.clips}
                                pageName={pageName}
                            />
                        </div>
                    }
                </div>

            }
            {
                !loading && !error && !data.detail && params.name !== 'JohnCena' && params.name !== 'BATTLER' &&
                <div className='flex justify-center'>
                    :^)
                </div>
            }
        </section>
    )
}