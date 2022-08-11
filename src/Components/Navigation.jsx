import React from 'react'
import './css/Navigation.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
      <div className='nav__container'>
        <div >
          <ul className='links'>
            <li><Link to="/home" style={{ textDecoration: 'none', fontSize:'30px' }} >Bella</Link> </li>
            <li><Link to="/home" style={{ textDecoration: 'none', color: 'black' }} >HOME</Link> </li>
            <li><Link to="/fav" style={{ textDecoration: 'none', color: 'black' }} >Favorites</Link> </li>
            <li><Link to="/order" style={{ textDecoration: 'none', color: 'black' }} >Order</Link> </li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }} >Contact</Link> </li>
            <li><Link to="/profile" style={{textDecoration:'none'}} >Profile</Link> </li>
          </ul>
        </div>

      </div>
    </>
  )
}
export default Navigation;