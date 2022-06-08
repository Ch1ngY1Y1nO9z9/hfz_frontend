import React, { useState } from 'react'
import {  useParams, Link, useNavigate } from 'react-router-dom'

// 引入分頁按鈕
import Pagination from '../../Pagination'

// 接收狀態
import { connect } from 'react-redux'
// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(NewsCards)

// 內容組件化
function NewsCards(props) {
    const { data, lang, light } = props

    const paramas = useParams(); //取得當前要看的分類
    const navigate = useNavigate();

    // 宣告狀態進行分頁的處理
    const [currentPage, setCurrentPage] = useState(1) //紀錄當前頁面
    const [postsPerPage] = useState(6) //一頁最多幾則新聞

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    var newType = [];
    // 修改資料陣列
    newType = data.filter((news) => {
        if (paramas.type === 'All') {
            return news.type !== 'news'
        }
        else {

            return news.type === paramas.type
        }
    })

    let currentPosts;

    // 顯示在畫面上的資料
    if (paramas.page === '1') {
        currentPosts = newType.slice(0, 6)

    } else {
        currentPosts = newType.slice(indexOfFirstPost, indexOfLastPost)
    }


    // 切換畫面
    const paginate = (number) => setCurrentPage(number)

    if(paramas.type !== 'All' && paramas.type !== 'fan_arts' && paramas.type !== 'Promote')
    {
        navigate(`/${lang}/Arts/All/1`)
    }

    return (
        <div className="container mx-auto flex flex-wrap pb-12 portfolio">
            {   
                currentPosts.map((news) => {
                    return (
                        <div key={news.id} className="w-full p-6">
                            <div className={`rounded-t rounded-b-none overflow-hidden block md:flex w-full ${light ? "shadow" : "shadow shadow-slate-500"}`}>
                                {
                                    news.img !== null ? <div className="md:flex-auto w-25 px-6 bg-cover bg-no-repeat bg-center h-[300px]" style={{ backgroundImage: `url(${news.thumbnail})` }}></div>
                                        : news.type === 'news' ?
                                            <div className="md:flex-auto w-25 px-6 bg-contain bg-no-repeat bg-center h-[300px]" style={{ backgroundImage: 'url(/images/news_default.webp)' }}></div>
                                            : <div className="md:flex-auto w-25 px-6 bg-contain bg-no-repeat bg-center h-[300px]" style={{ backgroundImage: 'url("/images/OCvideo_default.webp")' }}></div>
                                }
                                <div className="md:flex-1 font-bold text-xl px-6 py-6">
                                    {news.date} <br />
                                    {news.title}
                                    <p className="text-base mb-5">
                                        {news.description}
                                    </p>
                                </div>

                                <div className="flex items-end justify-end my-4 px-6">
                                    <Link to={`/${lang}/ArtsContents/${news.id}`}
                                        className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <i className="fas fa-arrow-right mr-2"></i>

                                        {news.img === null ? <FormattedMessage id={`app.News.ReadMore`} defaultMessage='Read More' /> : <FormattedMessage id={`app.News.FullSize`} defaultMessage='Watch full size' />}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Pagination postsPerPage={postsPerPage} totalPosts={newType.length} paginate={paginate} pagetype={paramas.type} />
        </div>
    )
}
