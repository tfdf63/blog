import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/tfdf.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>cinema</h6>
          </Link>
          <Link className='link' to='/?cat=condition'>
            <h6>condition</h6>
          </Link>
          <Link className='link' to='/?cat=ultimate'>
            <h6>ultimate</h6>
          </Link>
          <Link className='link' to='/?cat=disk-golf'>
            <h6>disk-golf</h6>
          </Link>
          <span>John</span>
          <span>Выйти</span>
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
