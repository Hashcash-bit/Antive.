import React, {useRef, useState, useEffect} from 'react';
import './Login.css';
import { useAuth } from '../Signin/context/AuthContext';
import { Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { provider, auth } from "../Signin/firebase";


export default function LoginFunction () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {login} = useAuth()
  const history = useHistory()
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch {
      setError('Failed To Log In')
    }

    setLoading(false)
  }

  return (
    <div className='form-content-rightL'>
      <form className='formL' onSubmit={handleSubmit} noValidate>
        <h1>
          Log In
        </h1>
        <p className='WelcomBackL'>
          Welcome Back!
        </p>
        
        {error && <p className='errorL'>{error}</p>}  

        <div className='form-inputsL'>
          <label className='form-labelL'>Email</label>
          <input
            className='form-inputL'
            ref={emailRef}
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-inputsL'>
          <label className='form-labelL'>Password</label>
          <input
            className='form-inputL'
            ref={passwordRef}
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <button disabled={loading} className='form-input-btnL' type='submit'>
          Login
        </button>
        <div className="form-input-btn-googleL"
        type="submit">
          <div className="googlebtntextL">Continue with</div>
          <div className="googlebtnL">
            <div className="googletextL">
              Google
            </div>
            <FcGoogle />
          </div>
        </div>
        <div className='forgotpassL'>
          <Link to='/forgot-password' style={{ textDecoration: 'none' }}>
          <p className='forgotpasstextL'>Forgot Password?</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
