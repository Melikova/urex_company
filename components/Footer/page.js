import React from 'react'
import { FaPhoneFlip, FaEnvelope, FaLocationDot, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa6';


function Footer() {
  return (
    <>
    <footer>
      <div className='flex flex-col lg:flex-row bg-zinc-200 py-16 px-6 xl:px-48 justify-between'>
        <div className='lg:basis-2/6 mb-10'>
          <div className='text-2xl font-semibold mb-8'>UREXC</div>
          <p className='text-neutral-800 text-base font-normal mb-6 flex items-center'><FaPhoneFlip size={20} className='me-3'/>+1 206-214-2298</p>
          <p className='text-neutral-800 text-base font-normal mb-6 flex items-center'><FaEnvelope size={20} className='me-3'/>support@support.com</p>
          <p className='text-neutral-800 text-base font-normal mb-6 flex items-center'><FaLocationDot size={20} className='me-3'/>2728 Hickory StreetSalt Lake City, UT 84104</p>
        </div>
        <div className='lg:basis-1/6 mb-10'>
          <div className='text-xl font-semibold mb-8'>Quick Links</div>
          <p className='text-neutral-800 text-base font-normal mb-3'>Home</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>About</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>Listings</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>Services</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>Blogs</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>Become an Agent</p>
        </div>
        <div className='lg:basis-1/6 mb-10'>
          <div className='text-xl font-semibold mb-8'>Discovery</div>
          <p className='text-neutral-800 text-base font-normal mb-3'>Canada</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>United States</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>Germany</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>Africa</p>
          <p className='text-neutral-800 text-base font-normal mb-3'>India</p>
        </div>
        <div className='lg:basis-1/4'>
          <div className='subscribe'>
            <div className='row'>
              <div className='text-xl font-semibold mb-6'>Subscribe to our Newsletter!</div>
              <input placeholder="Email address" className="border-slate-200 placeholder-slate-400 rounded-md px-3 py-3 w-full"/>
              <p className='text-xl font-semibold my-8'>Follow us on</p>
              <div className='flex items-start space-x-4'>
                <FaLinkedinIn size={30}/>
                <FaFacebookF size={26}/>
                <FaInstagram size={30}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row bg-black text-slate-400 py-5 px-6 xl:px-48 justify-between'>
        <div className='mb-6 lg:mb-0'>© Urexc – All rights reserved</div>
        <div className='flex lg:space-x-10 flex-col lg:flex-row'>
          <div className='mb-3 lg:mb-0'>Terms and Conditions</div>
          <div className='mb-3 lg:mb-0'>Privacy Policy</div>
          <div className='mb-3 lg:mb-0'>Disclaimer</div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer