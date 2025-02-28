import React from 'react';
import './register.css';

const SignupPage = () => {
  const imageProps = {
    src: '/blob.svg',
    alt: 'Blob Image'
  };

  return (
    <div className='body'>
      <img {...imageProps} className='blob' />
      <div className='orbit'></div>

      <div className='register'>
        <img src='/logo.png' alt='Logo' />
        <h2>Create Your Account</h2>
        <h3></h3>
        <form className='form'>
          <div className='textbox'>
            <input required type='text' />
            <label>Full Name</label>
          </div>
          <div className='textbox'>
            <input required type='email' />
            <label>Email</label>
          </div>
          <div className="textbox">
          <input type="tel" placeholder="Phone Number" required />
         </div>

          <div className='textbox'>
            <input required type='password' />
            <label>Password</label>
          </div>
          <div className='textbox'>
            <input required type='password' />
            <label>Confirm Password</label>
          </div>
          <button type='submit'>Register</button>
        </form>
        <p className='footer'>
          Already have an account? <a href='/Auth/login'>Login!</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
