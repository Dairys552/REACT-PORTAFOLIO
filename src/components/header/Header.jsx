import React from 'react'
import './header.css'
import ME from '../../assets/ME.png'

const Header = () => {
  return (
    <div>
    <div className='container header-container'>
      <h5>HOLA SOY</h5>
      <h1>DAIRYS ROJAS</h1>
      <h5 className='text-light'></h5>

        <div className="me">
          <img src={ME} alt="me" className='foto1' />
        </div>

      </div>
    </div>
  )
}

export default Header