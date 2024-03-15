import React from 'react'

const Header = ({switchBetween,
  getSwitch}) => {
  return (
    <header data-bs-theme="dark">
  <div class="text-bg-dark collapse" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4>About</h4>
          <p class="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4>Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-danger shadow-sm">
    <div class="container">
    <ul class="nav nav-pills flex-row mb-auto">
      <li class="nav-item" onClick={() => switchBetween("home")}>
        <a href="#" className={`nav-link text-white ${getSwitch === "home" && 'bg-dark'}`} aria-current="home">
          Home
        </a>
      </li>
      <li onClick={() => switchBetween("createPost")}>
        <a href="#" className={`nav-link text-white ${getSwitch === "createPost" && 'bg-dark'}`} aria-current="createPost">
          Dashboard
        </a>
      </li>
    </ul>
      <button class="navbar-toggler text-bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
  )
}

export default Header