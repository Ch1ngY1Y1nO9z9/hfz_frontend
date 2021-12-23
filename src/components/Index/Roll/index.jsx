import React, { useEffect } from 'react'
import Swiper from 'swiper'
// swiper core styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, {
    Autoplay, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

export default function Roll() {

    useEffect(() => {
        new Swiper('#slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    })

    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-2 pt-4 pb-12 text-white-800">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    PREVIOUS SHOWS
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full mx-auto my-20 bg-white">
                    <div id="slider" className="swiper w-full border-2">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide bg-cover bg-center shadow-lg"
                                style={{}}>
                                <div className="container mx-auto px-6 md:px-20 py-6">
                                    <div className="w-full md:w-1/2 bg-opacity-50 bg-black p-2 md:p-0">
                                        <div className="md:border border-gray-100 md:p-10">
                                            <h3 className="text-2xl md:text-5xl leading-tight" style={{ fontFamily: 'Niconne, cursive' }}>??????</h3>
                                            <h2 className="font-bold leading-tight md:text-6xl text-3xl">EP 1</h2>
                                            <h4 className="md:text-3xl text-1xl font-bold leading-tight">Watch episode ?? of HoloFightz:</h4>
                                            <ul className="text-1xl mt-3 font-light">
                                                <li>???</li>
                                                <li>???</li>
                                                <li>???</li>
                                            </ul>
                                        </div>
                                        <div className="my-10 md:mx-10 md:-mt-2">
                                            {/* <a target="_blank" href="" className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">WATCH VOD</a> */}
                                            <span className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">Uploading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide bg-cover bg-center shadow-lg"
                                style={{}}>
                                <div className="container mx-auto px-6 md:px-20 py-6">
                                    <div className="w-full md:w-1/2 bg-opacity-50 bg-black p-2 md:p-0">
                                        <div className="md:border border-gray-100 md:p-10">
                                            <h3 className="text-2xl md:text-5xl leading-tight" style={{ fontFamily: 'Niconne, cursive' }}>??????</h3>
                                            <h2 className="font-bold leading-tight md:text-6xl text-3xl">EP 2</h2>
                                            <h4 className="md:text-3xl text-1xl font-bold leading-tight">Watch episode ?? of HoloFightz:</h4>
                                            <ul className="text-1xl mt-3 font-light">
                                                <li>???</li>
                                                <li>???</li>
                                                <li>???</li>
                                            </ul>
                                        </div>
                                        <div className="my-10 md:mx-10 md:-mt-2">
                                            {/* <a target="_blank" href="" className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">WATCH VOD</a> */}
                                            <span className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">Uploading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide bg-cover bg-center shadow-lg"
                                style={{}}>
                                <div className="container mx-auto px-6 md:px-20 py-6">
                                    <div className="w-full md:w-1/2 bg-opacity-50 bg-black p-2 md:p-0">
                                        <div className="md:border border-gray-100 md:p-10">
                                            <h3 className="text-2xl md:text-5xl leading-tight" style={{ fontFamily: 'Niconne, cursive' }}>??????</h3>
                                            <h2 className="font-bold leading-tight md:text-6xl text-3xl">EP 3</h2>
                                            <h4 className="md:text-3xl text-1xl font-bold leading-tight">Watch episode ?? of HoloFightz:</h4>
                                            <ul className="text-1xl mt-3 font-light">
                                                <li>???</li>
                                                <li>???</li>
                                                <li>???</li>
                                            </ul>
                                        </div>
                                        <div className="my-10 md:mx-10 md:-mt-2">
                                            {/* <a target="_blank" href="" className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">WATCH VOD</a> */}
                                            <span className="bg-indigo-500  ease-linear hover:bg-indigo-600 text-white px-6 py-4 rounded-full">Uploading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-indigo-500"></div>
                        <div className="hidden md:flex swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-indigo-500"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
