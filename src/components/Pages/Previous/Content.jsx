import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'

import Matches from './Matches'
import SongList from './SongList'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'

import Loading from '../../Loading'


export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Content)

function Content(props) {
    const { lang, light } = props

    const params = useParams()
    const navigate = useNavigate();
    const [currentGame, setCurrentGame] = useState(null)

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: `/api/Previous/getMatchResult/${params.id}`,
        requestConfig: {
            data: {}
        }
    })

    return (
        <section className={`min-h-screen pt-24 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container px-5 mx-auto flex flex-wrap">
                <div onClick={() => { navigate(`/${lang}/Previous`) }} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-10 md:mb-20 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.Previous.Result.Back`} defaultMessage={`Back to Previous Shows`} />

                </div>
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="sm:text-5xl text-4xl font-medium title-font mb-4">
                        EP. {params?.id}
                        <FormattedMessage id={`app.Previous.Result.Title`} defaultMessage={` Match result`} />
                    </h2>
                </div>
                <div className="w-full mx-auto overflow-auto">
                    {loading && <Loading />}
                    {!loading && !error && data && <Matches data={data} setCurrentGame={setCurrentGame} />}
                </div>

                {params['*'] !== '' && !loading && !error && data &&
                    <Routes>
                        <Route path="/:game" element={<SongList matches={data} currentGame={currentGame} />} />
                    </Routes>
                }


            </div>
        </section>
    )
}
