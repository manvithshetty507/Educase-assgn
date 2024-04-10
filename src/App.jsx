import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import AccountPage from './pages/AccountPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/account' element={<AccountPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
