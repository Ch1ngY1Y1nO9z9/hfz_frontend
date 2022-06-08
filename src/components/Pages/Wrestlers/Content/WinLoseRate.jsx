import Loading from '../../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from '../../../../hooks/useAxios'
import apiSetting from '../../../../api/getData'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(WinLoseRate)

function WinLoseRate(props) {
    const { light, name, pageName } = props

    const [data, error, loading] = useAxios({
        axiosInstance: apiSetting,
        method: 'post',
        url: `/api/${pageName}/getWinLoseRate/${name}`,
        requestConfig: {
            data: {}
        }
    })

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className={`text-5xl font-medium title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>
                    <FormattedMessage id={`app.${pageName}.WinLoseRatio`} defaultMessage='Win Lose Ratio' />
                </h1>
            </div>
            <div className="flex flex-col">
                {loading && <Loading />}
                {
                    !loading && !error && data &&
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white text-black mx-2 w-full">
                            <div className="overflow-y-auto w-full">
                                <table className="w-full text-center h-[250px]">
                                    <thead className="bg-gray-400 text-white text-normal">
                                        <tr>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${pageName}.Type`} defaultMessage='Type' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${pageName}.Total`} defaultMessage='Total' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${pageName}.Win`} defaultMessage='Win' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${pageName}.Lose`} defaultMessage='Lose' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${pageName}.Draw`} defaultMessage='Draw' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${pageName}.Rate`} defaultMessage='Rate' />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-bold">
                                                <FormattedMessage id={`app.${pageName}.all`} defaultMessage='all' />
                                            </td>
                                            <td>{data.total}</td>
                                            <td>{data.total_win}</td>
                                            <td>{data.total_lose}</td>
                                            <td>{data.total_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.total_win_rate}%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">
                                                <FormattedMessage id={`app.${pageName}.1v1`} defaultMessage='1 v 1' />
                                            </td>
                                            <td>{data.single_total}</td>
                                            <td>{data.single_win}</td>
                                            <td>{data.single_lose}</td>
                                            <td>{data.single_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.single_win_rate}%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">
                                                <FormattedMessage id={`app.${pageName}.2v2`} defaultMessage='2 v 2' />
                                            </td>
                                            <td>{data.tag_total}</td>
                                            <td>{data.tag_win}</td>
                                            <td>{data.tag_lose}</td>
                                            <td>{data.tag_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.tag_win_rate}%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">
                                                <FormattedMessage id={`app.${pageName}.MULTi`} defaultMessage='MULTi' />
                                            </td>
                                            <td>{data.multi_total}</td>
                                            <td>{data.multi_win}</td>
                                            <td>{data.multi_lose}</td>
                                            <td>{data.multi_draw}</td>
                                            <td>
                                                <span className="text-green-500 font-bold">{data.multi_win_rate}%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}