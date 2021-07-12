import React from 'react';
import './Login.css';
import Login from './Login';
import loginsvg from './image/login.svg'
import { Link} from "react-router-dom";

const LoginForm = () => {
  return (
    <div className='loginPage'>
      <div className='form-container'>        
        <div className='form-content-left'>
        <Link to='/'>
          <span className='logobtn' >Notify.</span>
        </Link>
        <p className='subtextone'>
          Online Student Management Tool
        </p>
          <img className='form-img' src={loginsvg} alt='login' />
          <span className='form-input-login'>
          Need an account? Signup <Link to='/signup'>here</Link>
        </span>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginForm;