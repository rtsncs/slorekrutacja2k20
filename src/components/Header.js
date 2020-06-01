import React from "react";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <header className="mainHeader" id="mainHeader">
      <div class="logo">
        <Link to="/" className="slo">
          SLO
        </Link>
      </div>
      <nav>
        <div class="menu">
          <ul class="nav">
            <li class="option">
              <Link to="/">HOME</Link>
            </li>
            <li class="option scroll">KONTAKT</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
