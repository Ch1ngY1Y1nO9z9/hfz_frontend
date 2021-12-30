import React, { Component } from 'react'
// 引入按鈕樣板
import { FooterLinks } from '../../components/NavLinks'

// 引入頁面資訊
import { NavbarButtons, SocialButtons } from '../../staticData'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default class Footer extends Component {
    render() {
        return (
            <footer className="text-gray-600 body-font">
                <div className="footer-bg">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 HolofightZ —
                            <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/HoloFightZ" className="text-gray-600 ml-1 py-2 px-4 inline-block no-underline">@holofightz</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start flex-wrap text-gray-500">

                            {NavbarButtons.map((button) => {
                                return (
                                    <FooterLinks key={button.id} to={button.link}>
                                        <FormattedMessage id={`app.${button.langId}`} defaultMessage={button.Message} />
                                    </FooterLinks>
                                )
                            })}

                            {SocialButtons.map((button) => {
                                return (
                                    <a key={button.id} target="_blank" rel="noreferrer noopener" href={button.link}
                                        className={`py-2 px-4 md\:w-2 inline-block no-underline hover:text-${button.color}`}>
                                        <i className={`fab fa-${button.platform}`}></i>
                                    </a>
                                )
                            })}

                        </span>
                    </div>
                </div>
            </footer>
        )
    }
}