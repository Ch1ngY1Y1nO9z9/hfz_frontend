import React from 'react'
import {NavLink} from 'react-router-dom'

// 內頁按鈕組件化
export default function ContentLinks(props) {
    return (
        <NavLink className="hover:bg-blue-500 flex-auto nav-item "{...props}>
            <h2 className={`title-font font-medium tracking-widest text-sm hover:text-white p-4`}>{props.children}</h2>
        </NavLink>
    )
}
