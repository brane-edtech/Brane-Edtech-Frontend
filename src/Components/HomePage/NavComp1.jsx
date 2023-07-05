import React, { useState } from 'react';
import branelogo from '../../assets/branelogo.png';
import NavData from "../../assets/Json_Data/nav.json"

const NavComp1 = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const {navData} = NavData;
  console.log(navData)
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="Navbar__Div__navcomp1">
      <div className="Navbar__Div__navcomp1__logo">
          <img src={branelogo} alt="Brane" />
      </div>
      <ul className="Navbar__Div__navcomp1__navContent">
        <li><a
            href="#"
            onClick={() => handleLinkClick('Home')}
            className={activeLink === 'Home' ? 'active' : ''}
        >
          AI Powered
        </a></li>
        <li

        >
          <a
            href="#"
            className={activeLink === 'Advisory Board' ? 'active' : ''}
            onClick={() => handleLinkClick('Advisory Board')}
          >
            Advisory Board
          </a>
        </li>
        <li><a
          href="#"
          onClick={() => handleLinkClick('Patents')}
          className={activeLink === 'Patents' ? 'active' : ''}
        >
          Patents
        </a></li>
        <li><a
          href="#"
          onClick={() => handleLinkClick('Concept Based')}
          className={activeLink === 'Concept Based' ? 'active' : ''}
        >
          Concept Based
        </a></li>
      </ul>
    </div>
  );
};

export default NavComp1;
