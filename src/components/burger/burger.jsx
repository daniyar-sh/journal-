import React from 'react'
import './burger.css'

function Burger() {
  return (
    <div className='burger'>
        <div className='burgerWrapper'>
          <div className='read'>
          <div>
           <p className='burgerO'>ЧИТАТЬ</p>
            <p className='burgerP' >БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
            <p className='burgerP'>БУДЬТЕ ЗДОРОВЫ</p>
           </div>
           <div>
            <p className='burgerO'>фото</p>
            <p className='burgerO'>видео</p>
           </div>
          </div>
           
        </div>
        <div className='information'>
           <div>
           <p className='burgerO'> информация</p>
            <p className='burgerP'>о нас </p>
            <p className='burgerP'> бла бла</p>
            <p className='burgerP'> бла бла</p>
           </div>
           <div> <p className='burgerO'> сотрудничества</p>
            <p className='burgerP'>реклама </p>
            <p className='burgerP'> бла бла</p>
            <p className='burgerP'> бла бла</p></div>
           <div> <p className='burgerO'> архив</p>
            <p className='burgerP'>2019 2020 2021 </p>
          </div>
        </div>
        
    </div>
  )
}

export default Burger