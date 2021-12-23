import React from 'react'

export default function About() {
    return (
        <section className="py-8 bg-white">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#49c8f0]">
                    ABOUT HOLOFIGHTZ
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 p-6">
                        <h3 className="text-3xl font-bold leading-none mb-3 gray_800 text-gray-800 ">
                            Stream time
                        </h3>
                        <p className="text-gray-600">
                            Streams still random, but will most likely happen on the weekend, starting at 10am CST, or possibly later in the night, around 1am CST <br />
                            <a className="text-blue-500" href="https://teamup.com/ksgvawzp4akez27rf1">https://teamup.com/ksgvawzp4akez27rf1</a>
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 px-6 py-0 md:p-6">
                        <div className="h-64" style={{ backgroundImage: "url('/images/ring.jpg')", backgroundPosition: "center", backroundSize: "cover" }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
