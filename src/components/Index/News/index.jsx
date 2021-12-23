import React from 'react'

export default function News() {
    return (
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    FIGHTZ NEWS
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="w-full flex flex-wrap justify-center">
                    <div className="p-4 lg:w-1/3 w-full">
                        <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 className="tracking-widest text-xl title-font font-medium mb-1 text-blue-400">
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">News Title</h1>
                            <p className="leading-relaxed mb-3 text-gray-800">News description</p>
                            <a href="/FightZNews/" className="text-indigo-500 inline-flex items-center">Learn More
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    Date: ????/??/??
                                </span>
                                <span className="text-withe bg-red-600 px-2 inline-flex items-center leading-none text-sm">
                                    New!
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm py-1">
                                    Date: ????/??/??
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
