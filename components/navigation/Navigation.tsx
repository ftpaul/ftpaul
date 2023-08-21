//import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import YellowTopBar from "./YellowTopBar";
import Logo from "./Logo"

const Navigation = ({ isDashboard }: { isDashboard?: boolean }) => {

  //const [isExpanded, toggleExpansion] = useState(false);

  const isExpanded = true

  return (
    <>
      <YellowTopBar />

      <nav className="flex flex-1 items-center justify-between max-w-screen-lg mx-auto pt-8 px-4 sm:px-0 xs:pt-4">
        <div className="flex">
          <Logo />
        </div>
        {/* <button className="hidden xs:display xs:flex items-center px-3 py-2 text-yellow-600 bg-organd-300 z-40 outline-none focus:outline-none"
          onClick={() => toggleExpansion(!isExpanded)}> */}
        <button className="hidden xs:display xs:flex items-center px-3 py-2 text-yellow-600 bg-organd-300 z-40 outline-none focus:outline-none">
          <span className={isExpanded ? `text-xl text-gray-500 hover:text-gray-100 border-b-2 border-yellow-600` : `text-xl text-gray-500 hover:text-yellow-600 border-b-2 border-yellow-600`}>
            {isExpanded ? "Close" : "Menu"}
          </span>
        </button>
        <div className={isExpanded ? `xs:block xs:visible xs:opacity-100 xs:top-0 xs:left-0 xs:absolute xs:w-screen xs:h-screen xs:bg-yellow-600 xs:ease-in-out xs:duration-1000 xs:overflow-y-hidden z-30` : `xs:hidden xs:invisible xs:opacity-0`}>
          <Head>
            <body className={isExpanded ? "xs:overflow-hidden" : "xs:overflow-auto"} />
          </Head>
          <ul className={isExpanded ? `xs:block text-xl xs:pt-64 xs:text-center xs:text-2l` : `text-xl flex xs:hidden`}>
            <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6 ">
              <Link href="/">
                <span className="text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100">About</span>
              </Link>
            </li>
            <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
              <Link href="/resume">
                <span className="text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100">Resume</span>
              </Link>
            </li>
            {isDashboard ? (
              <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                <Link href="/dashboard">
                  <span className="text-gray-500 hover:text-yellow-600 xs:hover:text-gray-100">Dashboard</span>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
