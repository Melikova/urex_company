"use client"

import React, { useState, useEffect } from 'react';
import MobileHeader from '../MobileHeader/page';
import Link from 'next/link';

// style
import './style.scss';

function Header() {
  const [state, setState] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    const addClassScroll = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 10 ) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener('scroll', addClassScroll);
  });

  function hamburgerSlide() {
    if (hamburgerMenu === false) {
      setHamburgerMenu(true);
      document.body.style.overflow = 'hidden';
    } else {
      setHamburgerMenu(false);
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <header className={state ? "bg-color" : null}>
      <MobileHeader hamburgerMenu={hamburgerMenu} hamburgerSlide={hamburgerSlide} />
      <div className={hamburgerMenu ? 'menu hamburgerSlide' : 'menu'}>
        <div className="container">
          <div className="navLink">

            <Link href="/">
              <p>Platform</p>
            </Link>
            <Link href="/">
              <p>Features</p>
            </Link>
            <Link href="/">
              <p>Who we serve</p>
            </Link>
            <Link href="/">
              <p>Resources</p>
            </Link>
          </div>
          <div className="buttons">
            <div className="button">
              <p>
                Add a listing
              </p>
            </div>
            <div className="button text-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="white" />
              </svg>
              <Link href="/sign">Login/Register</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;