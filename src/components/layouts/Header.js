import React from 'react'

function Header() {
  return (
    <header>            
        <nav className="navbar navbar-light fixed-top py-0 bg-white shadow">
                <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center py-2 justify-content-md-between border-bottom">
                    <div className="navbar-header col-md-3 col-6">
                        <div className="navbar-brand">
                            <a href="/"><img src="logo.png" className="pe-2" alt="logo" style={{height: '50px'}} /></a>
                        </div>
                    </div>
                </div>
            </nav>
    </header>
  )
}

export default Header