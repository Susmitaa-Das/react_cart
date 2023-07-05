import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'

const Header = () => {
  return (
    <nav>
      <h2>Logo is here</h2>
      <h1>The cart logo is here</h1>

      <div>
        <Link to={'/'}>Home</Link>
         <Link to={'/cart'}>
            <FiShoppingBag/>
            <p>{0}</p>
         </Link>
      </div>
    </nav>
  )
}

export default Header
