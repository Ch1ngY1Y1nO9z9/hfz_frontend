import React from 'react'
import PagesTitle from '../../components/PagesTitle'

export default function Previous() {
    return (
        <section className="min-h-screen">
            <PagesTitle page={{ title: 'PREVIOUS SHOWS', description: 'Watch all stream archived episode in here.' }} />

            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -mx-4 text-left text-white">
                    <div className="w-full sm:w-1/2 bg-cover bg-center"
                        style={{backgroundImage: "url('{{$stream->background_image}}')"}}>
                        <div className="rounded-lg h-96 overflow-hidden px-5 bg-black bg-opacity-50">
                            <h2 className="title-font text-4xl font-medium mt-6 mb-1">Ep ??</h2>
                            <h3 className="title-font text-1xl font-medium mb-3">date</h3>
                            <p className="leading-relaxed text-base">
                                Watch episode ?? of HoloFightz:
                                <ul className="list-disc text-indent pl-5">
                                    <li>context1</li>
                                    <li>context2</li>
                                    <li>context3</li>
                                </ul>
                            </p>
                            <div className="flex pt-3">
                                <a href="/Box/??" className="inline-block ml-auto mt-3 bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">BOX</a>
                                <a target="_blank" href="??" rel="noreferrer noopener" className="inline-block ml-3 mt-3 bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">WATCH
                                    VOD</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
