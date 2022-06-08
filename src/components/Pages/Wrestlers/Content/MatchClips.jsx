// 引入redux接收狀態
import { connect } from 'react-redux'

// 引入React Intl切換語系
import { FormattedMessage } from 'react-intl'

export default connect(state => ({ light: state.light, lang: state.lang.lang }))(MatchClips)

function MatchClips(props) {
    const { light, clips, pageName}  = props

    return (
        <div className="container px-5 pb-24 mx-auto hidden sm:block">
            <div className="flex flex-col text-center w-full mb-10 lg:mb-20">
                <h1 className={`text-5xl font-medium title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>
                    <FormattedMessage id={`app.${pageName}.Clips`} defaultMessage='Clips' />
                </h1>
            </div>
            <div className="flex flex-wrap -m-4">
                {
                    clips?.map((clip) => {
                        return <div key={clip.id} className="p-4 lg:w-1/2 w-full">
                            <div className={`flex rounded-lg h-full p-8 flex-col ${light ? 'bg-gray-100' : 'bg-gray-900'}`}>
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        {
                                            clip.type === 'finisher'
                                                ? <i className="fas fa-hand-sparkles"></i>
                                                : clip.type === 'signature'
                                                    ? <i className="fas fa-hand-middle-finger"></i>
                                                    : <i className="fas fa-fist-raised"></i>
                                        }
                                    </div>
                                    <h2 className={`text-lg title-font font-bold ${light ? 'text-gray-600' : 'text-gray-400'}`}>{clip.clip_title}</h2>
                                </div>
                                <div className="flex-grow">
                                    <iframe width="100%" height="375" src={`https://www.youtube-nocookie.com/embed/${clip.embed_code}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}