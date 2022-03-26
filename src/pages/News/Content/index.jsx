import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PagesTitle from '../../../components/PagesTitle'

import Loading from '../../../components/Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

function Content(props) {
    const { light, pageName } = props
    const navigate = useNavigate();

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState([]) //取得頁面資料

    const paramas = useParams(); //取得當前新聞的ID

    useEffect(() => {
        const getData = async (page) => {
            try {
                const getData = await fetch(`https://hfzapi.surai.xyz/api/Arts/get${page}/${paramas.id}`, { method: "post" })
                const result = await getData.json()

                setData(result)
                setisLoading(0)
            } catch (error) {
                console.log(error)
            }
        }

        getData('ArtsContent')//Fetch取得資料
    }, [])

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'FIGHTZ ARTS', description: 'All the fan arts or some original content will be here.', pageName, light }} />

            {
                isLoading
                    ? <Loading />
                    : <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-600">{data.title}<br /></h1>
                            {
                                data.type === 'fan_arts'
                                    ? <div>
                                        <img width="100%" src={data.img} alt="fan_arts" />
                                    </div>
                                    : <div style={{ width: '100%', height: '0px', position: 'relative', paddingBottom: '56.250%' }}>
                                        <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${data.content}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; gyroscope" allowFullScreen style={{ position: "absolute" }}></iframe>
                                    </div>
                            }
                            <br />
                            <p className="py-6">
                                {data.type !== 'Promote' ? data.content : ''}
                            </p>
                        </div>
                    </div>
            }

            <div className="flex flex-col text-center w-full mb-5">
                <div onClick={() => { navigate(-1) }} className="mx-auto hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <i className="fas fa-arrow-left"></i>
                    <FormattedMessage id={`app.News.Content.Back`} defaultMessage={`Back to HFZ News`} />
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Content)
