import { Link } from 'react-router-dom'
import './style.css'

function LandingPage() {
  return (
    <div className='landing__container'>
        <div className='landing__page'>
            <h1>Welcome to PopX</h1>
            <p style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <button className='btn create_btn'><Link to="/signup">Create Account</Link></button>
            <button className='btn login_btn'><Link to="/login">Already Registered? Login</Link></button>
        </div>
    </div>
  )
}

export default LandingPage