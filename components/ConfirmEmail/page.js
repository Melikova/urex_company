import { useForm } from "react-hook-form";
import { app } from '../../firebase.config'
import { getAuth } from "firebase/auth";
import { useState, useContext, useEffect } from 'react'
import { SignContext } from '../../contexts/SignContext'
import OtpInput from 'react-otp-input';
import '../ConfirmEmail/style.css'

export default function ConfirmEmail() {
    const [inputDisabled, setInputDisabled] = useState(false);
    const [ showAuthAlert, setShowAuthAlert ] = useState(false);
    const [timer, setTimer] = useState(180);
    const [otp, setOtp] = useState('');
    const {setCurrentPage, emailVerificationCode, setEmailVerificationCode, userEmail, setEmailSuccesConfirmed} = useContext(SignContext);
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
      if(emailVerificationCode === parseInt(otp)){
        setCurrentPage('login');
        setEmailSuccesConfirmed(true);
      }else{
        setShowAuthAlert(true);
      }
    }

    const handleSendAgain =()=>{
      setEmailVerificationCode(Math.floor(Math.random()*(999999 - 100000 +1 ))+100000);
      setTimer(180);
      setShowAuthAlert(false);
      setOtp('');
    }

    return (
        <>
          {timer === 0 && 
            <div className="mb-8 text-center lg:text-left bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{'Time is expired !!!'}</span>
            </div>
          }
          {showAuthAlert &&
            <div className="mb-8 text-center lg:text-left bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{showAuthAlert && 'Code is incorrect !!!'}</span>
            </div>
          }
          {emailVerificationCode}
          <form onSubmit={handleSubmit(onSubmit)}>
              <p className="form_title text-4xl font-semibold mb-8">Confirm Email</p>
              <p className="form_title text-base mb-8">We sent a code to <span className="font-semibold">{userEmail}</span></p>
              {timer === 0 ?
                <OtpInput
                inputType="number"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                containerStyle='grid gap-3 grid-cols-6 justify-between'
                inputStyle="pointer-events-none border rounded-md text-center outline-none font-semibold text-xl border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400"
              />
                :
              <OtpInput
                inputType="number"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                containerStyle='grid gap-3 grid-cols-6 justify-between'
                inputStyle="border rounded-md text-center outline-none font-semibold text-xl border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400"
              />
              }
              <p className='text-base mt-6 mb-4 font-semibold text-center'>{formatTime(timer)}</p>
              <p className='text-center'>Didn't receive the code? <a className="float-none font-semibold" href="#" onClick={()=>handleSendAgain()}>Send again</a></p>
              <button disabled={timer===0 && true} type="submit" className='text-white rounded-xl mt-8 mb-3'>Submit</button>
          </form>
        </>
    )
  }
  