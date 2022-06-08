import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import SongListForm from './SongListForm'

import Loading from '../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import axios from '../../../api/getDataFunction'
import useAxiosFunction from '../../../hooks/useAxiosFunction'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(SongList)

function SongList(props) {
    const { matches,currentGame } = props

    const [formOpen, setFormOpen] = useState(false)

    const params = useParams()

    // const [current, setCurrent] = useState(params.game)

    function openForm(e) {
        if (e.target.innerText === 'add') e.target.innerText = "close"
        else e.target.innerText = 'add'
        setFormOpen(!formOpen)
    }

    const [data, error, loading, axiosFetch] = useAxiosFunction()

    const getData = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'post',
            url: `/api/Previous/getSongList/${params.id}/${params.game}`,
            requestConfig: {
                data: {}
            }
        })
    }

    useEffect(()=>{
        getData()
    },[currentGame])

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

            <div className="w-full">
                <div className="w-full text-right">
                    <div onClick={(e) => { openForm(e) }} className="text-blue-500 cursor-pointer">add</div>
                </div>

                <SongListForm formOpen={formOpen} matches={matches} />

                {loading && <Loading />}
                <div className={`w-full flex flex-wrap -m-2 text-center ${ loading && 'hidden' }`}>
                    {!loading && !error && data && data.length === 0
                        ? <h3 className='sm:text-5xl text-4xl font-medium title-font mb-4 w-full'><FormattedMessage id={`app.Previous.Result.SongList.None`} defaultMessage={`No result! Maybe we'll add it later :)`} /></h3>
                        : data.map((song) => {

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
            
        </div>
    )
}
