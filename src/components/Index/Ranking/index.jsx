import React from 'react'

export default function Ranking() {
    return (
        <section className="py-8 text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <div className="flex flex-wrap w-full gray_800 text-gray-800">
                    <div className="p-2 md:p-4 md:w-1/2 w-full">
                        <div className="h-full p-8 rounded cards-bg bg-gray-100">
                            <h1 className="w-full my-2 text-4xl md:text-5xl font-bold leading-tight" >
                                RANK LEADER
                                <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                            </h1>
                            <a href="/WrestlersProfile/">
                                <img src="" alt="" />
                                <span className="flex-grow flex flex-col ">
                                    <h4 className="md:text-3xl text-2xl font-bold leading-tight">???@ ???</h4>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="p-2 md:p-4 md:w-1/2 w-full">
                        <div className="h-full p-8 rounded cards-bg bg-gray-100">
                            <h1 className="w-full my-2 text-4xl md:text-5xl font-bold leading-tight">
                                RISING STAR
                                <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                            </h1>
                            <a href="/WrestlersProfile/">
                                <img src="" alt="" />
                                <span className="flex-grow flex flex-col">
                                    <h4 className="md:text-3xl text-2xl font-bold leading-tight">
                                        ??? @ ???
                                    </h4>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
