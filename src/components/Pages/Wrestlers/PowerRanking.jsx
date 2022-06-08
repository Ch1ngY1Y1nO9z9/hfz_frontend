import { Link } from 'react-router-dom'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../hooks/useAxios'
import apiSetting from '../../../api/getData'

import Loading from '../../Loading'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(PowerRanking)


function PowerRanking(props) {

    const { lang, pageName } = props

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: `/api/${pageName}/getPowerRanking`,
        requestConfig: {
            data: {}
        }
    })


    let colorSetting = { color: '', arrow: '' }

    return (
        <div className="container px-5 py-12 mx-auto flex flex-wrap text-gray-800">
            {loading && <Loading />}
            {
                !loading && !error && data?.map((current) => {
                    current.rank < current.last_week_rank
                        ? colorSetting = { color: 'text-green-600', arrow: 'fa-arrow-up', bg: "bg-green-200", hover: "hover:bg-green-300" }
                        : current.rank > current.last_week_rank
                            ? colorSetting = { color: 'text-red-600', arrow: 'fa-arrow-down', bg: "bg-red-200", hover: "hover:bg-red-300" }
                            : colorSetting = { color: 'text-gray-600', arrow: 'fa-circle', bg: "bg-gray-200", hover: "hover:bg-gray-300" };

                    return (
                        <Link key={current.id} className="flex relative sm:items-center w-2/3 mx-auto border-b-2 hover:font-bold" to={`/${lang}/Wrestlers/Profile/${current.name_short}`}>
                            <div className={`h-full w-6 absolute inset-0 flex items-center justify-center ${colorSetting.bg}`}></div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center relative z-10 title-font text-xl">{current.rank}</div>
                            <div className={`flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row py-10 ${colorSetting.bg} ${colorSetting.hover}`}>
                                <div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center overflow-hidden">
                                    <img width="100%" src={current.avatar} alt={current.name_short} />
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className=" title-font mb-1 text-xl text-center sm:text-left">
                                        <FormattedMessage id={`app.Characters.${current.name_short}`} defaultMessage={current.name_short} />
                                    </h2>
                                    <p className="leading-relaxed">
                                        <i className={`text-xl fas ${colorSetting.arrow} ${colorSetting.color}`}></i>
                                        <FormattedMessage id='app.Profiles.LastWeek' defaultMessage='Last week' />
                                        : {current.last_week_rank}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}