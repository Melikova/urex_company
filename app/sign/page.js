"use client"
import Image from 'next/image'
import './style.scss'
import image from "@/images/imageLog.png"
import Login from '../../components/Login/page'
import Register from '../../components/Register/page'
import ConfirmEmail from '../../components/ConfirmEmail/page'
import ForgotPassword from '../../components/ForgotPassword/page'
import PasswordReset from '../../components/PasswordReset/page'
import SetNewPassword from '../../components/SetNewPassword/page'
import { useState } from 'react';
import { SignContext } from '../../contexts/SignContext'


export default function Sign() {
  const [currentPage, setCurrentPage] = useState('login');
  const [emailVerificationCode, setEmailVerificationCode] = useState('666666');
  const [userEmail, setUserEmail] = useState('');

  const renderPage= ()=>{
    switch(currentPage){
      case 'login' : return <Login/>
      case 'register' : return <Register/>
      case 'confirm_email' : return <ConfirmEmail/>
      case 'forgot_password' : return <ForgotPassword/>
      case 'password_reset' : return <PasswordReset/>
      case 'set_new_password' : return <SetNewPassword/>
    }
  }

  return (
    <div className="p-10 flex flex-row min-h-screen">
      <div className="basis-full lg:basis-1/2 flex justify-center items-center">
      <div className='w-full lg:w-2/3 h-fit'>
        <SignContext.Provider value={{
          currentPage, setCurrentPage, 
          emailVerificationCode, setEmailVerificationCode,
          userEmail, setUserEmail
        }}>{ renderPage() }</SignContext.Provider>
      </div>
      </div>
      <div className="basis-1/2 relative registerImage hidden lg:block">
        <div className='absolute bottom-7 w-11/12 left-1/2 transform -translate-x-1/2 hidden lg:block'>
            <Image src={image} alt="" />
            <div className='text'>
                <p className='price'>$1,100,0000</p>
                <p>Fully Furnished Smart Studio Apartment</p>
                <p>Industrial</p>
                <p>Description</p>
            </div>
        </div>
      </div>
    </div>
  )
}
