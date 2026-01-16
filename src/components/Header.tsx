import React from 'react'

export function Header() {

  
  return (
    <>

<header id="home" className="w-full h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0369a1] text-white pb-20 relative overflow-hidden flex flex-col items-center justify-center">
  {/* Achtergrond animatie */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-32 left-4 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-4 sm:right-32 w-64 sm:w-80 h-64 sm:h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full blur-3xl animate-pulse delay-500"></div>
    <div className="absolute bottom-1/3 left-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <nav className="w-full h-1/10">
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-xl sm:text-2xl text-[#E8E8E8] w-1/3">
        Thomas Pol
      </div>

      {/* Menu voor desktop */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <a href="#home" className="text-[#E8E8E8] hover:opacity-70 transition-opacity">Home</a>
        <a href="#about" className="text-[#E8E8E8] hover:opacity-70 transition-opacity">About</a>
        <a href="#projects" className="text-[#E8E8E8] hover:opacity-70 transition-opacity">Projects</a>
      </div>

      {/* Hamburger menu voor mobiel */}
      <div className="md:hidden w-1/3 flex justify-end">
        <button className="text-[#E8E8E8] focus:outline-none">
          {/* Icon kan later vervangen worden door een svg */}
          ☰
        </button>
      </div>
    </div>
  </nav>

  {/* Content */}
  <div className="text-center z-10 px-4 sm:px-8 h-9/10 flex flex-col justify-center items-center">
    <h1 className="text-4xl sm:text-6xl md:text-[150px] font-bold mb-4 sm:mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
      Welkom
    </h1>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
      op de portfolio van Thomas Pol
    </h2>
    <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#E8E8E8] text-[#E8E8E8] rounded-lg font-semibold hover:bg-[#E8E8E8] hover:text-[#0E100F] transition-all duration-300 inline-block">
      Bekijk mijn werk
    </a>
  </div>


        
        {/* wave animatie hoofdpagina */}
        <svg className="waves absolute bottom-0 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="m-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave1">
            <use href="#gentle-wave" x="48" y="0" fill="#E8E8E8" opacity={0.25} />
          </g>
          <g className="wave2">
            <use href="#gentle-wave" x="48" y="3" fill="#E8E8E8" opacity={0.5}/>
          </g>
          <g className="wave3">
            <use href="#gentle-wave" x="48" y="5" fill="#E8E8E8" opacity={0.75}/>
          </g>
          <g className="wave4">
            <use href="#gentle-wave" x="48" y="7" fill="#E8E8E8" />
          </g>
        </svg>
      </header>
    </>
  )
}