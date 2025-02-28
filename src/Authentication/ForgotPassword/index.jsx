import React from 'react';
import './forgot.css';

const ForgotPassword = () => {
  const imageProps = {
    src: '/blob.svg',
    alt: 'Blob Image'
  };

  return (
    <div className='body'>
      <img {...imageProps} className="blob" />
      <div className='orbit'></div>

      <div className='login'>
        <img src='/logo.png' alt="Logo" />
        <h2>Reset Your Password</h2>
        <h3>Enter your email to receive a reset link</h3>
        
        <form className='form'>
          <div className='textbox'>
            <input required type='email' />
            <label>Email</label>
          </div>
          <button type='submit'>Send Reset Link</button>
        </form>

        <p className='footer'>
          Remembered your password? <a href="/Auth/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
