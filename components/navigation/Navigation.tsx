"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import YellowTopBar from "./YellowTopBar"
import Logo from "./Logo"



const Navigation = () => {

  const [isExpanded, toggleExpansion] = useState(false);

  

  
  return (
    <>
      <YellowTopBar />

      <nav className="flex flex-1 items-center justify-between max-w-screen-lg mx-auto pt-8 px-4 sm:px-0 xs:pt-4">
        <div className="flex">
          <Logo />
        </div>
        <button className="hidden xs:display xs:flex items-center px-3 py-2 text-yellow-600 z-40 outline-none focus:outline-none" onClick={() => toggleExpansion(!isExpanded)}>
          <span className={isExpanded ? `text-xl text-gray-500 hover:text-gray-100 border-b-2 border-yellow-600` : `text-xl text-gray-500 hover:text-yellow-600 border-b-2 border-yellow-600`}>
            {isExpanded ? "Close" : "Menu"}
          </span>
        </button>
        <div className={isExpanded ? `xs:block xs:visible xs:opacity-100 xs:top-0 xs:left-0 xs:bottom-0 xs:fixed xs:w-screen xs:bg-yellow-600 ease-in-out duration-1000 overflow-y-hidden z-30` : `xs:hidden xs:invisible xs:opacity-0`}>
          <ul className={isExpanded ? `xs:block text-xl xs:pt-64 xs:text-center flex xs:text-2l` : `text-xl flex xs:hidden`}>
            <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6 ">
              <Link href="/" onClick={(e) =>toggleExpansion(!isExpanded)}>
                <span className="text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100">About</span>
              </Link>
            </li>
            <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
              <Link href="/resume" onClick={(e) =>toggleExpansion(!isExpanded)}>
                <span className="text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100">Resume</span>
              </Link>
            </li>
              {/* <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                <Link href="/dashboard">
                  <span className="text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100">Dashboard</span>
                </Link>
              </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
