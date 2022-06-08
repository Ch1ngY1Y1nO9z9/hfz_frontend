import { useEffect, useState } from 'react'

import Loading from '../../../Loading'

// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(Fanbase)

function Fanbase(props) {
    const { name, light, pageName } = props

    const [isLoading, setisLoading] = useState(1)
    const [data, setData] = useState(null) //取得粉絲基本資料

    useEffect(() => {

        async function getData(page) {
            try {
                const getData = await fetch(`http://127.0.0.1:8000/api/${page}/getFanbase/${name}`, { method: "post" })
                const result = await getData.json()

                setData(result.data)
                setisLoading(0)
            } catch (error) {
                console.log(error)
                setisLoading(1)
            }
        }
        setisLoading(1)
        getData('Detail')
    }, [name])

    return (
        <div className={`flex flex-col text-center w-full mb-10 lg:mb-20 ${light ? 'hidden' : 'block'}`}>
            <div className="container mx-auto">
                {
                    isLoading
                        ? <Loading />
                        : !data
                            ? ''
                            : <div className="flex px-5 pb-12 md:flex-row flex-col items-center"> <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img className="object-cover object-center rounded mx-auto md:mx-0 md:ml-auto h-[400px] md:h-[600px]" alt="hero" src={data.img} />
                            </div>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">

                                    <h1 className="text-3xl title-font font-medium mb-1 font-bold mt-1">
                                        <FormattedMessage id={`app.${pageName}.fans`} defaultMessage='Fanbase' />: <FormattedMessage id={`app.${pageName}.fanbase.${data.fan_name.replace(/\s+/g, '')}`} defaultMessage={data.fan_name} />
                                    </h1>
                                    <p>
                                        <br /><FormattedMessage id={`app.${pageName}.weight`} defaultMessage='WEIGHT' />: <span className="font-bold">{data.weight} <FormattedMessage id={`app.${pageName}.lb`} defaultMessage='lb' /></span>
                                    </p>
                                    <p>
                                        <br /><FormattedMessage id={`app.${pageName}.height`} defaultMessage='HEIGHT' />: <span className="font-bold">{data.height}"</span>
                                    </p>
                                    <p>
                                        <br /><FormattedMessage id={`app.${pageName}.sig`} defaultMessage='Signature' />: <span className="font-bold"> {data.signature} </span>
                                    </p>
                                    <p>
                                        <FormattedMessage id={`app.${pageName}.finisher`} defaultMessage='Finisher' />: <span className="font-bold"> {data.finisher} </span>
                                    </p>
                                </div>
                            </div>
                }
            </div>
        </div>


    )
}