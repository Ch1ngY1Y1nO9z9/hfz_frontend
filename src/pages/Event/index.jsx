import React from 'react'
import { Link } from 'react-router-dom'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入頁面標題架構
import PagesTitle from '../../components/PagesTitle'

function Index(props) {
    const { lang: { lang }, pageName, light } = props

    return (

        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'Event', description: 'All currently events are here, check the update every week.', pageName, light }} />

            <div className="container px-5 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-4xl font-medium title-font font-bold">
                        <FormattedMessage id={`app.${props.pageName}.EventName`} defaultMessage='KING OF THE RING' />
                    </h2>
                </div>
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-2xl font-medium title-font font-bold">
                        <FormattedMessage id={`app.${props.pageName}.Winner`} defaultMessage='WINNER GROUP' />
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="overflow-x-auto bg-gray-900">
                                <table className="table text-gray-300 text-center w-full h-[900px]">
                                    <thead className="text-normal bg-gray-700">
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${props.pageName}.Round1`} defaultMessage='WINNERS ROUND 1' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${props.pageName}.Quarter`} defaultMessage='QUARTER-FINALS' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${props.pageName}.Semi`} defaultMessage='SEMI-FINALS' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${props.pageName}.WFinal`} defaultMessage='WINNERS FINALS' />
                                            </th>
                                            <th scope="col">
                                                <FormattedMessage id={`app.${props.pageName}.GFinal`} defaultMessage='GRANDS FINALS' />
                                            </th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    1
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">1
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-green-300" to={`/${lang}/Wrestlers/Profile/Matsuri`}>
                                                            <FormattedMessage id={`app.Characters.Matsuri`} defaultMessage='Matsuri' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        16</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Noel`}>
                                                            <FormattedMessage id={`app.Characters.Noel`} defaultMessage='Noel' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    2
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">9
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-pink-500" to={`/${lang}/Wrestlers/Profile/Calli`}>
                                                            <FormattedMessage id={`app.Characters.Calli`} defaultMessage='Calli' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        8</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-blue-300" to={`/${lang}/Wrestlers/Profile/Suisei`}>
                                                            <FormattedMessage id={`app.Characters.Suisei`} defaultMessage='Suisei' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            1
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-green-300" to={`/${lang}/Wrestlers/Profile/Matsuri`}>
                                                                <FormattedMessage id={`app.Characters.Matsuri`} defaultMessage='Matsuri' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            8</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-300" to={`/${lang}/Wrestlers/Profile/Suisei`}>
                                                                <FormattedMessage id={`app.Characters.Suisei`} defaultMessage='Suisei' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    3
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">5
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-200" to={`/${lang}/Wrestlers/Profile/Flare`}>
                                                            <FormattedMessage id={`app.Characters.Flare`} defaultMessage='Flare' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        12</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-blue-100" to={`/${lang}/Wrestlers/Profile/Reine`}>
                                                            <FormattedMessage id={`app.Characters.Reine`} defaultMessage='Reine' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            8
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-300" to={`/${lang}/Wrestlers/Profile/Suisei`}>
                                                                <FormattedMessage id={`app.Characters.Suisei`} defaultMessage='Suisei' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            13</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Kanata`}>
                                                                <FormattedMessage id={`app.Characters.Kanata`} defaultMessage='Kanata' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    4
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">13
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Kanata`}>
                                                            <FormattedMessage id={`app.Characters.Kanata`} defaultMessage='Kanata' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        4</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-blue-500" to={`/${lang}/Wrestlers/Profile/Sora`}>
                                                            <FormattedMessage id={`app.Characters.Sora`} defaultMessage='Sora' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-100" to={`/${lang}/Wrestlers/Profile/Reine`}>
                                                                <FormattedMessage id={`app.Characters.Reine`} defaultMessage='Reine' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            13</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Kanata`}>
                                                                <FormattedMessage id={`app.Characters.Kanata`} defaultMessage='Kanata' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    5
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">3
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-500" to={`/${lang}/Wrestlers/Profile/ROBOCO`}>
                                                            <FormattedMessage id={`app.Characters.ROBOCO`} defaultMessage='ROBOCO' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        14</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-blue-3000" to={`/${lang}/Wrestlers/Profile/Gura`}>
                                                            <FormattedMessage id={`app.Characters.Gura`} defaultMessage='Gura' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            13
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Kanata`}>
                                                                <FormattedMessage id={`app.Characters.Kanata`} defaultMessage='Kanata' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            11</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Ayame`}>
                                                                <FormattedMessage id={`app.Characters.Ayame`} defaultMessage='Ayame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            11
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Ayame`}>
                                                                <FormattedMessage id={`app.Characters.Ayame`} defaultMessage='Ayame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            7</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-20 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-yellow-400 text-white">
                                                            KING
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    6
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">11
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Ayame`}>
                                                            <FormattedMessage id={`app.Characters.Ayame`} defaultMessage='Ayame' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        6</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-100" to={`/${lang}/Wrestlers/Profile/Risu`}>
                                                            <FormattedMessage id={`app.Characters.Risu`} defaultMessage='Risu' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            3
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-red-500" to={`/${lang}/Wrestlers/Profile/ROBOCO`}>
                                                                <FormattedMessage id={`app.Characters.ROBOCO`} defaultMessage='ROBOCO' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            11</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Ayame`}>
                                                                <FormattedMessage id={`app.Characters.Ayame`} defaultMessage='Ayame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            11
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Ayame`}>
                                                                <FormattedMessage id={`app.Characters.Ayame`} defaultMessage='Ayame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            7</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    7
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">7
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                            <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        10</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Watame`}>
                                                            <FormattedMessage id={`app.Characters.Watame`} defaultMessage='Watame' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            11
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Ayame`}>
                                                                <FormattedMessage id={`app.Characters.Ayame`} defaultMessage='Ayame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            7</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold text-gray-500">
                                                <div className="h-[75px] flex justify-center flex-col">
                                                    8
                                                </div>
                                            </td>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">15
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-purple-500" to={`/${lang}/Wrestlers/Profile/Shion`}>
                                                            <FormattedMessage id={`app.Characters.Shion`} defaultMessage='Shion' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        2</div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-500" to={`/${lang}/Wrestlers/Profile/Polka`}>
                                                            <FormattedMessage id={`app.Characters.Polka`} defaultMessage='Polka' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            15</div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-500" to={`/${lang}/Wrestlers/Profile/Shion`}>
                                                                <FormattedMessage id={`app.Characters.Shion`} defaultMessage='Shion' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center w-full mt-10">
                    <h2 className="text-2xl font-medium title-font font-bold">
                        <FormattedMessage id={`app.${props.pageName}.Loser`} defaultMessage='LOSER BRACKET' />
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full ">
                            <div className="overflow-x-auto bg-gray-900 ">
                                <table className="table text-gray-300 text-center w-full h-[700px]">
                                    <thead className="text-normal bg-gray-700">
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        16
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Noel`}>
                                                            <FormattedMessage id={`app.Characters.Noel`} defaultMessage='Noel' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        9
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-pink-500" to={`/${lang}/Wrestlers/Profile/Calli`}>
                                                            <FormattedMessage id={`app.Characters.Calli`} defaultMessage='Calli' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-pink-500" to={`/${lang}/Wrestlers/Profile/Calli`}>
                                                                <FormattedMessage id={`app.Characters.Calli`} defaultMessage='Calli' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            15
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-500" to={`/${lang}/Wrestlers/Profile/Shion`}>
                                                                <FormattedMessage id={`app.Characters.Shion`} defaultMessage='Shion' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        5
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-200" to={`/${lang}/Wrestlers/Profile/Flare`}>
                                                            <FormattedMessage id={`app.Characters.Flare`} defaultMessage='Flare' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        4
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-blue-500" to={`/${lang}/Wrestlers/Profile/Sora`}>
                                                            <FormattedMessage id={`app.Characters.Sora`} defaultMessage='Sora' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            4
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-500" to={`/${lang}/Wrestlers/Profile/Sora`}>
                                                                <FormattedMessage id={`app.Characters.Sora`} defaultMessage='Sora' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            3
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-red-500" to={`/${lang}/Wrestlers/Profile/ROBOCO`}>
                                                                <FormattedMessage id={`app.Characters.ROBOCO`} defaultMessage='ROBOCO' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-pink-500" to={`/${lang}/Wrestlers/Profile/Calli`}>
                                                                <FormattedMessage id={`app.Characters.Calli`} defaultMessage='Calli' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            4
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-500" to={`/${lang}/Wrestlers/Profile/Sora`}>
                                                                <FormattedMessage id={`app.Characters.Sora`} defaultMessage='Sora' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-pink-500" to={`/${lang}/Wrestlers/Profile/Calli`}>
                                                                <FormattedMessage id={`app.Characters.Calli`} defaultMessage='Calli' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            8
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-300" to={`/${lang}/Wrestlers/Profile/Suisei`}>
                                                                <FormattedMessage id={`app.Characters.Suisei`} defaultMessage='Suisei' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        14
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-blue-3000" to={`/${lang}/Wrestlers/Profile/Gura`}>
                                                            <FormattedMessage id={`app.Characters.Gura`} defaultMessage='Gura' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        6
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-100" to={`/${lang}/Wrestlers/Profile/Risu`}>
                                                            <FormattedMessage id={`app.Characters.Risu`} defaultMessage='Risu' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            14
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-3000" to={`/${lang}/Wrestlers/Profile/Gura`}>
                                                                <FormattedMessage id={`app.Characters.Gura`} defaultMessage='Gura' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-100" to={`/${lang}/Wrestlers/Profile/Reine`}>
                                                                <FormattedMessage id={`app.Characters.Reine`} defaultMessage='Reine' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-pink-500" to={`/${lang}/Wrestlers/Profile/Calli`}>
                                                                <FormattedMessage id={`app.Characters.Calli`} defaultMessage='Calli' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            13
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Kanata`}>
                                                                <FormattedMessage id={`app.Characters.Kanata`} defaultMessage='Kanata' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        10
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Watame`}>
                                                            <FormattedMessage id={`app.Characters.Watame`} defaultMessage='Watame' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        2
                                                    </div>
                                                    <div className="px-3 py-2">
                                                        <Link className="hover:text-red-500" to={`/${lang}/Wrestlers/Profile/Polka`}>
                                                            <FormattedMessage id={`app.Characters.Polka`} defaultMessage='Polka' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            10
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Watame`}>
                                                                <FormattedMessage id={`app.Characters.Watame`} defaultMessage='Watame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            1
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-green-300" to={`/${lang}/Wrestlers/Profile/Matsuri`}>
                                                                <FormattedMessage id={`app.Characters.Matsuri`} defaultMessage='Matsuri' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-100" to={`/${lang}/Wrestlers/Profile/Reine`}>
                                                                <FormattedMessage id={`app.Characters.Reine`} defaultMessage='Reine' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            10
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-white" to={`/${lang}/Wrestlers/Profile/Watame`}>
                                                                <FormattedMessage id={`app.Characters.Watame`} defaultMessage='Watame' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-blue-100" to={`/${lang}/Wrestlers/Profile/Reine`}>
                                                                <FormattedMessage id={`app.Characters.Reine`} defaultMessage='Reine' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <Link className="hover:text-purple-300" to={`/${lang}/Wrestlers/Profile/Towa`}>
                                                                <FormattedMessage id={`app.Characters.Towa`} defaultMessage='Towa' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Index)