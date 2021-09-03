import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import Auth0 from '../auth0/Auth0';
import '../Style/NavBar.scss';

const pages = [
  { name: 'Home', path: '/euro-trip' },
  { name: 'Profile', path: '/profile' },
  { name: 'Add measurement', path: '/add-measurement' },
];

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav>
      <div className="menu-icon">
        <button type="button" onClick={handleClick}>
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </button>
      </div>

      <Auth0 />

      <div className={click ? 'mobile-links-active slide-in' : 'mobile-links-inactive'}>
        {pages.map((page) => (
          <Link key={page.name} to={page.path} onClick={closeMobileMenu}>
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
