import React from "react";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <header class="mainHeader">
      <div class="logo">
        <span class="slo">SLO</span>
      </div>
      <nav>
        <div class="menu">
          <ul class="nav">
            <li class="option">
              <Link to="/class">HOME</Link>
            </li>
            <li class="option">KONTAKT</li>
            <li class="option">XDD</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
