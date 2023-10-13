import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Aside() {
  return (
    <div className="w-0 md:w-1/4 border border-gray-700 lg:w-1/5 h-0 md:h-screen flex flex-col overflow-y-hidden bg-black shadow-lg m-3 rounded-xl">
    <div className="p-5 mb-2 bg-black rounded-full sticky top-0 self-center ">
      <Image
        className="border border-indigo-100 shadow-lg round"
        src="/logo.jpg "
        alt="porfile"
        width={100}
        height={100}
      />
      <div className="pt-2 mt-2 w-full text-center text-xl text-white">
        @tapir
      </div>
    </div>
    <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer p-4 ">
      <a
        className="hover:bg-gray-300 bg-black flex gap-1 items-center text-white p-3 w-full text-xl text-left font-semibold"
        href=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        <i className="fa fa-comment text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
        Messages
      </a>
      <a
        className="hover:bg-gray-300 bg-black flex gap-1 items-center p-3 w-full text-xl text-left  text-white font-semibold"
        href=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <i className="fa fa-cog text-white text-2xl pr-1 pt-1 float-right"></i>
        Settings
      </a>
      <Link
        className="hover:bg-gray-300 bg-black flex gap-1 items-center p-3 w-full text-xl text-left  text-red-500 font-semibold"
        href="/login"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <i className="fa fa-arrow-left text-red-500 text-2xl pr-1 pt-1 float-right"></i>
        Log out
      </Link>
    </div>
  </div>
  )
}

export default Aside