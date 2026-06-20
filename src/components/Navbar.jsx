import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // load user from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // log out function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top px-3 py-2 transition-all ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-success'
    }`} style={{ zIndex: 1050 }}>
      
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
          <div className="logo-wrapper position-relative">
            <img 
              src="malyanna_farm_icon.svg" 
              width="40" 
              height="40" 
              alt="Malyanna Farm"
              className="logo-image"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark small" style={{ fontSize: '8px' }}>
              FARM
            </span>
          </div>
          <span className={`fw-bold fs-4 ${isScrolled ? 'text-success' : 'text-white'}`}>
            Malyanna <span className="fw-light">Farm</span>
          </span>
        </NavLink>

        {/* Mobile toggle */}
        <button
          className={`navbar-toggler border-0 ${isScrolled ? 'text-dark' : 'text-white'}`}
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navbar Links */}
        <div className='collapse navbar-collapse' id="navbarNav">
          <ul className='navbar-nav ms-auto align-items-lg-center gap-lg-2'>
            {/* Home */}
            <li className='nav-item'>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded-pill transition-all ${
                    isScrolled ? 'text-dark' : 'text-white'
                  } ${
                    isActive ? 'active-link' : ''
                  }`
                }
                end
              >
                <i className="bi bi-house-fill me-1"></i> Home
              </NavLink>
            </li>

            {/* Add Product - Only visible when logged in */}
            {user && (
              <li className='nav-item'>
                <NavLink 
                  to="/addproduct" 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 rounded-pill transition-all ${
                      isScrolled ? 'text-dark' : 'text-white'
                    } ${
                      isActive ? 'active-link' : ''
                    }`
                  }
                >
                  <i className="bi bi-plus-circle-fill me-1"></i> Add Product
                </NavLink>
              </li>
            )}

            {/* About */}
            <li className='nav-item'>
              <NavLink 
                to="/#about" 
                className={`nav-link px-3 py-2 rounded-pill transition-all ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="bi bi-info-circle-fill me-1"></i> About
              </NavLink>
            </li>

            {/* Conditional rendering based on user */}
            {user ? (
              <>
                {/* User Profile */}
                <li className='nav-item dropdown'>
                  <button 
                    className={`nav-link dropdown-toggle d-flex align-items-center gap-2 px-3 py-2 rounded-pill ${
                      isScrolled ? 'text-dark' : 'text-white'
                    }`}
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="user-avatar bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '32px', height: '32px' }}>
                      <i className="bi bi-person-fill text-success"></i>
                    </div>
                    <span className="fw-semibold d-none d-md-inline">
                      {user.username}
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 mt-2" aria-labelledby="userDropdown">
                    <li>
                      <NavLink to="/profile" className="dropdown-item py-2">
                        <i className="bi bi-person-circle me-2"></i> Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/orders" className="dropdown-item py-2">
                        <i className="bi bi-box-seam me-2"></i> My Orders
                      </NavLink>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button 
                        onClick={handleLogout}
                        className="dropdown-item text-danger py-2"
                      >
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                {/* Sign In */}
                <li className='nav-item'>
                  <NavLink 
                    to="/signin" 
                    className={({ isActive }) => 
                      `nav-link px-3 py-2 rounded-pill transition-all ${
                        isScrolled ? 'text-dark' : 'text-white'
                      } ${
                        isActive ? 'active-link' : ''
                      }`
                    }
                  >
                    <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
                  </NavLink>
                </li>

                {/* Register - Button style */}
                <li className='nav-item'>
                  <NavLink 
                    to="/signup" 
                    className={({ isActive }) => 
                      `btn ${
                        isScrolled 
                          ? 'btn-success text-white' 
                          : 'btn-light text-success'
                      } rounded-pill px-4 py-2 fw-semibold shadow-sm hover-shadow transition-all`
                    }
                  >
                    <i className="bi bi-person-plus-fill me-1"></i> Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar