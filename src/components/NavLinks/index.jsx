import React from 'react'
import { Link } from 'react-router-dom'

// Nav的樣式
export function NavLinks(props) {

    return (
        // 把傳的值透過解構賦值的方式全部傳進NavLink中, 這樣就算某個標籤多傳很多屬性進來也不用各別調整
        <li className="mr-3">
            <Link className='inline-block no-underline hover:text-blue-300 hover:font-bold hover:text-underline py-2 px-4' {...props} />
        </li>

    )

}

// Footer的樣式

export function FooterLinks(props) {
    return (
        <Link className='md\:w-2 inline-block no-underline hover:text-underline py-2 px-4' {...props} />
    )
}
