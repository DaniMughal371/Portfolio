function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <div className="navbar-brand">{props.brandName}</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.resumeLink}>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  