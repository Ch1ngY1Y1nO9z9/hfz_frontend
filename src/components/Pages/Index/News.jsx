import React from 'react'
import { Link } from 'react-router-dom'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'

// 讀取動畫樣板
import Loading from '../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(News)

function News(props) {
    const { pageName, light, lang } = props

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: '/api/Index/getIndexArts',
        requestConfig: {
            data: {}
        }
    })

    const Today = new Date();
    const date = Today.getFullYear() + '/' + (Today.getMonth() + 1) + '/' + Today.getDate()

    return (
        <section className={`py-8 ${light ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    <FormattedMessage id={`app.${pageName}.Arts`} defaultMessage='Fan arts' />
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="w-full flex flex-wrap justify-center">
                    {loading && <Loading />}
                    {!loading && !error && data?.map((Arts) => {
                        return (
                            <article key={Arts.id} className="p-4 lg:w-1/3 w-full">
                                <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xl title-font font-medium mb-1 text-blue-400">
                                    </h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        {Arts.title}
                                    </h1>
                                    <img className="mx-auto" height='150px' src={Arts.thumbnail} alt="" />
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        {
                                            date === Arts.date ? <span className="text-white bg-red-600 px-2 inline-flex items-center leading-none text-sm">
                                                New!
                                            </span> : ''
                                        }
                                        <span className="mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 text-black">
                                            Date: {Arts.date}
                                        </span>
                                        <Link to={`/${lang}/Arts/${Arts.id}`} className="hover:text-orange-600 text-indigo-500 inline-flex items-center">
                                            <FormattedMessage id={`app.${pageName}.ReadMore`} defaultMessage='Read More' />
                                            <i className="fas fa-arrow-right ml-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                    {!loading && !error && !data && <FormattedMessage id={`app.${pageName}.ArtsSectionError`} defaultMessage="WE CAN'T FIND ANY FAN ARTS FOR NOW, PLEASE WAIT" />}
                </div>
            </div>
        </section>
    )
}

