import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入函式版axios
import useAxiosFunction from '../../../hooks/useAxiosFunction'
import sendData from '../../../api/getDataFunction'

export default function SongListForm(props) {
    const { formOpen, matches } = props

    const gameInput = useRef(undefined);
    const linkInput = useRef(undefined);
    const params = useParams()

    const [posts, error, loading, axiosFetch] = useAxiosFunction();

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

        // 呼叫axios實例去送資料
        axiosFetch({
            axiosInstance: sendData,
            method: 'POST',
            url: `http://127.0.0.1:8000/api/addSong/${stream_id}/${game_id}/${link}`,
            requestConfig: {
                data:{}
            }
        })

        // 回傳的值會存在posts中, 在拿出來做後續判斷
        linkInput.current.value = ''
        alert(posts);

        alert(posts.msg)
    }
    return (
        <div className={`w-full text-center py-10 bg-gray-100 ${formOpen ? 'block' : 'hidden'}`}>
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
                    <select defaultvaluse="Game" ref={gameInput} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option hidden>Game</option>
                        {
                            matches?.map((match, key) => {
                                return (
                                    <option key={key} value={match?.game}>{match?.game}</option>
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
    )
}
