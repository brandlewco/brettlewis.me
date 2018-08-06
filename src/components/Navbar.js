import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
    <div class="column is-8 is-offset-2">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image is-128x128">
            <img src="/img/bott.gif" className="is-rounded" alt="Ghost Face Killa" style={{maxHeight: 256}}/>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        {/* <Link className="navbar-item" to="/about">
          About
        </Link> */}
      </div>
      </div>
    </div>
  </nav>
)

export default Navbar
