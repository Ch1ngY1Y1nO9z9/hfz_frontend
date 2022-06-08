import React from 'react'
import { Link } from 'react-router-dom'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 讀取動畫樣板
import Loading from '../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Ranking)

function Ranking(props) {
    const { pageName, light, lang } = props

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: '/api/Index/getIndexRank',
        requestConfig: {
            data: {}
        }
    })

    return (
        <section className={`py-8 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <div className="flex flex-wrap w-full gray_800 text-gray-800">
                    {loading && <Loading />}
                    {
                        !loading && !error && data && data?.map((profile) => {
                            return (
                                <div key={profile.id} className="p-2 md:p-4 md:w-1/2 w-full">
                                    <div className="h-full p-8 rounded cards-bg bg-gray-100">
                                        <h1 className="w-full my-2 text-4xl md:text-5xl font-bold leading-tight" >
                                            {profile.toindex === 0
                                                ? <FormattedMessage id={`app.${pageName}.Rank`} defaultMessage='RANK LEADER' />
                                                : <FormattedMessage id={`app.${pageName}.Star`} defaultMessage='RISING STAR' />}
                                            <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                                        </h1>
                                        <Link to={`/${lang}/Wrestlers/Profile/${profile.name_short}`}>
                                            <img src={profile.avatar} alt={profile.name_short} />
                                            <span className="flex-grow flex flex-col ">
                                                <h4 className="md:text-3xl text-2xl font-bold leading-tight">
                                                    <FormattedMessage id={`app.Characters.${profile.name_short}`} defaultMessage={`${profile.name_short}`} /> @{profile.aka}</h4>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


