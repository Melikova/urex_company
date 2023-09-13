import { useForm } from "react-hook-form";
import { app } from '../../firebase.config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from 'react'
import { SignContext } from '../../contexts/SignContext'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'

import Image from 'next/image';
import logo from './../../images/logo_2.svg';

export default function Login() {
  const [ showAuthAlert, setShowAuthAlert ] = useState(false);
  const {setCurrentPage, emailSuccesConfirmed} = useContext(SignContext);
  const auth = getAuth(app);
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "all"});
  const router = useRouter();

  const onSubmit = async(data) => {
    try{
      await signInWithEmailAndPassword(auth, data.email, data.pass);
      localStorage.setItem("isLoggedIn", true);
      router.push("/");
    }catch(error){
      setShowAuthAlert(true);
    } 
  }

    return (
      <>
      {emailSuccesConfirmed &&
        <div className="mb-8 text-center lg:text-left bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{emailSuccesConfirmed && 'Email is succesfully confirmed. Please login'}</span>
        </div>
      }
      {showAuthAlert &&
        <div className="mb-8 text-center lg:text-left bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{showAuthAlert && 'Email or Password is incorrect'}</span>
        </div>
      }

      <a href="/" className="hidden lg:block w-fit mb-8"><Image src={logo} alt="Picture of the author" /></a>
      <div className="block lg:hidden mb-16 absolute">
        <a href="/" className="w-fit font-semibold">
          <FaArrowLeftLong className="inline-block me-2 mt-3"/></a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p className='form_title text-4xl font-semibold mb-12'>Login</p>
      {/* <p className='form_subtitle text-sm font-normal'>Please enter your email and your password</p> */}
      <div className="form-group">
        <label>Email adress</label>
        <input {
          ...register('email', {
            required:"Email is required",
            pattern: {
              value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
              message: "Email is not valid"
            }
          })
        } placeholder='Example johndoe@gmail.com' />
        <div>{errors?.email && <p className='text-red-600 mt-1'>{errors?.email?.message || "Error"}</p>}</div>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input {
          ...register('pass', {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum 8 symbols"
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
              message: "Password must include at least one lowercase, one uppercase, one digit and one special character"
            }
            })
          } 
          type="password" 
          placeholder='At least 8 characters' />
          <div>{errors?.pass && <p className='text-red-600 mt-1'>{errors?.pass?.message || "Error"}</p>}</div>
      </div>
      <div className='text-center text-lg'>
        <p><a href="#" onClick={()=>setCurrentPage('forgot_password')}>Forgot Password?</a></p>
      </div>
      <button type="submit" className='text-white rounded-xl mt-3 mb-3'>
        Sign in
      </button>
    </form>
    <div className='text-center text-lg mt-6'>
      <p>Don't you have an account? <a className="font-semibold" href="#" onClick={()=>setCurrentPage('register')}>Sign up</a></p>
    </div>
    <div className='social flex justify-center '>
      <div className='flex w-fit gap-x-12'>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
          <path d="M7.35122 25.1583C3.63047 25.1369 0.552734 17.5416 0.552734 13.6734C0.552734 7.35488 5.29272 5.97158 7.11948 5.97158C7.94272 5.97158 8.82178 6.29487 9.59712 6.58096C10.1393 6.78052 10.7 6.98652 11.0119 6.98652C11.1986 6.98652 11.6385 6.81128 12.0269 6.65752C12.8551 6.32778 13.8858 5.91797 15.086 5.91797C15.0881 5.91797 15.091 5.91797 15.0931 5.91797C15.9893 5.91797 18.7066 6.11465 20.3402 8.56797L20.7229 9.14302L20.1722 9.55859C19.3854 10.1522 17.9499 11.2352 17.9499 13.3802C17.9499 15.9208 19.5756 16.8979 20.3567 17.3678C20.7015 17.5752 21.0583 17.7891 21.0583 18.2568C21.0583 18.5623 18.6208 25.1204 15.081 25.1204C14.2148 25.1204 13.6025 24.8601 13.0625 24.6305C12.5161 24.398 12.0447 24.1978 11.2658 24.1978C10.8709 24.1978 10.3717 24.3844 9.84311 24.5826C9.1208 24.8521 8.30322 25.1583 7.37554 25.1583H7.35122Z" fill="black" />
          <path d="M15.4604 0.158203C15.5526 3.48223 13.1754 5.78828 10.801 5.64365C10.4097 2.99097 13.1751 0.158203 15.4604 0.158203Z" fill="black" />
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M5.68515 15.2656L4.80143 18.5143L1.57142 18.5815C0.606126 16.8185 0.0585938 14.8014 0.0585938 12.6578C0.0585938 10.585 0.570523 8.63032 1.47795 6.90918H1.47865L4.35426 7.42832L5.61395 10.243C5.3503 10.9999 5.2066 11.8124 5.2066 12.6578C5.2067 13.5754 5.37549 14.4545 5.68515 15.2656Z" fill="#FBBB00" />
          <path d="M25.2245 10.3228C25.3703 11.0789 25.4463 11.8598 25.4463 12.6579C25.4463 13.5528 25.3507 14.4258 25.1687 15.2678C24.5507 18.1332 22.9361 20.6353 20.6993 22.4059L20.6986 22.4052L17.0766 22.2232L16.564 19.0721C18.0482 18.2149 19.2081 16.8736 19.8191 15.2678H13.0312V10.3228H19.9181H25.2245Z" fill="#518EF8" />
          <path d="M20.6999 22.405L20.7006 22.4057C18.5252 24.1275 15.7617 25.1578 12.7535 25.1578C7.91932 25.1578 3.71633 22.4971 1.57227 18.5815L5.686 15.2656C6.75801 18.0829 9.51793 20.0884 12.7535 20.0884C14.1443 20.0884 15.4472 19.7182 16.5652 19.0719L20.6999 22.405Z" fill="#28B446" />
          <path d="M20.8559 3.03545L16.7435 6.35069C15.5864 5.63848 14.2186 5.22705 12.7533 5.22705C9.44441 5.22705 6.63287 7.32456 5.61456 10.2429L1.47921 6.90908H1.47852C3.59119 2.8981 7.84719 0.157715 12.7533 0.157715C15.8333 0.157715 18.6574 1.23809 20.8559 3.03545Z" fill="#F14336" />
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <g clipPath="url(#clip0_342_422)">
            <path d="M25.4473 12.6582C25.4473 18.8975 20.876 24.0688 14.9004 25.0063V16.2715H17.813L18.3672 12.6582H14.9004V10.3135C14.9004 9.32471 15.3848 8.36133 16.9375 8.36133H18.5137V5.28516C18.5137 5.28516 17.083 5.04102 15.7153 5.04102C12.8604 5.04102 10.9941 6.77148 10.9941 9.9043V12.6582H7.82031V16.2715H10.9941V25.0063C5.01855 24.0688 0.447266 18.8975 0.447266 12.6582C0.447266 5.75488 6.04395 0.158203 12.9473 0.158203C19.8506 0.158203 25.4473 5.75488 25.4473 12.6582Z" fill="#1877F2" />
            <path d="M17.813 16.2715L18.3672 12.6582H14.9004V10.3134C14.9004 9.3249 15.3847 8.36133 16.9375 8.36133H18.5137V5.28516C18.5137 5.28516 17.0832 5.04102 15.7156 5.04102C12.8603 5.04102 10.9941 6.77148 10.9941 9.9043V12.6582H7.82031V16.2715H10.9941V25.0063C11.6306 25.1062 12.2828 25.1582 12.9473 25.1582C13.6117 25.1582 14.264 25.1062 14.9004 25.0063V16.2715H17.813Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_342_422">
              <rect width="25" height="25" fill="white" transform="translate(0.447266 0.158203)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <svg style={{color: 'blue'}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="#0063C2"></path> </svg>
      </div>
      </div>
    </div></>
    )
  }
  