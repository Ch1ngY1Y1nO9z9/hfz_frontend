import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Footer from './pages/Footer'
import { NavLinks } from './components/NavLinks'
import Loading from './components/Loading'

// 頁面按鈕資料
import { NavbarButtons, SocialButtons } from './staticData'

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
const Content = lazy(() => import('./pages/News/Content'))
const Wrestlers = lazy(() => import('./pages/Wrestlers'))
const Profiles = lazy(() => import('./pages/Wrestlers/Profiles'))
const Previous = lazy(() => import('./pages/Previous'))
const Matches = lazy(()=> import('./pages/Previous/Content'))
// const Event = lazy(() => import('./pages/Event'))
const Poll = lazy(() => import('./pages/Poll'))
const RROL = lazy(() => import('./pages/RRAT'))
const Roll = lazy(() => import('./pages/RRAT/Roll'))
const Collection = lazy(() => import('./pages/RRAT/Collection'))
const Betting = lazy(() => import('./pages/RRAT/Betting'))
const FAQ = lazy(() => import('./pages/FAQ'))



// 傳入App的樣板, 並呼叫action做初始化
export default connect(
    state => ({ light: state.light, lang: state.lang }),
    { setTheme: ChangeColor, setLang: ChangeLang }
)(App)

function App(props) {
    const { light, lang } = props

    // 預設內容
    const [data, setData] = useState([])
    const [defaultLang, setDefaultLang] = useState('en')

    useEffect(() => { 
        getData('Index');//Fetch取得資料
        getTwitchApi();
        changeLangSetting(checkLanguagePack())
    }, [])

    // 切換背景顏色
    function changeMode() {
        // 呼叫action處理修改顏色, setTheme是從connect函式中第二傳參中自定義的名稱, 其本體是後面的"ChangeColor"轉換名稱後傳進UI組件
        props.setTheme(!light);
    }

    // 取得新語系資料
    async function changeLangSetting(lang) {
        const profile = await fetch(`/lang/${lang}.json`)
        const locale = await profile.json()
        props.setLang({ lang, locale })
    }

    // 取得背景圖片
    async function getData(page) {
        try {
            // 取得API資料
            const getData = await fetch(`https://hfzapi.surai.xyz/api/App/getBackground`, { method: "post" } )
            let result = await getData.json()
            // 取得是否直播中


            // 設定圖片從後端來
            result += 'https://holofightz.surai.xyz' + result
            setData(result)
        } catch (error) {
            console.log(error)
        }
    }

    // 手機板選單切換
    const [toggleMenu, setMenu] = useState('hidden')

    function changeVisible() {
        toggleMenu === 'hidden' ? setMenu('block') : setMenu('hidden')
    }

    // 直播判斷
    const [live, setLiveStatus] = useState(false) //判斷是否直播中 預設否
    const [channelData, setChannelData] = useState([]) //儲存頻道資訊

    // TwitchAPI串接
    async function getTwitchApi() {
        try {
            const getChannelData = await fetch( 'https://api.twitch.tv/helix/streams?user_login=holofightz',{ headers: { 'client-id': 'knyyan9rux0iv4zr5pzu52lrtrk8fh', 'Authorization': 'Bearer cj1m4zpetgekvr73obiw2jdahvinfe'}})
            const result = await getChannelData.json()

            setChannelData(result)
            checkData(result)
        } catch (error) {
            console.log(error)
        }
    }

    function checkData(result) {
        result.data.length !== 0 ? setLiveStatus(true) : setLiveStatus(false)
    }

    // 取得當前網址路徑 確認網址是否能到正確的預設語言包
    const location = useLocation();
    const navigate = useNavigate()

    function checkLanguagePack(){
        let langPack = location.pathname.split('/',2)[1];
        if(langPack !== 'en' && langPack !== 'zh' && langPack !== 'jp'){
            langPack = 'en'
            navigate(`/${langPack}/index`)
        }
        
        setDefaultLang(langPack)
        return langPack
    }

    return (
        <IntlProvider locale={defaultLang} messages={lang.locale} onError={()=>{}}>
            <div className={`leading-normal tracking-normal body-font ease-in-out duration-1000 ${light ? 'text-black bg-white' : 'text-white bg-black'}`} >
                <nav id="header" className={`w-full z-30 top-0 fixed ${light ? 'bg-white/90' : 'bg-black/50'}`}>
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <Link to={`/${lang.lang}/index`}>
                                <img width="250" src="/images/LOGO.png" alt="LOGO" />
                            </Link>
                        </div>
                        <div className="block lg:hidden pr-4">
                            <button onClick={() => { changeVisible() }} id="nav-toggle"
                                className="flex items-center p-1 text-white hover:text-blue-300 hover:font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-opacity-80 lg:bg-transparent p-4 lg:p-0 z-20 h-screen lg:h-auto ${toggleMenu}`}
                            id="nav-content">
                            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                {NavbarButtons.map((button) => {
                                    return (
                                        <NavLinks onClick={() => { setMenu('hidden') }} key={button.id} to={`${defaultLang+button.link}`}>
                                            <FormattedMessage id={`app.${button.langId}`} defaultMessage={button.Message} />
                                        </NavLinks>
                                    )
                                })}
                                {SocialButtons.map((button) => {
                                    return (
                                        <li key={button.id} className="mr-3">
                                            <a target="_blank" rel="noreferrer noopener" href={button.link}
                                                className={`inline-block no-underline text-[#787878] py-2 px-4 hover:text-${button.color}`}
                                                style={{ textShadow: '#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px' }}>
                                                <i className={`fab fa-${button.platform}`}></i>
                                            </a>
                                        </li>
                                    )
                                })}

                                <li className="mr-3">
                                    <div onClick={() => changeMode()} className={`lights py-2 px-4 cursor-pointer ${light ? 'text-black' : 'text-white'}`}>
                                        <i className="far fa-lightbulb"></i>
                                    </div>
                                </li>
                                <li className="mr-3">
                                    <select onChange={(e) => { changeLangSetting(e.target.value) }} className="form-select appearance-none px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:bg-white focus:border-blue-600 focus:outline-none text-black" aria-label="change language" value={lang.lang}>
                                        <option value="en">English</option>
                                        <option value="jp">日本語</option>
                                        <option value="zh">中文</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                </nav>
                <div className="bg-fixed bg-center bg-cover" style={live ? {backgroundImage: 'url("/images/onstream.webp")'} :{ backgroundImage: `url(${data.img})` }}>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/:lang/index" element={<Index pageName='Index' live={live} />} />
                            <Route path="/:lang/Arts/*" element={<News pageName='Arts' />} />
                            <Route path="/:lang/ArtsContents/:id" element={<Content pageName='Arts' />} />
                            <Route path="/:lang/Wrestlers/*" element={<Wrestlers pageName='Profiles' />} />
                            <Route path="/:lang/Wrestlers/Profile/:name" element={<Profiles pageName='Detail' />} />
                            <Route path="/:lang/Previous/*" element={<Previous pageName='Previous' />} />
                            <Route path="/:lang/Previous/:id/*" element={<Matches pageName='Previous' />} />
                            <Route path="/:lang/Poll" element={<Poll pageName='Poll' />} />
                            <Route path="/:lang/RROL/:page" element={<RROL pageName='RROL' />} />
                            <Route path="/:lang/RROL/main/roll" element={<Roll pageName='Roll' />} />
                            <Route path="/:lang/RROL/main/collectionBook" element={<Collection pageName='Collection' />} />
                            <Route path="/:lang/RROL/main/betting" element={<Betting pageName='Betting' />} />
                            <Route path="/:lang/FAQ" element={<FAQ pageName='FAQ' />} />
                            <Route path="/*" element={<Navigate to={`/${defaultLang}/index`} />} />
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
            </div >
        </IntlProvider>
    )
}
