import React from 'react'

function Header() {
  return (
    <header>            
        <nav className="navbar navbar-light fixed-top py-0 bg-white shadow">
                <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center py-2 justify-content-md-between border-bottom">
                    <div className="navbar-header col-md-3 col-6">
                        <div className="navbar-brand">
                            <a href="https://www.edamam.com/"><img src="assets/img/logo/small-logo.png" className="pe-2" /><img src="assets/img/logo/logo.png" className="logo" /></a>
                        </div>
                    </div>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-none d-lg-flex">
                        <li className="dropdown">
                            <a href="https://www.edamam.com#" className="nav-link px-3 link-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">APIs</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="https://developer.edamam.com/edamam-nutrition-api">Nutrition Analysis API</a></li>
                                <li><a className="dropdown-item" href="https://developer.edamam.com/food-database-api">Food Database API</a></li>
                                <li><a className="dropdown-item" href="https://developer.edamam.com/edamam-recipe-api">Recipe Search API</a></li>
                                  <li><a className="dropdown-item" href="https://developer.edamam.com/recipe-content-management-api">Recipe Content Management API</a></li>
                            </ul>                            
                        </li>
                        <li><a href="https://www.edamam.com/wizard" className="nav-link px-3 link-dark">Nutrition Wizard</a></li>
                        <li><a href="https://www.edamam.com/recipes/salad" className="nav-link px-3 link-dark">Recipes</a></li>
                        <li><a href="https://www.edamam.com/partners" className="nav-link px-3 link-dark">Partners</a></li>
                    </ul>
                    <div className="col-md-3 col-6 text-end">
                        <button type="button" id="signup" className="btn btn-outline-success rounded-pill me-2 px-3 d-none d-xl-inline">Signup API</button>
                        <button type="button" id="login" className="btn btn-outline-secondary rounded-pill px-3 d-none d-xl-inline">Login</button>
                        <button className="navbar-toggler ms-xxl-3 ms-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                            <span className="navbar-toggler-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></span>
                        </button>
                    </div>

                    <div className="offcanvas offcanvas-end" id="offcanvas">
                        <div className="offcanvas-header bg-light">
                            <div className="d-flex flex-row-reverse w-100">
                                <div><button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button></div>
                            </div>
                        </div>
                        <div className="offcanvas-body p-0">
                            <div className="bg-secondary px-5 d-flex flex-column">
                                <div className="text-white text-decoration-none border-bottom py-3 d-lg-none">APIs</div>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 ps-3 d-lg-none">Nutrition Analysis API</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 ps-3 d-lg-none">Food Database API</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 ps-3 d-lg-none">Recipe Search API</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 ps-3 d-lg-none">Recipe Content Management API</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 d-lg-none">Nutrition Wizard</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 d-lg-none">Recipes</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 d-lg-none">Partners</a>
                                <a href="#" className="text-white text-decoration-none border-bottom py-3 d-xl-none">Signup API</a>
                                <a href="#" className="text-white text-decoration-none py-3 d-xl-none">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    </header>
  )
}

export default Header