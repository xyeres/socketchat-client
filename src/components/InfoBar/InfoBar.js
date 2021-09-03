import React from 'react';

const InfoBar = ({ room, handleMenuToggle }) => {
  return (
    <nav className="infoBar">
      <div className="infoBar__title">{room}</div>
      <div className="infoBar__userMenuToggle" onClick={handleMenuToggle} id="menuOpen">
        <i className="fa fa-users" aria-hidden="true"></i>
      </div>
    </nav>
  )
}

export default InfoBar;