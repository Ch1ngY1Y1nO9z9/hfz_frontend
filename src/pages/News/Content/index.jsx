import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PagesTitle from '../../../components/PagesTitle'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

function Content(props) {

    const [data, setData] = useState([]) //取得頁面資料

    const paramas = useParams(); //取得當前新聞的ID

    const [value, setValue] = useState(); //儲存Quill的文字內容

    useEffect(() => {
        const getData = async (page) => {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/NewsContent/get${page}/${paramas.id}`, { method: "post" })
                const result = await getData.json()

                setData(result)

                const delta = Quill.clipvoard.conver()

            } catch (error) {
                console.log(error)
            }
        }

        getData('NewsContent')//Fetch取得資料
    }, [])

    const navigate = useNavigate();

    return (
        <section className={`min-h-screen pt-12 ${props.light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle page={{ title: 'FIGHTZ NEWS', description: 'All the HolofightZ news, fan arts or some original content will be here.', pageName: props.pageName }} />

            <div className="container mx-auto flex px-5 items-center justify-center flex-col">

                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data.title}<br /></h1>
                    {
                        data.type === 'fan_arts' ? <div>
                            <img width="100%" src={data.img} alt="fan_arts" />

                        </div> : data.video_from === 'youtube' ? <div style={{ width: '100%', height: '0px', position: 'relative', paddingBottom: '56.250%' }}>
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.content}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ position: "absolute" }}></iframe>
                        </div> : data.video_from === 'streamable' ? <div style={{ width: '100%', height: '0px', position: 'relative', paddingBottom: '56.250%' }}>
                            <iframe title="Streamable player" src={`https://streamable.com/e/${data.content}`} frameborder="0" width="100%" height="100%" allowfullscreen style={{ width: "100%", height: "100%", position: "absolute" }}></iframe>
                        </div> : ''
                    }
                    <br />
                    <p className="py-6">
                        {data.content}
                    </p>







                </div>
            </div>
            <div className="flex flex-col text-center w-full mb-5">
                <div onClick={() => { navigate(-1) }} className="mx-auto hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <i className="fas fa-arrow-left"></i> Back to HFZ News
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Content)
