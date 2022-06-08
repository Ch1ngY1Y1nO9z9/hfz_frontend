import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import ProfileLinks from '../../ContentLinks'
import PagesTitle from '../../PagesTitle'

import Loading from '../../Loading'

// 引入卡片組件
import NewsCards from './NewsCards'

// 引入固定資料
import { NewsType } from '../../../staticData'

// 接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'


export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Arts)

function Arts(props) {
    const { lang, light, pageName } = props

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: '/api/Arts/getArts/All',
        requestConfig: {
            data: {}
        }
    })

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'FIGHTZ ARTS', description: 'All the HolofightZ fan arts or some original content will be here.', pageName, light }} />

            <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                <nav className="flex-grow flex flex-wrap md:pr-20 text-center order-first">
                    {
                        NewsType.map((type) => {
                            return (
                                <ProfileLinks key={type.id} to={'/' + lang + type.link} light={light.toString()}>
                                    <FormattedMessage id={`app.${type.langId}`} defaultMessage={type.name} />
                                </ProfileLinks>
                            )
                        })
                    }
                </nav>
            </div>

            <div className="container mx-auto pb-12">
                <hr />
            </div>
            {loading && <Loading />}
            {
                !loading && !error && data &&
                <Routes>
                    <Route path="/:type" element={<NewsCards data={ data } />} />
                    <Route path="/:type/:page" element={<NewsCards data={ data } />} />
                    <Route path="/*" element={<Navigate to={`/${lang}/Arts/All/1`} />} />
                </Routes>
            }

        </section>
    )
}