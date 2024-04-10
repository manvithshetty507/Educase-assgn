// SignupPage.js
import React, { useState } from 'react';
import './style.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [agency, setAgency] = useState(false)

  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !email || !phone || !company || !password) {
      alert('please enter the details')
      return
    }
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setPassword('');
    setAgency(false)

    navigate('/account')
  };

  return (
    <div className='signup__container'>
      <div className='signup__page'>
        <h1>Create your PopX Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="label-input-container">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="label-input-container">
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>

          <div className="label-input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="label-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <div className="label-input-container">
            <label htmlFor="company">Company name</label>
            <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} />
          </div>

          {/* <label htmlFor="">Are you an Agency</label> */}
          <div className="radios">
            <p className='agency__para'>Are you an Agency ?</p>
            
            <input type="radio" id="yes" name="agency"  checked={agency} onChange={() => setAgency(true)} />
            <label htmlFor="yes" className="radio__label">Yes</label>

            
            <input type="radio" id="no"  name="agency" checked={!agency} onChange={() => setAgency(false)} />
            <label htmlFor="no" className="radio__label"> No</label>
          </div>

          <button type="submit" className='submit__btn'>Create Account</button>
        </form>


      </div>
    </div>
  );
}

export default SignupPage;
