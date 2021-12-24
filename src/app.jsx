import React, { Component, lazy, Suspense } from 'react'
import Redux from 'redux'
import { Link, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Footer from './pages/Footer'
import Links from './components/NavLinks'
import Loading from './components/Loading'

// 內容頁(lazy load)
const Index = lazy(()=> import('./pages/Index'))
const News = lazy(()=> import('./pages/News'))
const Wrestlers = lazy(()=> import('./pages/Wrestlers'))
const Previous = lazy(()=> import('./pages/Previous'))
const Event = lazy(()=> import('./pages/Event'))
const Roll = lazy(()=> import('./pages/Roll'))

export default class app extends Component {
    state = { light: true }

    render() {
        const light = this.state

        return (
            <div className={`leading-normal tracking-normal text-white background-img ${light ? 'bg-white' : 'bg-black'}`}>
                <nav id="header" className="w-full z-30 top-0 text-black bg-white">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <Link className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                                to="/index">
                                <img width="250" src="/images/LOGO.png" alt="LOGO" />
                            </Link>
                        </div>
                        <div className="block lg:hidden pr-4">
                            <button id="nav-toggle"
                                className="flex items-center p-1 text-white hover:text-blue-300 hover:font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-opacity-50 bg-black lg:bg-transparent p-4 lg:p-0 z-20"
                            id="nav-content">
                            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                <Links to="/News">FightZ News</Links>
                                <Links to="/Wrestlers">Wrestlers Profile</Links>
                                <Links to="/Previous">Previous shows</Links>
                                <Links to="/Event">Event</Links>
                                <Links to="/Roll">Roll</Links>

                                <li className="mr-3">
                                    <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/HoloFightZ"
                                        className="inline-block no-underline text-[#787878] hover:text-[#1da1f2] py-2 px-4"
                                        style={{ textShadow: '#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px' }}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="mr-3">
                                    <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCGgJUUcCCg5dzRkyG8-fNBw"
                                        className="inline-block no-underline text-[#787878] hover:text-[#ff0000] text-[] py-2 px-4"
                                        style={{ textShadow: '#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px' }}>
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li className="mr-3">
                                    <a target="_blank" rel="noreferrer noopener" href="https://www.twitch.tv/holofightz"
                                        className="inline-block no-underline text-[#787878] hover:text-indigo-600 py-2 px-4"
                                        style={{ textShadow: '#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px' }}>
                                        <i className="fab fa-twitch"></i>
                                    </a>
                                </li>
                                <li className="mr-3">
                                    <div className="lights py-2 px-4" style={{ cursor: 'pointer' }}>
                                        <i className="far fa-lightbulb"></i>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                </nav>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/index" element={<Index />} />
                        <Route path="/News" element={<News />} />
                        <Route path="/wrestlers" element={<Wrestlers />} />
                        <Route path="/Previous" element={<Previous />} />
                        <Route path="/Event" element={<Event />} />
                        <Route path="/Roll" element={<Roll />} />
                        <Route path="*" element={<Navigate to="/index" />} />
                    </Routes>
                </Suspense>

                <Footer />
            </div >
        )
    }
}
