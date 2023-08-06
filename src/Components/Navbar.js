import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Countries from './Countries';

function Navbar(props) {

  return (
    <div>
    
    <nav className="navbar navbar-expand-lg bg-body-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ general">Home</Link>  </li> 
        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ business">Business</Link>  </li> 
        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ entertainment">Entertainment</Link>  </li> 
        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ health">Health</Link>  </li> 
        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ science">Science</Link>  </li> 
        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ sports">Sports</Link>  </li> 
        <li className="nav-item">  <Link className="nav-link active" aria-current="page" to="/ technology">Technology</Link>  </li> 

      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex row-reverse">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" style={{maxHeight: "200px", overflowY: "auto"}}>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Action</Link></li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;