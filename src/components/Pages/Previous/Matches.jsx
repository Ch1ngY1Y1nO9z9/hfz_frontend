import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Matches)

function Matches(props) {
    const { lang, data, setCurrentGame } = props
    const params = useParams()

    const navigate = useNavigate()

    function changeSongList(game) {
        setCurrentGame(game)
        navigate(`/${lang}/Previous/${params.id}/${game}`)
    }

    return (
        <div className="w-full">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr className="text-gray-800">
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100 rounded-tl rounded-bl">
                                <FormattedMessage id={`app.Previous.Result.Table.Game`} defaultMessage='Game' />
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                                <FormattedMessage id={`app.Previous.Result.Table.Type`} defaultMessage='Type' />
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                                <FormattedMessage id={`app.Previous.Result.Table.Context`} defaultMessage='Context' />
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                                <FormattedMessage id={`app.Previous.Result.Table.Participants`} defaultMessage='Participants' />
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100">
                                <FormattedMessage id={`app.Previous.Result.Table.Winner`} defaultMessage='Winner' />
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-100"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((match) => {
                            return (
                                match?.game === 1
                                    ? <tr key={match?.id} >
                                        <td className="px-4 py-3">
                                            {match?.game}
                                        </td>
                                        <td className="px-4 py-3">
                                            {match?.type}
                                        </td>
                                        <td className="px-4 py-3">
                                            {match?.rule}
                                        </td>
                                        <td className="px-4 py-3 font-bold">
                                            {JSON.parse(match?.participants).map((team, $key) => {
                                                const links = team.split(',').map((wrestler, index) => {
                                                    return <span key={index}> {index !== 0 ? ' , ' : ''} {$key !== 0 && index === 0 ? ' / ' : ''}
                                                        <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                            <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={`${wrestler}`} />
                                                        </Link>
                                                    </span>
                                                })

                                                return links
                                            })}
                                        </td>
                                        <td className={`px-4 py-3 ${match?.result === 'Draw' ? 'text-yellow-500' : 'text-red-500'}`}>
                                            {
                                                match?.result.split(",").map((wrestler, index) => {
                                                    return index === 0
                                                        ? wrestler === 'Draw'
                                                            ? <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                            : <Link key={index} to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                            </Link>
                                                        : wrestler === 'Draw'
                                                            ? <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                            : <Link key={index} to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                ,&nbsp;<FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                            </Link>
                                                })
                                            }
                                        </td>
                                        <td className="px-4 py-3">
                                            <Link replace to={`/${lang}/Previous/${params.id}/${match?.game}`} className="font-bold hover:underline hover:text-blue-500">
                                                <FormattedMessage id={`app.Previous.Result.Table.SongList`} defaultMessage='Song List' />
                                            </Link>
                                        </td>
                                    </tr>
                                    : <tr key={match?.id}>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">{match?.game}</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">{match?.type}</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">{match?.rule}</td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3 font-bold">
                                            {JSON.parse(match?.participants).map((team, $key) => {
                                                const links = team.split(',').map((wrestler, index) => {
                                                    return <span key={index}> {index !== 0 ? ' , ' : ''} {$key !== 0 && index === 0 ? ' / ' : ''}
                                                        <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                            <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={`${wrestler}`} />
                                                        </Link>
                                                    </span>
                                                })

                                                return links
                                            })}
                                        </td>
                                        <td className={`border-t-2 border-gray-200 px-4 py-3 ${match?.result === 'Draw' ? 'text-yellow-500' : 'text-red-500'}`}>
                                            {
                                                match?.result.split(",").map((wrestler, index) => {
                                                    return wrestler === 'Draw'
                                                        ? <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                        : <span key={index}> {index !== 0 ? ' , ' : ''}
                                                            <Link to={`/${lang}/Wrestlers/Profile/${wrestler}`} className="font-bold hover:underline hover:text-blue-500">
                                                                <FormattedMessage id={`app.Characters.${wrestler}`} defaultMessage={wrestler} />
                                                            </Link>
                                                        </span>
                                                })
                                            }
                                        </td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">
                                            <div onClick={() => changeSongList(match?.game)} className="font-bold hover:underline hover:text-blue-500">
                                                <FormattedMessage id={`app.Previous.Result.Table.SongList`} defaultMessage='Song List' />
                                            </div>
                                        </td>
                                    </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
        </div>

    )
}