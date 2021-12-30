import React from 'react'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入頁面標題架構
import PagesTitle from '../../components/PagesTitle'

function Event(props) {
    return (

        <>
            <PagesTitle page={{ title: 'Event', description: 'All currently events are here, check the update every week.', pageName: props.pageName }} />

            <div className="container px-5 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-4xl font-medium title-font text-gray-600 font-bold">
                        <FormattedMessage id={`app.${props.pageName}.EventName`} defaultMessage='KING OF THE RING' />
                    </h2>
                </div>
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-2xl font-medium title-font text-gray-600 font-bold">
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
                                                    <div className="px-3 py-2"><a className="hover:text-green-100" href="/WrestlersProfile/N.MATSURI">Matsuri</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        16</div>
                                                    <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/S.%20NOEL">Noel</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-pink-500" href="/WrestlersProfile/M.%20CALLIOPE">Mori</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        8</div>
                                                    <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/H.%20SUISEI">Suisei</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            1
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-green-100" href="/WrestlersProfile/N.MATSURI">Matsuri</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            8</div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/H.%20SUISEI">Suisei</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-red-200" href="/WrestlersProfile/S.%20FLARE">Flare</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        12</div>
                                                    <div className="px-3 py-2"><a className="hover:text-blue-100" href="/WrestlersProfile/P.%20REINE">Reine</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/H.%20SUISEI">Suisei</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            13</div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/A.%20KANATA">Kanata</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/A.%20KANATA">Kanata</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        4</div>
                                                    <div className="px-3 py-2"><a className="hover:text-blue-500" href="/WrestlersProfile/T.%20SORA">Sora</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-100" href="/WrestlersProfile/P.%20REINE">Reine</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            13</div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/A.%20KANATA">Kanata</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-red-500" href="/WrestlersProfile/ROBOCO">Roboco</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        14</div>
                                                    <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/G.%20GURA">Gura</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/A.%20KANATA">Kanata</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            11</div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/N.%20AYAME">Ayame</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/N.%20AYAME">Ayame</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            7</div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">TOWA</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/N.%20AYAME">Ayame</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        6</div>
                                                    <div className="px-3 py-2"><a className="hover:text-red-100" href="/WrestlersProfile/A.%20RISU">Risu</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            3
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-red-500" href="/WrestlersProfile/ROBOCO">Roboco</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            11</div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/N.%20AYAME">Ayame</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/N.%20AYAME">Ayame</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            7</div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        10</div>
                                                    <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/T.%20WATAME">Watame</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/N.%20AYAME">Ayame</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            7</div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-purple-500" href="/WrestlersProfile/M.%20SHION">Shion</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div
                                                        className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                        2</div>
                                                    <div className="px-3 py-2"><a className="hover:text-red-500" href="/WrestlersProfile/O.%20POLKA">Polka</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-24 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div
                                                            className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div
                                                            className="w-[40px] rounded-bl px-3 py-2 bg-gray-400 text-white">
                                                            15</div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-500" href="/WrestlersProfile/M.%20SHION">Shion</a></div>
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
                    <h2 className="text-2xl font-medium title-font text-gray-900 font-bold">
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
                                                    <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/S.%20NOEL">Noel</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        9
                                                    </div>
                                                    <div className="px-3 py-2"><a className="hover:text-pink-500" href="/WrestlersProfile/M.%20CALLIOPE">Mori</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-pink-500" href="/WrestlersProfile/M.%20CALLIOPE">Mori</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            15
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-500" href="/WrestlersProfile/M.%20SHION">Shion</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-red-200" href="/WrestlersProfile/S.%20FLARE">Flare</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        4
                                                    </div>
                                                    <div className="px-3 py-2"><a className="hover:text-blue-500" href="/WrestlersProfile/T.%20SORA">Sora</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            4
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-500" href="/WrestlersProfile/T.%20SORA">Sora</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            3
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-red-500" href="/WrestlersProfile/ROBOCO">Roboco</a></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-pink-500" href="/WrestlersProfile/M.%20CALLIOPE">Mori</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            4
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-500" href="/WrestlersProfile/T.%20SORA">Sora</a></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            9
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-pink-500" href="/WrestlersProfile/M.%20CALLIOPE">Mori</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            8
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/H.%20SUISEI">Suisei</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/G.%20GURA">Gura</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        6
                                                    </div>
                                                    <div className="px-3 py-2"><a className="hover:text-red-100" href="/WrestlersProfile/A.%20RISU">Risu</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            14
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-300" href="/WrestlersProfile/G.%20GURA">Gura</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-100" href="/WrestlersProfile/P.%20REINE">Reine</a></div>
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
                                                        <div className="px-3 py-2"><a className="hover:text-pink-500" href="/WrestlersProfile/M.%20CALLIOPE">Mori</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            13
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/A.%20KANATA">Kanata</a></div>
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
                                                    <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/T.%20WATAME">Watame</a></div>
                                                </div>
                                                <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                    <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                        2
                                                    </div>
                                                    <div className="px-3 py-2"><a className="hover:text-red-500" href="/WrestlersProfile/O.%20POLKA">Polka</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="mt-14 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            10
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/T.%20WATAME">Watame</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            1
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-green-100" href="/WrestlersProfile/N.MATSURI">Matsuri</a></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-100" href="/WrestlersProfile/P.%20REINE">Reine</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            10
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-white" href="/WrestlersProfile/T.%20WATAME">Watame</a></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="-mt-6 ml-3">
                                                    <div className="bg-gray-600 border-b border-black flex rounded-tr">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            12
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-blue-100" href="/WrestlersProfile/P.%20REINE">Reine</a></div>
                                                    </div>
                                                    <div className="bg-gray-600 border-t border-black flex rounded-br">
                                                        <div className="w-[40px] rounded-tl py-2 bg-gray-400 text-white">
                                                            7
                                                        </div>
                                                        <div className="px-3 py-2"><a className="hover:text-purple-300" href="/WrestlersProfile/T.%20TOWA">Towa</a></div>
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
        </>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(Event)