import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            alert('Please enter the details')
            return
        }
        setEmail('');
        setPassword(''); 
        navigate('/account')
    };

  return (
    <div className='signup__container'>
      <div className='signup__page'>
        <h1>Signin to your PopX Account</h1>
        <p style={{color:'gray', marginBottom:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={handleSubmit}>


          <div className="label-input-container__login">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="label-input-container__login">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <button type="submit" className='login__btn'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default LoginPage