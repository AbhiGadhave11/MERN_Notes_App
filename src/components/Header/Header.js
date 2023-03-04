// import {Button,Form,Nav,NavDropdown} from 'react-bootstrap'
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Header() {
  
  const history = useNavigate();

  return (
    <div style={{margin:"0px 10px",padding:"0px"}}>
<nav className="navbar navbar-expand-lg bg-body-secondary sticky-top" variant="dark">
  <div className="container-fluid">
    <a className="navbar-brand" >
      <Link to='/'>Notes Zipper</Link>
      {/* Notes Zipper */}
    </a>
    
    <container >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
          <li className="nav-item">
            <a className="nav-link" >
              <Link to='/mynotes'>My Notes</Link>
              </a>
          </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Abhijit Gadhave
          </a>
          
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">My Profile</a></li>
              <li><a className="dropdown-item" href = '/'  
                onClick={()=>{
                  localStorage.removeItem("userInfo");
                  history.push("/")
                }}>Logout</a></li>
              <li><hr className="dropdown-divider"/></li>
            </ul>
          
        </li>
        
      </ul>
    
    </div>
    </container>
  </div>
  
</nav>

</div>
  )
}
