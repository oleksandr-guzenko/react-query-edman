import React from 'react'
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top py-2 bg-white shadow">
        <div className="container-fluid">
          <Link to="/recipes"><img src="logo.png" className="pe-2" alt="logo" style={{height: '50px'}} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={classnames('nav-link', {'text-success': pathname === '/recipes'})} to="/recipes">Recipes</Link>
              </li>
              <li className="nav-item dropdown">
                <a className={classnames('nav-link dropdown-toggle', {'text-success': pathname === '/tags' || pathname === '/recipe-tags'})} href="#" role="button" data-bs-toggle="dropdown">Tagging</a>
                <ul className="dropdown-menu">
                  <li><Link className={classnames('nav-link', {'bg-secondary text-white': pathname === '/tags'})} to="/tags">Tags</Link></li>
                  <li><Link className={classnames('nav-link', {'bg-secondary text-white': pathname === '/recipe-tags'})} to="/recipe-tags">Recipe Tags</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header