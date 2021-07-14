import React, {useRef, useState, useEffect} from 'react';
import './Login.css';
import { useAuth } from '../Signin/context/AuthContext';
import { Link, useHistory } from "react-router-dom";

export default function Login () {
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
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <h1>
          Log In
        </h1>
        <p className='WelcomBack'>
          Welcome Back!
        </p>
        
        {error && <p className='error'>{error}</p>}  

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            ref={emailRef}
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            ref={passwordRef}
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <button disabled={loading} className='form-input-btn' type='submit'>
          Login
        </button>
        <div className='forgotpass'>
          <Link to='/forgot-password' style={{ textDecoration: 'none' }}>
          <p className='forgotpasstext'>Forgot Password?</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
