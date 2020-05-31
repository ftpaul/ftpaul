import React from "react"
import { Link } from "gatsby"

export default ({ children }) => (
    <>
    <div className="w-screen h-2 bg-yellow-500 absolute t-0 l-0"></div>
    <nav className="flex flex-1 items-center justify-between max-w-screen-md mx-auto pt-16 px-2">
        <div className="flex">
            <h1 className="text-4xl text-gray-600 pb-4">Paulo Teixeira<span className="font-bold text-5xl text-yellow-600">.</span></h1>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
            <ul className="flex text-xl">
                <li className="mr-6">
                    <Link className="text-gray-500 hover:text-yellow-600" activeClassName="border-b-2 border-yellow-600" to="/about">About</Link>
                </li>
                <li className="mr-6">
                    <a className="text-gray-500 opacity-50 cursor-not-allowed"activeClassName="border-b-2 border-yellow-600" to="#" disabled={true}>Blog</a>
                </li>
                <li className="mr-6">
                    <Link className="text-gray-500 hover:text-yellow-600"activeClassName="border-b-2 border-yellow-600" to="/books">Books</Link>
                </li>
            </ul>
        
    </nav>
    </>
)