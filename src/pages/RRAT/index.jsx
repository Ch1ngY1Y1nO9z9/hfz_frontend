import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useParams, Link, useNavigate, Navigate } from 'react-router-dom'

import Loading from '../../components/Loading'

// 引入頁面標題架構
import PagesTitle from '../../components/PagesTitle'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 紀錄與查看登入狀態
import { ChangeStatus } from '../../redux/actions/user'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

// 按鈕送出後連結伺服器
import Echo from 'laravel-echo';

function Login(props) {
    const { light, user, lang: { lang }, setUserAccount } = props

    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(params.page !== 'main' && params.page !== 'register'){
            navigate(`/${lang}/RROL/main`)
        }

        // 檢查是否有登入過
        const isLogin = JSON.parse(sessionStorage .getItem('account'))

        if(isLogin && !user.login){
            setUserAccount(isLogin)
        }

    },[])

    // window.Pusher = require('pusher-js');

    // window.Echo = new Echo({
    // broadcaster: 'pusher',
    // key: 'holofightz123456789', // 這裡隨便填，跟.env檔案裡面一致即可
    // wsHost: window.location.hostname,
    // wsPort: 6001,
    // forceTLS: false,
    // disableStats: true,
    // })

    // window.Echo.channel('test')
    // .listen('Test', (e) => {
    //     console.log(e);
    // });

    return (
        params.page === 'main'
            ? user.login
                ? <Main data={{ light, lang, setUserAccount, user }} />
                : <LoginForm data={{ light, lang, setUserAccount }} />
            : params.page === 'register'
                ? <RegisterForm data={{ light, lang, setUserAccount }} />
                : ''
    )
}

function Main(props) {
    const { lang, light, pageName, user } = props.data

    return (
        <section className={`min-h-screen pt-12 ${light ? 'bg-white' : 'bg-black'}`}>
            <PagesTitle data={{ title: 'YUBI MARKET', description: 'you can betting during hfz stream, and win yubis for collect the characters.', pageName, light }} />
            <div className="container p-5 mx-auto">
                <div className="flex flex-col text-center w-full">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
                        USER: {user.user_name} <br />
                        YUBIS: {user.yubis}
                    </p>
                    <div className="flex mx-auto mb-10 md:mb-20 mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log out</div>
                </div>
                <div
                    className="flex items-center lg:w-3/5 mx-auto border-b p-5 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">BETTING</h2>
                        <p className="leading-relaxed text-base">you can bet and win yubis for the Gacha.</p>
                        <Link to="/" className="mt-3 text-indigo-500 inline-flex items-center">Check Betting
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b p-5 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Gacha</h2>
                        <p className="leading-relaxed text-base">Give Korone your yubis for get some good item or cards, rate up different cards every week.(maybe)</p>
                        <Link to={`/${lang}/RROL/main/roll`} className="mt-3 text-indigo-500 inline-flex items-center">Check Gacha
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto p-5 sm:flex-row flex-col">
                    <div
                        className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Collection Book</h2>
                        <p className="leading-relaxed text-base">Check all cards you got from the Gacha.</p>
                        <Link to={`/${lang}/RROL/main/collectionBook`} className="mt-3 text-indigo-500 inline-flex items-center">Check Collection
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

function LoginForm(props) {

    const { lang, light, setUserAccount } = props.data

    const accountInput = useRef()

    const passwordInput = useRef()

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)

    function jwtLogin() {

        const account = accountInput.current.value;
        const password = passwordInput.current.value;

        if (!account) {
            accountInput.current.focus()
            return false
        }
        else if (!password) {
            passwordInput.current.focus()
            return false
        }

        setLoading(true)

        const data = {
            name: account,
            email: account,
            password,
        }

        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: "POST",
            body: JSON.stringify(data),
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'cors',

        })
            .catch(error => {
                console.log('error:', error)
            })
            .then(response => {
                if (response.status !== 200) {
                    setLoading(false)
                    alert('please check your username or password')
                } else {
                    setLoading(false)
                    return response.json()
                }
            })
            .then(userData => {
                const { user } = userData

                const accountData = {
                    status: 'login',
                    login: true,
                    user_name: user.name,
                    yubis: user.yubis,
                    cards: user.cards,
                    access_token: userData.access_token
                }
                // 儲存進瀏覽器伺服器中, 只能夠儲存字串所以先轉Json格式
                sessionStorage .setItem('account', JSON.stringify(accountData))
                setUserAccount(accountData)
                navigate(`/${lang}/RROL/main`)
            })
    }

    function checkInput() {
        accountInput.current.value = accountInput.current.value.replace(/\s+/g, '')
        passwordInput.current.value = passwordInput.current.value.replace(/\s+/g, '')
    }

    return (
        <div className="min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <span className="text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">LOGIN</span>
            <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
                {
                    isLoading
                        ? <Loading />
                        : <div>
                            <label htmlFor="" className="block">Username</label>
                            <input ref={accountInput} onChange={() => checkInput()} type="text" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username" />
                            <label htmlFor="" className="block">Password</label>
                            <input ref={passwordInput} onChange={() => checkInput()} type="password" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="123456789" />
                            <span onClick={() => jwtLogin()} className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded cursor-pointer">Login</span>
                            <div className="mt-5">don't have an account?</div>
                            <Link className="text-blue-500 hover:underline hover:font-bold" to={`/${lang}/RROL/register`} >register</Link>
                        </div>
                }
            </div>


        </div>
    )
}

