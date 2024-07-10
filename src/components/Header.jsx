import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo.png';
import menuIcon from '../assets/menu.png';
import Icon from '../assets/shopping_cart 1.png';
import { assets } from '../assets/assets';

const Header = () => {
  const [cartCount, setCartCount] = useState(0); // Example state for cart count

  return (
    <header className="header">
      <div className="header-top">
        <p>10% OFF WHEN YOU ORDER VIA THE MOBILE APP</p>
      </div>
      <div className="header-bottom">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logoImage} alt="Company Logo" className="logo" />
          </Link>
          <div className="menu">
            <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Mahogany" />
          <button>🔍</button>
        </div>
        <div className="actions">
          <button className="action-button">
            <img src={assets.phoneicon} alt="Phone Icon" className="action-icon" />
            Get App
          </button>
          <button className="action-button">
            <img src={assets.user} alt="User Icon" className="action-icon" />
            <span className="action-text">Log in/Register</span>
            <span className="action-t">Login</span>
            
          </button>
          <Link to="/cart" className="cart-button">
            🛒
            <div className="cart-badge">{cartCount}</div>
          </Link>
        </div>
      </div>
      <div className="header-line"></div>
      <nav className="navigation">
        <Link to="/menu">
        <img src={menuIcon} alt="Menu Icon" className="menuicon2" />
          <span>Menu</span>
        </Link>
        <Link to="/shop" className="shop-link">
          Shop
        </Link>
        <Link to="/tables">Tables</Link>
        <Link to="/chairs">Chairs</Link>
        <Link to="/beds-pillows">Beds & Pillows</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
