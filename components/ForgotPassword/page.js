import { useForm } from "react-hook-form";
import { app } from '../../firebase.config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react'
import { SignContext } from '../../contexts/SignContext'
import { FaArrowLeftLong } from "react-icons/fa6";

import Image from 'next/image';
import logo from './../../images/logo_2.svg';

export default function ForgotPassword() {
  const {setCurrentPage} = useContext(SignContext);
  const auth = getAuth(app);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "all"});

  const onSubmit = async(data) => {
    try{
      setCurrentPage('password_reset');
    }catch(error){
      console.log(error.message);
    } 
  }
    return (
      <>
      <a href="/" className="hidden lg:block w-fit mb-8"><Image src={logo} alt="Picture of the author" /></a>
      <div className="block lg:hidden mb-16 absolute">
        <a href="/" className="w-fit font-semibold">
          <FaArrowLeftLong className="inline-block me-2 mt-3"/></a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p className='form_title text-2xl lg:text-4xl font-semibold mb-5'>Forgot Password</p>
      <p className='form_subtitle text-sm font-normal'>Enter the email address you used to register with UrexC</p>
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
      <button type="submit" className='text-white rounded-xl mt-3 mb-3'>
        Reset Password
      </button>
    </form>
    <div className="mt-6 text-sm flex items-center justify-center">
        <a onClick={()=>setCurrentPage('login')} className="cursor-pointer text-slate-500 hover:text-slate-700 text-sm w-fit font-medium flex items-center justify-center">
          <FaArrowLeftLong className="inline-block me-3"/>
          Back to Login
        </a>
    </div>
    </>
    )
  }
  