import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"


const Navigation = () => {

    const [isExpanded, toggleExpansion] = useState(false)

    return (
        <>
            <div className="w-screen h-2 bg-yellow-500 absolute t-0 l-0"></div>
            <nav className="flex flex-1 items-center justify-between max-w-screen-md mx-auto pt-16 px-2">
                <div className="flex">
                    <h1 className="text-4xl text-gray-600 pb-4">Paulo Teixeira<span className="font-bold text-5xl text-yellow-600">.</span></h1>
                </div>
                    <button className="hidden xs:display xs:flex items-center px-3 py-2 text-yellow-600 bg-organd-300 z-10" onClick={() => toggleExpansion(!isExpanded)}>
                        <span className="text-xl text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100 border-b-2 border-yellow-600">{isExpanded ? "Close" : "Menu"}</span>
                    </button>
                    <div className={isExpanded ? `xs:block xs:visible xs:opacity-100 xs:top-0 xs:left-0 xs:absolute xs:w-screen xs:h-screen xs:bg-yellow-600 xs:ease-in-out xs:duration-1000 xs:overflow-y-hidden` : `xs:hidden xs:invisible xs:opacity-0`}>
                    {isExpanded ? <Helmet bodyAttributes={{class: `xs:overflow-hidden`}}></Helmet> : <Helmet bodyAttributes={{class: `xs:overflow-auto`}}></Helmet>}
                    <ul className={isExpanded ? `xs:block text-xl xs:pt-64 xs:text-center xs:text-2l` : `text-xl flex xs:hidden`}>
                        <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="/preview/">About</Link>
                        </li>
                        {/* <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <button className="text-gray-500  opacity-50 cursor-not-allowed" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="#" disabled={true}>Blog</button>
                        </li> */}
                        <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="/books/">Books</Link>
                        </li>
                    </ul>

                    </div>
                    
                
            </nav>
        </>
    )
}
    
export default Navigation