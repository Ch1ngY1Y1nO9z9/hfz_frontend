import React from 'react'
import ProfileLinks from '../../components/ContentLinks'
import PagesTitle from '../../components/PagesTitle'
// 接收狀態
import { connect } from 'react-redux'

export default connect(
    state => ({light: state.light}))(News)


function News(props) {
    return (
        <section className="min-h-screen">
            <PagesTitle page={{ title: 'FIGHTZ NEWS', description: 'All the HolofightZ news, fan arts or some original content will be here.' }} />

            <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                <nav className="flex-grow flex flex-wrap md:pr-20 text-center order-first">

                    <ProfileLinks to="/News/all" light={props.light.toString()}>All</ProfileLinks>

                    <ProfileLinks to="/News/news" light={props.light.toString()}>News</ProfileLinks>

                    <ProfileLinks to="/News/fan_arts" light={props.light.toString()}>Fan Arts</ProfileLinks>

                    <ProfileLinks to="/News/OC_video" light={props.light.toString()}>OC Video</ProfileLinks>

                </nav>
            </div>

            <div className="container mx-auto pb-12">
                <hr />
            </div>

            <div className="container mx-auto flex flex-wrap pb-12 portfolio">
                <NewsCards />
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