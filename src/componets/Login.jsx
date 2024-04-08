import React from 'react'
import Nav from './Nav'
import BottomNav from './BottomNav'

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
          </div>
        </div>
      </div>
      <br />
      <BottomNav />
    </div>
  )
}

export default Login