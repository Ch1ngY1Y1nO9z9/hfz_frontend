import React from 'react'
import ProfileLinks from '../../components/ContentLinks'

export default function News() {
    return (
        <section className="text-gray-600 body-font px-8 py-24 min-h-screen">
            <div className="container mx-auto flex flex-wrap portfolio">
                <div className="flex flex-col text-center w-full mb-10 text-gray-600">
                    <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                        FIGHTZ NEWS
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        All the HolofightZ news, fan arts or some original content will be here.
                    </p>
                </div>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                    <nav className="flex-grow flex flex-wrap md:pr-20 text-center order-first">

                        <ProfileLinks to="/News/all">All</ProfileLinks>

                        <ProfileLinks to="/News/news">News</ProfileLinks>

                        <ProfileLinks to="/News/fan_arts">Fan Arts</ProfileLinks>

                        <ProfileLinks to="/News/OC_video">OC Video</ProfileLinks>

                    </nav>
                </div>
            </div>
            <div className="container mx-auto pb-12">
                <hr />
            </div>
            <div className="container mx-auto flex flex-wrap pb-12 portfolio">
                <NewsCards/>
            </div>
        </section>
    )
}

// 內容組件化
function NewsCards() {
    return (
        <div className="lg:w-1/3 md:w-1/2 w-full p-6 flex flex-col ALL">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="bg-white w-full px-6 bg-contain" style={{ height: "300px", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/news_default.png)' }}></div>
                <div className="w-full font-bold text-xl text-gray-800 px-6 py-6">
                    title
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    date<br />
                    description
                </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-start">
                    <a href="/FightZNews/???"
                        className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <i className="fas fa-arrow-right mr-2"></i>Full size
                        {/* <i className="fas fa-arrow-right mr-2"></i>Watch */}
                    </a>
                </div>
            </div>
        </div>
    )
}