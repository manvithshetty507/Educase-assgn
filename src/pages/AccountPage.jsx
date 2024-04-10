import React from 'react'
import avatar from '../assets/avatar.png'

function AccountPage() {
  return (
    <div className='account__container'>
        <div className='account__page'>
            <p style={{fontSize:'1.4rem', width:'100%'}} className='header'>Account Settings</p>
            <div className="image__container">
                <img src={avatar} alt="avatr" />
                <div className='info'>
                    <p style={{fontWeight:'500',fontSize:'1.1rem'}}>Marry Doe</p>
                    <p>Marry@Gmail.Com</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure veritatis autem facere rem, accusantium repudiandae nemo possimus culpa recusandae!</p>
        </div>
    </div>
  )
}

export default AccountPage