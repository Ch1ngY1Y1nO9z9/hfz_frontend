import React, { Component} from 'react'

export default class Footer extends Component {
    render() {
        return (
                <footer className="text-gray-600 body-font">
                    <div className="footer-bg @if(Session::has('darkMode')) bg-gray-900 @else bg-gray-100 @endif">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 HolofightZ —
                                <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/HoloFightZ" className="text-gray-600 ml-1 py-2 px-4 inline-block no-underline">@holofightz</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start flex-wrap text-gray-500">
                                <a href="/FightZNews" className="md\:w-2 inline-block no-underline hover:text-underline py-2 px-4">
                                    <h2 className="title-font font-medium tracking-widest text-sm mb-3">FightZ News</h2>
                                </a>
                                <a href="/WrestlersProfile" className="md\:w-2 inline-block no-underline hover:text-underline py-2 px-4">
                                    <h2 className="title-font font-medium tracking-widest text-sm mb-3">Wrestlers Profile</h2>
                                </a>
                                <a href="/PreviousShows" className="md\:w-2 inline-block no-underline hover:text-underline py-2 px-4">
                                    <h2 className="title-font font-medium tracking-widest text-sm mb-3">Previous Shows</h2>
                                </a>
                                <a href="/Event" className="md\:w-2 inline-block no-underline hover:text-underline py-2 px-4">
                                    <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-red-500 font-bold">Event</h2>
                                </a>
                                <a href="/FAQ" className="md\:w-2 inline-block no-underline hover:text-underline py-2 px-4">
                                    <h2 className="title-font font-medium tracking-widest text-sm mb-3">FAQ</h2>
                                </a>
                                <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/HoloFightZ"
                                    className="hover:text-[#1da1f2] py-2 px-4 md\:w-2 inline-block no-underline">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCGgJUUcCCg5dzRkyG8-fNBw"
                                    className="hover:text-[#ff0000] py-2 px-4 md\:w-2 inline-block no-underline">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a target="_blank" rel="noreferrer noopener" href="https://www.twitch.tv/holofightz"
                                    className="text-indigo-500  py-2 px-4 md\:w-2 inline-block no-underline">
                                    <i className="fab fa-twitch"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
        )
    }
}
