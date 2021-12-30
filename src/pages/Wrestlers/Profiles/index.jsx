import React from 'react'

export default function index(props) {
    return (
        <>
            <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
                <a href="/WrestlersProfile"
                    className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <i className="fas fa-arrow-left"></i> Back to Wrestlers Profile
                </a>
            </div>

            <div className="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded mx-auto md:mx-0 md:ml-auto h-[600px]" alt="hero" src="???" />
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest ml-1">
                        generations
                    </h2>
                    <h1 className="text-3xl title-font font-medium mb-1 font-bold mt-1 @if(Session::has('darkMode')) text-white  dark-mode @else text-gray-900 @endif">

                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-crown text-yellow-500" title="HOLO CHAMPION"></i>
                            CURRENT HOLO CHAMPION
                        </div>

                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-tags text-yellow-500" title="TAG TEAM CHAMPION"></i>
                            CURRENT TAG TEAM CHAMPION
                        </div>


                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fab fa-accessible-icon text-yellow-500" title="QUEEN OF JOBBER"></i>
                            CURRENT QUEEN OF JOBBER
                        </div>


                        <div className="holo_champion text-2xl md:text-3xl">
                            <i className="fas fa-briefcase text-blue-500" title="briefcase owner"></i>
                            BRIEFCASE OWNER
                        </div>


                        <i className="fas fa-baby text-pink-500" title="ばぶばぶ..."></i>


                        <i className="fas fa-book-dead" title="DOKI DOKI WAKU WAKU"></i>


                        <i className="fas fa-shopping-cart" title="Master of shopping-cart"></i>

                        <i className="fas fa-pray" title="Kneel"></i>
                        <i className="fas fa-pray" title="Kneel"></i>
                        <i className="fas fa-pray" title="Kneel"></i>


                        name_jp / name_en
                    </h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <span className="text-gray-600 ml-1">@ aka</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                            <a target="_blank" href="???" className="text-gray-500 hover_twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="???"
                                className="ml-2 text-gray-500 hover_youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </span>
                    </div>

                    <p>Debut: <span className="font-bold">debut</span></p>
                    <p><br />Birthday: <span className="font-bold">birth_day</span></p>
                    <p><br />Weight: <span className="font-bold">eight lb</span></p>
                    <p><br />Fan base name: <span className="font-bold"> fan_name </span></p>
                    <p><br />Signature: <span className="font-bold"> signature </span></p>
                    <p>Finisher: <span className="font-bold"> finisher </span></p>

                    <p>
                        <br />tag team name:
                        <span className="font-bold"> team_name </span>
                    </p>
                    <p>
                        <br />teamate:
                        <a href="/WrestlersProfile/???">
                            <span className="font-bold">tag_with </span>
                        </a>

                    </p>
                </div>
            </div>
            <div className="container px-5 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                    <h1 className="text-5xl font-medium title-font font-bold text-gray-900">Match Records</h1>
                </div>
                <div className="-my-8 divide-y-2 divide-gray-100">

                    <div className="py-8 block md:flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0  block md:flex flex-col">
                            <span className="font-semibold title-font text-gray-900">Stream stream_id</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium title-font mb-2 text-gray-700"> type - rule</h2>
                            <p className="leading-relaxed">Participants:</p>
                            <p className="leading-relaxed font-bold">participants</p>
                            <p className="leading-relaxed"><br />Winners:</p>
                            <p className="leading-relaxed font-bold text-red-500">result</p>
                        </div>
                    </div>

                    <div className="py-8 block md:flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0  block md:flex flex-col">
                            <span className="font-semibold title-font @if(Session::has('darkMode')) text-white  dark-mode @else text-gray-900 @endif">Stream stream_id</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium title-font mb-2 @if(Session::has('darkMode')) text-gray-300  dark-mode-gray @else text-gray-700 @endif">type - rule</h2>
                            <p className="leading-relaxed">Participants:</p>
                            <p className="leading-relaxed font-bold">participants</p>
                            <p className="leading-relaxed"><br />Winners:</p>
                            <p className="leading-relaxed font-bold text-yellow-500 text-red-500">result</p>
                        </div>
                    </div>

                    <p className="flex">
                        <div className="bg-indigo-500 text-gray-200 rounded hover:bg-indigo-600 px-4 py-3 cursor-pointer focus:outline-none my-3">
                            Show All
                        </div>
                    </p>
                    <div className="divide-y-2 divide-gray-100">

                        <div className="py-8 block md:flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0  block md:flex flex-col">
                                <span className="font-semibold title-font text-gray-900">Stream stream_id</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium title-font mb-2 text-gray-700 ">type - rule</h2>
                                <p className="leading-relaxed">Participants:</p>
                                <p className="leading-relaxed font-bold">participants</p>
                                <p className="leading-relaxed"><br />Winners:</p>
                                <p className="leading-relaxed font-bold text-yellow-500">result</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container px-5 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                    <h1 className="text-5xl font-medium title-font font-bold text-gray-900">Win Lose Ratio</h1>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="table-responsive">
                                <table className="table text-grey-darkest">
                                    <thead className="bg-grey-dark text-white text-normal">
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Total Matches</th>
                                            <th scope="col">Win</th>
                                            <th scope="col">Lose</th>
                                            <th scope="col">Draw</th>
                                            <th scope="col">Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                all
                                            </td>
                                            <td>total</td>
                                            <td>total_win</td>
                                            <td>total_lose</td>
                                            <td>total_draw</td>
                                            <td>
                                                <span className="text-green-500 font-bold">total_win_rate%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                1 v 1
                                            </td>
                                            <td>single_total</td>
                                            <td>single_win</td>
                                            <td>single_lose</td>
                                            <td>single_draw</td>
                                            <td>
                                                <span className="text-green-500 font-bold">single_win_rate%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                2 v 2
                                            </td>
                                            <td>tag_total</td>
                                            <td>tag_win</td>
                                            <td>tag_lose</td>
                                            <td>tag_draw</td>
                                            <td>
                                                <span className="text-green-500 font-bold">tag_win_rate%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-light py-1 px-2 font-bold">
                                                Specail event
                                            </td>
                                            <td>multi_total</td>
                                            <td>multi_win</td>
                                            <td>multi_lose</td>
                                            <td>multi_draw</td>
                                            <td>
                                                <span className="text-green-500 font-bold">multi_win_rate%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-5 pb-24 mx-auto hidden sm:block">
                <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                    <h1 className="text-5xl font-medium title-font font-bold text-gray-900">Match Clips</h1>
                </div>
                <div className="flex flex-wrap -m-4">


                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div
                                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <i className="fas fa-hand-sparkles"></i>
                                </div>
                                <h2 className="text-lg title-font font-medium text-gray-900">clip_title</h2>
                            </div>
                            <div className="flex-grow">
                                <iframe width="100%" height="375" src="https://www.youtube.com/embed/???" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div
                                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <i className="fas fa-hand-middle-finger"></i>
                                </div>
                                <h2 className="text-lg title-font font-mediumtext-gray-900">clip_title</h2>
                            </div>
                            <div className="flex-grow">
                                <iframe width="100%" height="375" src="https://www.youtube.com/embed/???" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/2 w-full">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div
                                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <i className="fas fa-fist-raised"></i>
                                </div>
                                <h2 className="text-lg title-font font-medium text-gray-900">clip_title</h2>
                            </div>
                            <div className="flex-grow">
                                <iframe width="100%" height="375" src="https://www.youtube.com/embed/???" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
