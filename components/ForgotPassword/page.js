import { useForm } from "react-hook-form";
import { app } from '../../firebase.config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react'
import { SignContext } from '../../contexts/SignContext'

export default function ForgotPassword() {
  const {setCurrentPage} = useContext(SignContext);
  const auth = getAuth(app);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "all"});

  const onSubmit = async(data) => {
    try{
      const user = signInWithEmailAndPassword(auth, data.email, data.pass);
      console.log(user);
    }catch(error){
      console.log(error.message);
    } 
  }
    return (
      <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p className='form_title text-4xl font-semibold mb-5'>Forgot Password</p>
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
    </>
    )
  }
  