import React from 'react'

const Nav = () => {
  return (
    <div>

      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">NETFLIX</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">English</a></li>
                  <li><a class="dropdown-item" href="#">French</a></li>
                  <li><a class="dropdown-item" href="#">Hindi</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Login">Sign In</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Faq">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />

    </div>
  )
}

export default Nav