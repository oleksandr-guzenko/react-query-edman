import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top py-2 bg-white shadow">
        <div className="container-fluid">
          <NavLink to="/recipes"><img src="logo.png" className="pe-2" alt="logo" style={{height: '50px'}} /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink to="/recipes" className={({ isActive }) => isActive ? 'text-success nav-link' : 'nav-link'}>
                Recipes
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tags" className={({ isActive }) => isActive ? 'text-success nav-link' : 'nav-link'}>
                  Tagging
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header