function RegisterForm(props) {
    const lang = props.lang

    const registerAccountInput = useRef()

    const registerPasswordInput = useRef()

    const confirmInput = useRef()

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)

    function jwtRegister() {
        alert("please don't forgor your password, we won't help you to find it back :)")

        const account = registerAccountInput.current.value;
        const password = registerPasswordInput.current.value;
        const password_confirmation = confirmInput.current.value;

        if (!account) {
            registerAccountInput.current.focus()
            return false
        }
        else if (!password) {
            registerPasswordInput.current.focus()
            return false
        } else if (!password_confirmation) {
            confirmInput.current.focus()
            return false
        } else if (password !== password_confirmation) {
            alert('your password and confirm password are not the same, please check it again')
        }

        setLoading(true)

        const data = {
            name: account,
            email: account,
            password,
            password_confirmation,
        }

        fetch('http://127.0.0.1:8000/api/auth/register', {
            method: "POST",
            body: JSON.stringify(data),
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'cors'
        })
            .catch(error => {
                setLoading(false)
                alert('something went wrong, plz try it later :)')
            })
            .then(
                response => {
                    setLoading(false)
                    if (response.status === 400) {
                        alert('someone already took this username, please change another username :)')
                    } else if (response.status === 201) {
                        alert('create success! now will redirect to login page, please try login your account :)')
                        navigate(`/${lang}/RROL/main`)
                    }
                }
            )

    }

    function checkInput() {
        registerAccountInput.current.value = registerAccountInput.current.value.replace(/\s+/g, '')
        registerPasswordInput.current.value = registerPasswordInput.current.value.replace(/\s+/g, '')
    }

    return (
        <div className="min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <span className="text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">REGISTER</span>
            <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
                {
                    isLoading
                        ? <Loading />
                        : <div>
                            <label htmlFor="" className="block">Username</label>
                            <input ref={registerAccountInput} onChange={() => checkInput()} type="text" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username" />
                            <label htmlFor="" className="block">Password</label>
                            <input ref={registerPasswordInput} onChange={() => checkInput()} type="password" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="123456789" />
                            <label htmlFor="" className="block">Confirm Password</label>
                            <input ref={confirmInput} onChange={() => checkInput()} type="password" className="border w-full h-10 px-3 mb-5 rounded-md" />
                            <span onClick={() => jwtRegister()} className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded cursor-pointer">register</span>
                            <div className="mt-5">have an account?</div>
                            <Link className="text-blue-500 hover:underline hover:font-bold" to={`/${lang}/RROL/main`} >log in</Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default connect(state => ({ light: state.light, lang: state.lang, user: state.user }),
    { setUserAccount: ChangeStatus })(Login)