import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// Nav的二次封裝
export default class Links extends Component {
    render() {
        return (
            // 把傳的值透過解構賦值的方式全部傳進NavLink中, 這樣就算某個標籤多傳很多屬性進來也不用各別調整
            <li className="mr-3">
                <Link className='inline-block no-underline hover:text-blue-300 hover:font-bold hover:text-underline py-2 px-4' {...this.props}/>
            </li>
            
        )
    }
}
