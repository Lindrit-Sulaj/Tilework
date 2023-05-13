import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='max-w-screen-lg px-8 py-4 mx-auto w-full'>
      <Company />
      <Links />
    </nav>
  )
}

function Company() {
  return (
    <div className='flex justify-between'>
      <h2 className='flex items-center gap-2 text-oxfordBlue'>
        <i className="fa-solid fa-helmet-safety fa-xl text-mikado"></i>
        <span className='text-2xl font-bold'>Brickwork</span>
      </h2>
      <div className='flex gap-8'>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-phone fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>038349000000</p>
            <p className='text-neutral-500 text-sm'>Make a call</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-envelope fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>contact@brickwork.com</p>
            <p className='text-neutral-500 text-sm'>Write an email</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-map-location-dot fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>1105 Roosevelt Street CA</p>
            <p className='text-neutral-500 text-sm'>Get directions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Links() {
  return (
    <div className='flex justify-between h-[50px] mt-4'>
      <ul className='flex h-full items-center gap-5'>
        <li className='text-neutral-700'>
          <Link href="/">Home</Link>
        </li>
        <li className='text-neutral-700'>
          <Link href="/">Company</Link>
        </li>
        <li className='text-neutral-700'>
          <Link href="/">Solutions</Link>
        </li>
        <li className='text-neutral-700'>
          <Link href="/">Projects</Link>
        </li>
        <li className='text-neutral-700'>
          <Link href="/">Features</Link>
        </li>
      </ul>
      <div className='flex h-full items-center gap-4'>
        <button className=''>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className='h-full bg-yaleBlue hover:bg-oxfordBlue px-3 text-white'>
          Get a quote
        </button>
      </div>
    </div>
  )
}