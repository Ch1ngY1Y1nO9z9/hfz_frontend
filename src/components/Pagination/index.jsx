import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination(props) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className="flex justify-center space-x-1 w-full">
            {/* <a href="#" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </a> */}

            {pageNumbers.map(number => (
                <Link onClick={()=> props.paginate(number)} to={`/${props.lang}/Arts/${props.pagetype}/${number}`} key={number} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                    {number}
                </Link>
            ))}

            {/* <a href="#" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a> */}
        </div>
    )
}


