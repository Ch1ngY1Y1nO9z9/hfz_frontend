import React, { useRef } from 'react'

// 引入函式版axios
import useAxiosFunction from '../../../hooks/useAxiosFunction'
import sendData from '../../../api/getDataFunction'

export default function ContactUs() {

    const nameInput = useRef('')

    const emailInput = useRef('')

    const contentInput = useRef('')

    window.dataLayer = window.dataLayer || [];

    function gtag() { window.dataLayer.push(arguments); }

    const [posts, error, loading, axiosFetch] = useAxiosFunction();

    gtag('js', new Date());

    gtag('config', 'G-2X8NTS7JM2');

    function ContactSubmit() {
        const name = nameInput.current.value
        const email = emailInput.current.value
        const content = contentInput.current.value

        if (!name) {
            nameInput.current.focus()
            return false
        }
        else if (!email) {
            emailInput.current.focus()
            return false
        } else if (!content) {
            contentInput.current.focus()
            return false
        }

        // 檢查email是否格式正確
        if (email.indexOf('@') === -1) {
            alert('please enter correct email address format')
            return false
        }

        const data = {
            name,
            email,
            content
        }

        // 呼叫axios實例去送資料
        axiosFetch({
            axiosInstance: sendData,
            method: 'POST',
            url: '/api/Index/contact',
            requestConfig: {
                data
            }
        })

        // 回傳的值會存在posts中, 在拿出來做後續判斷
        if (posts.status === 'susscess') {

            nameInput.current.value = 'anons'
            emailInput.current.value = ''
            contentInput.current.value = ''

            alert(posts.msg)
        } else {
            alert('something went wrong, please try it later!')
        }
    }

    function checkInput() {
        nameInput.current.value = nameInput.current.value.replace(/\s+/g, '')
        emailInput.current.value = emailInput.current.value.replace(/\s+/g, '')
    }


    return (
        <section id="Contact" className="text-center py-6">
            <div className="container px-5 py-12 md:py-24 mx-auto">
                <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-white`}>
                    Contact Us
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <h3 className={`my-4 text-3xl leading-tight text-white`}>
                    If you have any match idea or fan art, even promote<br />
                    We're all welcome you sent the link to us.
                </h3>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div id="ContactForm">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                                    <input ref={nameInput} onChange={() => checkInput()} type="text" id="name" name="name" defaultValue={'anons'} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                    <input ref={emailInput} onChange={() => checkInput()} type="email" id="email" name="email" placeholder="if you want us send message back..." className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                                    <textarea ref={contentInput} id="message" name="content" maxLength="300" placeholder="paste any OC video link, fan arts, match suggest to us" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <input type="hidden" value="" name="recaptcha_response" id="recaptchaResponse" />
                            <div className="p-2 w-full">
                                <button onClick={() => ContactSubmit()} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
