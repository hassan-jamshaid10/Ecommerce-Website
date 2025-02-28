import React from 'react';
import './reset.css';

const ResetPassword = () => {
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
        <h3>Enter a new password for your account</h3>
        
        <form className='form'>
          <div className='textbox'>
            <input required type='password' />
            <label>New Password</label>
          </div>
          <div className='textbox'>
            <input required type='password' />
            <label>Confirm Password</label>
          </div>
          <button type='submit'>Reset Password</button>
        </form>

        <p className='footer'>
          Remembered your password? <a href="/Auth/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
