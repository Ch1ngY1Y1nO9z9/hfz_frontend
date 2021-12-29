import React, { lazy, Suspense } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './pages/Footer'
import { NavLinks } from './components/NavLinks'
import Loading from './components/Loading'

// 頁面按鈕
import { NavbarButtons, SocialButtons } from './buttons'

// 引入action管理狀態
import { ChangeColor } from './redux/actions/theme' //日夜模式切換
import { ChangeLang } from './redux/actions/lang' //語系切換
// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage, IntlProvider } from 'react-intl'

// 內容頁(lazy load)
const Index = lazy(() => import('./pages/Index'))
const News = lazy(() => import('./pages/News'))
const Wrestlers = lazy(() => import('./pages/Wrestlers'))
const Previous = lazy(() => import('./pages/Previous'))
const Event = lazy(() => import('./pages/Event'))
const Roll = lazy(() => import('./pages/Roll'))

// 傳入App的樣板, 並呼叫action做初始化
export default connect(
    state => ({ light: state.light, lang: state.lang }),
    { setTheme: ChangeColor, setLang: ChangeLang }
)(App)

function App(props) {

    // 切換背景顏色
    function changeMode() {
        // 呼叫action處理修改顏色, setTheme是從connect函式中第二傳參中自定義的名稱, 其本體是後面的"ChangeColor"轉換名稱後傳進UI組件
        props.setTheme(!props.light);
    }

    // 取得新語系資料
    async function changeLang(lang) {
        const profile = await fetch(`/lang/${lang}.json`)
        const locale = await profile.json()
        props.setLang({ lang, locale })
    }


    return (
        
        <IntlProvider locale='en' messages={props.lang.locale}>
            <div className={`leading-normal tracking-normal background-img body-font ${props.light ? 'bg-white' : 'bg-black'}`}>
                <nav id="header" className="w-full z-30 top-0 text-black">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <Link to="/index">
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
                                {NavbarButtons.map((button) => {
                                    return (
                                        <NavLinks key={button.id} to={button.link}>
                                            <FormattedMessage id={`app.${button.langId}`} defaultMessage={button.Message} />
                                        </NavLinks>
                                    )
                                })}
                                {SocialButtons.map((button) => {
                                    return (
                                        <li  key={button.id} className="mr-3">
                                            <a target="_blank" rel="noreferrer noopener" href={button.link}
                                                className={`inline-block no-underline text-[#787878] py-2 px-4 hover:text-${button.color}`}
                                                style={{ textShadow: '#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px' }}>
                                                <i className={`fab fa-${button.platform}`}></i>
                                            </a>
                                        </li>
                                    )
                                })}

                                <li className="mr-3">
                                    <div onClick={() => changeMode()} className={`lights py-2 px-4 cursor-pointer ${props.light ? 'text-black' : 'text-white'}`}>
                                        <i className="far fa-lightbulb"></i>
                                    </div>
                                </li>
                                <li className="mr-3">
                                    <select onChange={(e) => { changeLang(e.target.value) }} className="form-select appearance-none px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="change language">
                                        <option value="en">English</option>
                                        <option value="jp">日本語</option>
                                        <option value="cn">中文</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                </nav>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/index" element={<Index />} />
                        <Route path="/News" element={<News pageName='News' />} />
                        <Route path="/Wrestlers/*" element={<Wrestlers pageName='Profiles' />} />
                        <Route path="/Previous" element={<Previous pageName='Previous' />} />
                        <Route path="/Event" element={<Event pageName='Event' />} />
                        <Route path="/Roll" element={<Roll pageName='Roll' />} />
                        <Route path="*" element={<Navigate to="/index" />} />
                    </Routes>
                </Suspense>

                <Footer />
            </div >
        </IntlProvider>
    )
}
