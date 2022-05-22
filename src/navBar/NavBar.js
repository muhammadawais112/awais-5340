import React from 'react';
import { NavLink } from "react-router-dom";
import "../navBar/NavBar.css";


function NavBar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : "normal",

    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger shadow-sm ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#" style={{ color: 'white' }}><h3 className='fw-bold'>E-Commerce</h3></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" >
                <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/">Home</NavLink>
              </li>
              
             
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/service">Services</NavLink>
              </li>
         


              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/signup">SignUp</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/logout">LogOut</NavLink>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>










    </div>


























  );
}

export default NavBar;