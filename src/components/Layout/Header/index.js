import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg'

const Header = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid p-2">
      <div>
        <Link to='/'>
          <img src={logo} style={{width: '32px'}}/>
        </Link>
      </div>
      <div>
        <h3>Earthquake Zen Garden</h3>
      </div>
      <div>
        <Link to='/profile'>
          Welcome Boy
        </Link>
      </div>
    </div>
  </nav>
  )
}

Header.propTypes = {}

export default Header
