import React from 'react'
import { ReactComponent as Wave } from '../wave.svg'

export default function Banner() {
    return (
        <section className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full"
                        style={{textShadow: "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px"}}>
                        welcome to HFZ</p>
                    <h1 className="my-4 text-5xl font-bold leading-tight text-center md:text-left w-full"
                        style={{textShadow: "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px"}}>
                        HOLOFIGHTZ
                    </h1>
                    <p className="leading-normal text-2xl mb-8 md:text-left w-full"
                        style={{textShadow: "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px"}}>
                        Professional Virtual YouTuber Wrestling
                    </p>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.twitch.tv/holofightz"
                        className="mx-auto lg:mx-0 hover:underline hover:bg-indigo-600 bg-indigo-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        WATCH LIVE
                    </a>
                </div>

                <div className="w-full md:w-3/5 py-6 text-center">
                    <div className="banner_block"></div>
                </div>
            </div>

            <Wave />
        </section>
    )
}
