import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='home' smooth={true} duration={500}>BADHUSHA</Link>
        <button className='navbar-toggler' type='button' onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
