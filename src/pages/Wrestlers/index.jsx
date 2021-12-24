import React from 'react'
import ProfileLinks from '../../components/ContentLinks'

export default function Wrestlers() {
    return (
        <section className="text-gray-600 body-font min-h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                        Wrestlers
                        Profile</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        All HoloFightZ wrestler data, spamming text in here.
                    </p>
                    <a href="/Rank"
                        className="mx-auto hover:underline text-white font-bold rounded-full my-5 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-[#49c8f0]" >
                        <i className="fas fa-arrow-right"></i>  Check the Power Rankings
                    </a>
                </div>
                <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
                    <nav className="w-full flex-grow grid grid-cols-2 md:grid-cols-4 md:pr-20 text-center order-first">
                        <ProfileLinks to="/Wrestlers/All">All</ProfileLinks>
                        <ProfileLinks to="/Wrestlers/gen1">???</ProfileLinks>
                    </nav>
                </div>

                <hr />

                <div className="flex flex-wrap portfolio">
                    <div className="p-4 w-full member_title">
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Members</h1>
                    </div>

                </div>
            </div>
        </section>
    )
}

function Members() {
    return (
        <div className="w-full flex flex-wrap Members Gen-0">
            <div className="p-4 w-full lg:w-1/2">
                <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <a href="/WrestlersProfile/???" className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4">
                        <img width="100%" className="rounded-lg object-cover object-center" alt="team" src="???" />
                    </a>
                    <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-gray-900">???</h2>
                        <h3 className="text-gray-500 mb-3">@ ???</h3>
                        <p className="mb-4">
                            ???
                        </p>
                        <span className="inline-flex">
                            <a target="_blank" href="???" className="text-gray-500 hover:text-[#1da1f2]">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="???" className="ml-2 text-gray-500 hover:text-[#ff0000]">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}