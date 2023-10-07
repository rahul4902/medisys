import React, { useEffect, useState } from "react";
import Search from "../../icons/Search";
import Logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/images/icons/svg/CartIcon";
const Header = ({ isStickyHeader }) => {
  const [isSticky, setIsSticky] = useState();

  const handleScroll = () => {
    // Check if the user has scrolled beyond a certain threshold (e.g., 100px)
    const threshold = 10;
    setIsSticky(window.scrollY > threshold);
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container-fluid ${isSticky ? "sticky-top" : ""} ${
        isStickyHeader ? "absolute-header" : "bg-white"
      } p-0`}
      id="navBar"
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-0">
          <Link to="/" className="navbar-brand">
            <img
              className="img-fluid logo-image"
              src={Logo}
              alt="Logo"
              height="40"
              width="50"
            />
          </Link>
          <div>
            <Link
              className="navbar-toggler ms-auto me-2 w-auto border-0"
              to="/"
              aria-label="Cart Navbar"
            >
              <CartIcon height="1.5rem" fill="#000" />
            </Link>
            <Link
              className="navbar-toggler ms-auto me-0 w-auto  border-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-label="navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              {/* <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <Link to="feature.html" className="dropdown-item">
                    Features
                  </Link>
                  <Link href="blog.html" className="dropdown-item">
                    Blog Article
                  </Link>
                  <Link href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link href="404.html" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link> */}
            </div>
            <div className="border-start px-2 d-none d-lg-block">
              <button
                type="button"
                className="btn btn-sm p-0 mx-2"
                aria-label="Search"
              >
                <Search />
              </button>
            </div>
            <div className="border-start px-2 d-none d-lg-block">
              <button
                type="button"
                className="btn btn-sm p-0 mx-2"
                aria-label="Cart"
              >
                <CartIcon height="1rem" fill="#000" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
