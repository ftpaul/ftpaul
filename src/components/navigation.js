import React, { useState } from "react"
import { Link } from "gatsby"


const Navigation = () => {


    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <>
            <div className="w-screen h-2 bg-yellow-500 absolute t-0 l-0"></div>
            <nav className="flex flex-1 items-center justify-between max-w-screen-md mx-auto pt-16 px-2">
                <div className="flex">
                    <h1 className="text-4xl text-gray-600 pb-4">Paulo Teixeira<span className="font-bold text-5xl text-yellow-600">.</span></h1>
                </div>
                    <button className="xs:display flex items-center px-3 py-2 text-yellow-600 bg-organd-300 z-10" onClick={() => toggleExpansion(!isExpanded)}>
                        <span className="text-gray-500 hover:text-yellow-600 border-b-2 border-yellow-600">Menu</span>
                    </button>
                    <div className={isExpanded ? `block top-0 left-0 absolute` : `hidden`}><div className="absolute w-screen h-screen bg-yellow-600"></div></div>
                    <ul className="text-xl flex xs:hidden ">
                        <li className="mr-6">
                            <Link className="text-gray-500 hover:text-yellow-600" activeClassName="border-b-2 border-yellow-600" to="/about">About</Link>
                        </li>
                        <li className="mr-6">
                            <button className="text-gray-500 opacity-50 cursor-not-allowed"activeClassName="border-b-2 border-yellow-600" to="#" disabled={true}>Blog</button>
                        </li>
                        <li className="mr-6">
                            <Link className="text-gray-500 hover:text-yellow-600"activeClassName="border-b-2 border-yellow-600" to="/books">Books</Link>
                        </li>
                    </ul>
                    
                
            </nav>
        </>
    )
}
    
export default Navigation