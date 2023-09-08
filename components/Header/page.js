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
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M23.715 9.16502L12.465 0.16502C12.332 0.0585172 12.1667 0.000488281 11.9963 0.000488281C11.8258 0.000488281 11.6605 0.0585172 11.5275 0.16502L0.2775 9.16502C0.156135 9.26239 0.0680565 9.39509 0.025468 9.54474C-0.0171205 9.69439 -0.0121105 9.85359 0.0398037 10.0003C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5007 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V9.00002H2.8875L12 1.71002L21.1125 9.00002H21C20.8011 9.00002 20.6103 9.07904 20.4697 9.21969C20.329 9.36034 20.25 9.55111 20.25 9.75002V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4503 23.6819 10.3601C23.8079 10.27 23.903 10.1431 23.9539 9.99673C24.0049 9.8504 24.0093 9.69187 23.9665 9.54294C23.9237 9.39401 23.8359 9.26198 23.715 9.16502ZM10.5 16.5H13.5V22.5H10.5V16.5Z" fill="white" />
                <path d="M18.7501 19.9426L17.7826 18.9751L16.7251 20.0326L18.2251 21.5326C18.3656 21.6723 18.5557 21.7507 18.7538 21.7507C18.952 21.7507 19.1421 21.6723 19.2826 21.5326L23.7826 17.0326L22.7251 15.9751L18.7501 19.9426Z" fill="white" />
              </svg> */}
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