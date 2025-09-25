
import React from 'react'

export default function Navbar() {
  return (
     <>
     
  <div className=" h-[100px]    navbar rounded-2xl mt-0.5  shadow-sm   bg-amber-950 text-2xl text-white font-bold  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>History</a></li>
        <li>
          <a>Home</a>
          <ul className="p-2">
            <li><a>Booking Histoyr</a></li>
            <li><a>Booking Shedule</a></li>
          </ul>
        </li>
        <li><a>Parlure Booking</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Booking.com</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>History</a></li>
      <li>
        <details>
          <summary>Home</summary>
          <ul className="p-2">
            <li><a>Hotel Booking </a></li>
            <li><a>Car Booking </a></li>
          </ul>
        </details>
      </li>
      <li><a>Parleur Booking</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-2xl text-red-800 bg-amber-400">Create Booking</a>
  </div>
</div>
     
     </>
  )
}


