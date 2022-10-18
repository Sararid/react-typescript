import React from "react";
//style
import "./Layout.scss";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>  )
}

export default Layout