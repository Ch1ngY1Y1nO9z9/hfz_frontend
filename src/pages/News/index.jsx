import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link, useNavigate } from 'react-router-dom'
import ProfileLinks from '../../components/ContentLinks'
import PagesTitle from '../../components/PagesTitle'


// 引入分頁按鈕
import Pagination from '../../components/Pagination'
// 引入固定資料
import { NewsType } from '../../staticData'
// Fetch取得資料
// import { getData } from '../../fetch'
// 接收狀態
import { connect } from 'react-redux'
// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


function News(props) {

    const [data, setData] = useState([]) //取得頁面資料
    const [type, setType] = useState('All')

    useEffect(() => {
        const getData = async (page) => {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/News/get${page}/${type}`, { method: "post" })
                const result = await getData.json()

                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        getData('News')//Fetch取得資料
    }, [])


    return (
        <>
            <PagesTitle page={{ title: 'FIGHTZ NEWS', description: 'All the HolofightZ news, fan arts or some original content will be here.', pageName: props.pageName  }} />

            <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                <nav className="flex-grow flex flex-wrap md:pr-20 text-center order-first">
                    {
                        NewsType.map((type) => {
                            return (
                                <ProfileLinks key={type.id} to={type.link} light={props.light.toString()}>
                                    <FormattedMessage id={`app.${type.langId}`} defaultMessage={type.name} />
                                </ProfileLinks>
                            )
                        })
                    }
                </nav>
            </div>

            <div className="container mx-auto pb-12">
                <hr />
            </div>


            <Routes>
                <Route path="/:type" element={<NewsCards data={data} animate={true} />} />
                <Route path="/:type/:page" element={<NewsCards data={data} animate={true} />} />
            </Routes>
        </>
    )
}

// 內容組件化
function NewsCards(props) {

    const { data } = props

    const Navigation = useNavigate();

    const paramas = useParams(); //取得當前要看的分類

    // 宣告狀態進行分頁的處理
    const [currentPage, setCurrentPage] = useState(1) //紀錄當前頁面
    const [postsPerPage] = useState(6) //一頁最多幾則新聞

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    // 修改資料陣列
    const newType = data.filter((news) => {
        if (paramas.type === 'All') {
            return news
        }
        else {
            return news.type === paramas.type
        }
    })

    const currentPosts = newType.reverse().slice(indexOfFirstPost, indexOfLastPost)

    // 切換畫面
    const paginate = (number) => setCurrentPage(number)

    return (
        <div className="container mx-auto flex flex-wrap pb-12 portfolio">
            {
                currentPosts.map((news) => {
                    return (
                        <div key={news.id} className="w-full p-6">
                            <div className="rounded-t rounded-b-none overflow-hidden shadow block md:flex w-full">
                                {
                                    news.img !== null ? <div className="md:flex-auto w-25 px-6 bg-cover bg-no-repeat bg-center h-[300px]" style={{ backgroundImage: `url(${news.img})` }}></div>
                                        : news.type === 'news' ?
                                            <div className="md:flex-auto w-25 px-6 bg-contain bg-no-repeat bg-center h-[300px]" style={{ backgroundImage: 'url(/images/news_default.png)' }}></div>
                                            : <div className="md:flex-auto w-25 px-6 bg-contain bg-no-repeat bg-center h-[300px]" style={{ backgroundImage: 'url("/images/OCvideo_default.png")' }}></div>
                                }
                                <div className="md:flex-1 font-bold text-xl text-gray-800 px-6 py-6">
                                    {news.date} <br />
                                    {news.title}
                                    <p className="text-gray-800 text-base mb-5">
                                        {news.description}
                                    </p>
                                </div>

                                <div className="flex items-end justify-end my-4 px-6">
                                    <a href="/FightZNews/{news.id}"
                                        className="mx-auto lg:mx-0 hover:underline bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <i className="fas fa-arrow-right mr-2"></i>
                                        
                                        {news.img === null ? <FormattedMessage id={`app.News.ReadMore`} defaultMessage='Read More' /> : <FormattedMessage id={`app.News.FullSize`} defaultMessage='Full size Watch' />}
                                    </a>
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


export default connect(state => ({ light: state.light }))(News)