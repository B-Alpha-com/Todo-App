import React from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ handleMouseOver }) => {
  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  return (
    <div className="header-container">
      <FaBars className="fa-icon" onMouseOver={handleMouseOver} />
      <div className="today">Today</div>
      <div className="date">{`${day}/${month + 1}/${year}`}</div>
    </div>
  );
};

export default Header;
