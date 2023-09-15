import { useForm } from "react-hook-form";
import { app } from '../../firebase.config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from 'react'
import { SignContext } from '../../contexts/SignContext'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsEye, BsEyeSlash } from "react-icons/bs";
  
import Image from 'next/image';
import logo from './../../images/logo_2.svg';
  
export default function SetNewPassword() {
  const [ passShowOne, setPassShowOne ] = useState(false);
  const [ passShowTwo, setPassShowTwo ] = useState(false);
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

  const handleToggleOne = ()=>{
    setPassShowOne(!passShowOne);
  }

  const handleToggleTwo = ()=>{
    setPassShowTwo(!passShowTwo);
  }

    return (
      <>
      <a href="/" className="hidden lg:block w-fit mb-8"><Image src={logo} alt="Picture of the author" /></a>
      <div className="block lg:hidden mb-16 absolute">
        <a href="/" className="w-fit font-semibold">
          <FaArrowLeftLong className="inline-block me-2 mt-3"/></a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p className='form_title text-2xl lg:text-4xl font-semibold mb-5'>Set new password</p>
      <p className='form_subtitle text-sm font-normal'>Must be at least 8 character</p>
      <div className="form-group">
      <div className="form-group">
              <label>Password</label>
              <div className="flex">
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
                type={passShowOne ? 'text' : "password"} 
                placeholder='At least 8 characters' />
                <div className="cursor-pointer" onClick={handleToggleOne}>
                  {passShowOne ? 
                    <BsEyeSlash className="ml-10 mt-1" size={25}/> :
                    <BsEye className="ml-10 mt-1" size={25}/>
                  }
                </div>
              </div>
                <div>{
                  errors?.pass && 
                    <p className='text-red-600 mt-1'>{errors?.pass?.message || "Error"} </p>
                    }
                </div>
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <div className="flex">
              <input {
                ...register('confirm_pass', {
                  required: "Confirm password is required",
                  validate: val=>{
                    if(watch('pass') !=val){
                      return "Your passwords don't match";
                    }
                  }
                  })
                } 
                type={passShowTwo ? 'text' : "password"} />
                <div className="cursor-pointer" onClick={handleToggleTwo}>
                  {passShowTwo ? 
                    <BsEyeSlash className="ml-10 mt-1" size={25}/> :
                    <BsEye className="ml-10 mt-1" size={25}/>
                  }
                </div>
              </div>
                <div>{errors?.confirm_pass && <p className='text-red-600 mt-1'>{errors?.confirm_pass?.message || "Error"}</p>}</div>
            </div>
            </div>
      <button type="submit" className='text-white rounded-xl mt-3 mb-3'>
             Set new password
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
    