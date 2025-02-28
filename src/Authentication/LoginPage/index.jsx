import React from 'react'
import './login.css';


const  LoginPage = () => {

 const imageProps =
  {
     src: '/blob.svg',
     alt: 'Blob Image'
  };

  return (
    <div className='body'>
     <img {...imageProps} className="blob" />
      <div className='orbit'></div>

      <div className='login'>
       <img src='/logo.png'/>
       <h2>Welcome to Admin Panel</h2>
       <h3></h3>
       <form className='form'>
        <div className='textbox'>
            <input required type='text'/>
            <label>Email</label>
        </div>
        <div className='textbox'>
            <input required type='password'/>
            <label>Password</label>
        </div>
        <button type='submit'>Login</button>
       </form>
       <a href="/Auth/forgot">Forgot Password ?</a>
       <p className='footer'>
        Don't have an account ? <a href="/Auth/Signup">Register!</a>
       </p>
      </div>
    </div>
  )
}

export default  LoginPage;
