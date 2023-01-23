import React from 'react'
import { NavLink } from "react-router-dom";
import classnames from "classnames";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top py-2 bg-white shadow">
        <div className="container-fluid">
          <NavLink to="/"><img src="logo.png" className="pe-2" alt="logo" style={{height: '50px'}} /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({isActive} => isActive? 'active' : 'nav-link')} to="/recipes">Recipes</NavLink>
              </li>
              {/* <li className="nav-item">
                <Link className={classnames('nav-link', {'active': pathname === '/tags'})} to="/tags">Tags</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header