import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "./imgs/generatedtext.png"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "linear-gradient(45deg,#005AA7, #FFFDE4)"}}>
        <div className="container">
          <a className="navbar-brand" to="/"><img src={image} alt="logo" style={{maxHeight:"50px"}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/"><strong>Home</strong></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product"><strong>Products</strong></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hotseller"><strong>Hot Seller</strong></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about"><strong>About</strong></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar