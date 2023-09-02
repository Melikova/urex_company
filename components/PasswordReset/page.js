import { useForm } from "react-hook-form";
import { app } from '../../firebase.config'
import { getAuth } from "firebase/auth";
import { useState, useContext, useEffect } from 'react'
import { SignContext } from '../../contexts/SignContext'

export default function PasswordReset() {
    const [timer, setTimer] = useState(180);
    const {setCurrentPage, emailVerificationCode, userEmail} = useContext(SignContext);
    const auth = getAuth(app);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "all"});
    
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(() => {
      const countdown = setInterval(() => {
          if (timer > 0) {
              setTimer(timer - 1);
          }
      }, 1000);

      return () => clearInterval(countdown);
    }, [timer]);

    const onSubmit = async(data) => {
        try{
          setCurrentPage('login');
        }catch(error){
          console.log(error.message);
        } 
    }

    return (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <p className="form_title text-4xl font-semibold mb-8">Password Reset</p>
              <p className="form_title text-base mb-8">We sent a code to <span className="font-semibold">{userEmail}</span></p>
              <div className='grid gap-4 grid-cols-6 '>
                {Array.from(emailVerificationCode.toString()).map((val, key)=>(
                  <div className='border grow rounded-xl' key={key}>
                    <input className="w-full aspect-[4/3] rounded-xl"/>
                  </div>
                ))}
              </div>
              <p className='text-base mt-6 mb-4 font-semibold text-center'>{formatTime(timer)}</p>
              <p className='text-center'>Didn't receive the code? <a className="float-none font-semibold" href="#" onClick={()=>setCurrentPage('login')}>Send again</a></p>
              <button type="submit" className='text-white rounded-xl mt-8 mb-3'>Continue</button>
          </form>
        </>
    )
  }
  