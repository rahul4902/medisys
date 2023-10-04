import React, { useEffect, useState } from "react";
import Search from "../icons/Search";
import Logo from "../icons/logo.svg";
import { Link } from "react-router-dom";
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
            <img className="img-fluid logo-image" src={Logo} alt="Logo" />
          </Link>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0 w-auto"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="product.html" className="nav-item nav-link">
                Products
              </a>
              <a href="store.html" className="nav-item nav-link">
                Store
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <a href="feature.html" className="dropdown-item">
                    Features
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Blog Article
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <div className="border-start ps-4 d-none d-lg-block">
              <button type="button" className="btn btn-sm p-0">
                <Search />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
