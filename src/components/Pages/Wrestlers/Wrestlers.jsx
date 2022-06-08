import { Route, Routes, Link, Navigate } from 'react-router-dom'

import PowerRanking from './PowerRanking'
import Members from './Members'

// 引入頁面標題架構
import PagesTitle from '../../PagesTitle'

// 引入按鈕樣式
import ButtonsLink from '../../ContentLinks'

// 引入固定資料,姓名對照表
import { Generations } from '../../../staticData'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'


export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Wrestlers)

function Wrestlers(props) {
    const { lang, light, pageName } = props

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>

            <PagesTitle data={{ title: 'WRESTLERS PROFILE', description: 'All HoloFightZ wrestler personal file, spamming text are in here.', pageName: pageName, light: light }} />

            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <Link to={`/${lang}/Wrestlers/rank`} className="mx-auto text-white font-bold rounded-full my-5 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-[#49c8f0]" >
                        <i className="fas fa-arrow-right"></i>
                        <FormattedMessage id={`app.${pageName}.PowerRanking`} defaultMessage='Power Rankings' />
                    </Link>
                </div>
                <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                    <nav className="w-full flex-grow grid grid-cols-2 md:grid-cols-4 md:pr-20 text-center order-first">
                        <ButtonsLink to={`/${lang}/Wrestlers/All`}>All</ButtonsLink>
                        {
                            Generations?.map((generation) => {
                                return (
                                    <ButtonsLink key={generation.id} to={`/${lang}/Wrestlers/${generation.link}`}>
                                        <FormattedMessage id={`app.Profiles.${generation.langId}`} defaultMessage={generation.name} />
                                    </ButtonsLink>
                                )
                            })
                        }

                    </nav>
                </div>

                <hr />

                <div className="flex flex-wrap portfolio">
                        <Routes>
                            <Route path="/rank" element={<PowerRanking pageName={pageName} />} />
                            <Route path="/:id" element={<Members pageName={pageName} />} />
                            <Route path="/*" element={<Navigate to={`/${lang}/Wrestlers/All`} />} />
                        </Routes>
                </div>
            </div>
        </section>
    )
}