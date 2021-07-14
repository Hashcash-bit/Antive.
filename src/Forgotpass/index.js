import React from 'react';
import './forgotpass.css';
import ForgotPassword from './forgotpass';
import forgotpass from './image/forgotpass.svg'
import { Link} from "react-router-dom";

const ForgotPass = () => {
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
            <img className='form-img' src={forgotpass} alt='Forgot Pass?' />
            <span className='form-input-login'>
            Need an account? Signup <Link to='/signup'>here</Link>
          </span>
          </div>
          <ForgotPassword />
        </div>
      </div>
    
  );
};

export default ForgotPass;