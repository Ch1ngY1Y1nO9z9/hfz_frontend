import React from 'react'
import {NavLink} from 'react-router-dom'

// 內頁按鈕組件化
export default function ContentLinks(props) {
    return (
        <NavLink className="hover:bg-blue-500 hover:text-gray-100 flex-auto px-4 py-4 nav-item" {...props}>
            <h2 className='title-font font-medium tracking-widest text-sm'> {props.children}</h2>
        </NavLink>
    )
}
