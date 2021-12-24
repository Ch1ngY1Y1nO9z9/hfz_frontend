import React from 'react'

export default function index() {
    return (
        <section class="py-8 pt-24 min-h-screen">
            <div x-data="{ show: false }" class="container px-5 mx-auto flex flex-wrap @if(Session::has('darkMode')) text-gray-500  dark-mode @else text-gray-900 @endif">
                <div class="flex flex-col text-center w-full mb-10 text-gray-600">
                    <h1 class="text-5xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                        Roll to win
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
                        Roll to get some good item or amazing wrestlers in <b>RRAT:OGEY LEGEND!!</b><br/>
                            If you have coupon code, you can roll one more time for free!!
                    </p>
                </div>
                <div class="w-full mx-auto overflow-auto" style={{backgroundImage: "url('https://i.imgur.com/VOuh5o0.jpg')", backgroundSize: 'contain',backgroundPosition: 'center', backgroundRepeat:'no-repeat'}}>
                    <div class="h-96"></div>
                </div>
                <div class="flex flex-col text-center w-full text-gray-600">
                    <h1 class="text-3xl font-medium title-font mb-4 tracking-widest font-bold text-[#49c8f0]">
                        RRAT:
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
                        <b class="text-[#49c8f0]">Rare: 90%</b><br />
                        <b class="text-blue-500">SR: 8%</b><br />
                        <b class="text-red-500">SSR: 1.9%</b><br />
                        <b class="text-yellow-500">LEGEND: 0.1%</b><br />
                    </p>
                </div>
                <button id="roll_btn" class="flex mx-auto my-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">ROLL</button>

                <div id="res_all" x-show="show" class="flex flex-col text-center w-full text-gray-600">
                    <h1 class="text-5xl font-medium title-font mb-4 tracking-widest font-bold">
                        You got...
                    </h1>
                    <h2 id="result_item" class="text-4xl font-medium title-font mb-1 tracking-widest font-bold text-[#49c8f0]">

                    </h2>
                </div>

                <div x-show="show" id="result_pic" class="w-full mx-auto overflow-auto">
                    <img src="" alt="" class="mx-auto" />
                </div>

                <div id="res_content" x-show="show" class="flex flex-col text-center w-full mb-10 text-gray-600">
                    <h1 id="rare" class="text-5xl font-medium title-font mb-4 tracking-widest font-bold">

                    </h1>
                    <p id="result_intro" class="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">

                    </p>
                </div>

                <div id="promocode_form" class="flex flex-col text-center w-full my-10 text-gray-600">
                    <h1 class="text-5xl font-medium title-font tracking-widest font-bold">
                        Promo code
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-xl mb-4">
                        Have a promo code? Use the promo code to get 1 free roll!
                    </p>

                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="code" class="leading-7 text-xl text-gray-600">Promo code:</label>
                                    <br />
                                    <input type="text" id="code" name="code" value="#" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 w-full">
                                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="rolling_animation" hidden>
                        <img width="100%" height="100%" src="" alt="transition" />
                    </div>
                    <div class="prelaod" hidden>
                        <img src="https://i.imgur.com/cXwbpQG.gif" alt="preload" />
                    </div>
                </div>
            </div>
        </section>
    )
}
