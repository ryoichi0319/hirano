'use client'
import Link from 'next/link'
import { useState } from 'react'
import "./nav.css"
export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? "open" : "close"}>
      {/* <style jsx global>{`
                @media (max-width: 767px){
                  body{
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    
                }
              }
            `}</style> */}
      <button className="btn " onClick={toggleNav}>
        <span className="bar"></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className="list">
        <li>
          <Link href="/" className=' hover:opacity-40' onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" onClick={closeNav}>
            Profile
          </Link>
        </li>
        <li>
          <Link href="/#news" onClick={closeNav}>
            News
          </Link>
        </li>
        <li>
          <Link href="/discography" onClick={closeNav}>
            Discography
          </Link>
        </li>
        <li>
          <Link href="/movie" onClick={closeNav}>
            Movie
          </Link>
        </li>
        <li>
          <Link href="/schedule" onClick={closeNav}>
            Schedule
          </Link>
        </li>
        <li>
          <Link href="/live" onClick={closeNav}>
            Live
          </Link>
        </li>
      </ul>
    </nav>
  )
}
