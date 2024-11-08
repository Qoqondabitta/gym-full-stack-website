import React from 'react'
import "./navbar.css"
import Logo from './logo';

const Navbar = () => {
  return (
    <div className="main-common-style center border-bottom-main">
      <div className="row-center-between container-common-style">
        <Logo />
        <div className="center gap-20">
          <a className="link">Home</a>
          <a className="link">Exercises</a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar