import React from 'react'

export default function Previous() {
    return (
        <section className=" body-font min-h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-10 md:mb-20 text-gray-600">
                    <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                        Previous Shows
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Watch all stream archived episode in here.</p>
                </div>

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
