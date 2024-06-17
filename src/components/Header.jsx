import React from "react"
import logo from '../assets/icons8-globe-50.png'

function Header(){
  return (
    <>
      
      <header>
        <img src={logo} alt="logo" />
        <p>my travel journal.</p>
      </header>
    </>
  )
}

export default Header