import React from 'react'
import { useState } from 'react'
import Burger from '../burger/burger'
import './header.css'
function Header() {
  const [show, setShow] = useState(false)
  const showBurger = () => {
    setShow(!show)
    console.log(show)
  }
  return (
    <div className='header'>
    <div className='wrapper'>
      <div className='upperHeader'>
        <div >
        <img className='logo' alt='logo' src='./logo.png'/>
        </div>
        
        <div>
        <input className='input' type="text" />
        <img className='ikonka' alt='ikonka' src='./poi.png'/>
        <img onClick={showBurger} className='ikonka' alt='ikonka' src='./burger.png'/>
        </div>
      </div>
      <div className='middleHeader'>
        <div className='navbar'>
        <p className='p'>журнал</p>
        <p className='p'>сотрудничества</p>
        <p className='p'>Новости</p>
        <p className='p'>О нас</p>
        </div>
        <div className='socialNetwork'>
          <img className='ikonka' alt='logo' src='./instagrr.svg'/>
          <img className='ikonka' alt='logo' src='./instagrr.svg'/>
          <img className='ikonka' alt='logo' src='./instagrr.svg'/>
        </div>
      </div>
      
      </div>
      {show ? <Burger/>:''}
      </div>
  )
}

export default Header