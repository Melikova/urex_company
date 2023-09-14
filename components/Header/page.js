"use client"

import React, { useState, useEffect } from 'react';
import MobileHeader from '../MobileHeader/page';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";

// style
import './style.scss';

function Header() {
  const [state, setState] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const [ isLogged, setIsLogged ] = useState('');
  const [avatarOn, setAvatarOn] = useState(false);

  useEffect(()=>{
    localStorage.getItem('isLoggedIn') && setIsLogged(true);
  })  

  const signOut = ()=>{
    localStorage.removeItem("isLoggedIn");
    setIsLogged(false);
  }

  const handleAvatarToggle = () => {
    setAvatarOn((current)=>!current);
  };

  const handleMenuToggle = () => {
    setMenuOn((current)=>!current);
  };

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
            <Link href="/"><p>Platform</p></Link>
            <Link href="/"><p>Features</p></Link>
            <Link href="/"><p>Who we serve</p></Link>
            <Link href="/"><p>Resources</p></Link>
          </div>
          <div className="buttons">
            <a href="/addlisting" className="button relative">
              <p>Add a listing</p>
              <FaChevronDown size={12} className='text-white'/>
              {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-0">Commercial</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-1">Residential</a>
              </div> */}
            </a>
            {isLogged ===true ? 
            <>
            {/* <button type="button" className="hidden lg:block relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button> */}
            <div className="relative flex items-center ml-3 mt-1 cursor-pointer">
            <div className="flex items-center" onClick={handleAvatarToggle} >
              <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
              <div className='ms-3 text-white text-base font-medium'>{localStorage.getItem('name')}</div>
              <FaChevronDown size={12} className='text-white ms-2'/>
            </div>
            {avatarOn &&
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
              {/* <a href="#" className="block lg:hidden px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-0">See Notifications</a> */}
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-0">Go to Dashboard</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-1">Account Settings</a>
              <a href="#" onClick={()=>signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
            </div>
            }
          </div>
          </> : 
            <div className="second_button button text-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="white" />
              </svg>
              <Link href="/sign">Login/Register</Link>
            </div>
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;