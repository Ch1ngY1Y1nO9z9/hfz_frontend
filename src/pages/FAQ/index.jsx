import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useParams, Link, useNavigate, Navigate } from 'react-router-dom'

import Loading from '../../components/Loading'

// 引入頁面標題架構
import PagesTitle from '../../components/PagesTitle'

// 引入按鈕樣式
import ButtonsLink from '../../components/ContentLinks'

// 引入固定資料
import { Generations } from '../../staticData'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 引入姓名對照表
import { MembersList, TestList } from '../../staticData'

function FAQ(props) {
    const { pageName, light } = props

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <div className="container max-w-5xl mx-auto m-8">
                <PagesTitle data={{ title: 'FAQ', description: 'ding ding ding ding ding ding ding ding ding ding ding', pageName, light }} />
                <div className="flex flex-wrap h-[600px]">
                    <iframe frameBorder="0" allowFullScreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="YouTube video player" width="100%" height="100%"
                        src="https://www.youtube.com/embed/O_2HnzozHRA?autoplay=1&amp;controls=1&amp;loop=1"></iframe>
                </div>
            </div>


            <div className="container max-w-5xl mx-auto m-8 flex md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="channel_pic" src="/images/channel_pic.png" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">This website made by:
                        <br className="hidden lg:inline-block" />SUIEN SURAI
                    </h2>
                    <p className="mb-8 leading-relaxed">form a T-word Country that no one can said it</p>
                    <div className="flex justify-center">
                        <a href="https://twitter.com/SuienSurai" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Twitter</a>
                        <a  href="https://www.youtube.com/channel/UCGys8vcvG5Dv9Fk5SFrxH8A" className="ml-4 inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Youtube</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang }))(FAQ)