import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="button-wrapper">
        <h1>CHOOSE ANY ONE TO VIEW IN AR</h1>
        <Link to="/goKart">
          <button className="custom-button">Go Kart</button>
        </Link>
      </div>
      <div className="button-wrapper">
        <Link to="/murphy">
          <button className="custom-button">Murphy</button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
