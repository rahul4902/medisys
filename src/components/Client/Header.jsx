import React, { useEffect, useState } from "react";
import Search from "../../assets/images/icons/svg/Search";

import { Link } from "react-router-dom";
import CartIcon from "../../assets/images/icons/svg/CartIcon";
import { useValue } from "../../context/clientContext";
import WhatsApp from "../../assets/images/icons/svg/WhatsApp";
import SiteNav from "../Client/includes/SiteNav";
const Header = ({ isStickyHeader }) => {
  const [isSticky, setIsSticky] = useState();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const { sideNav, setSideNav } = useValue();

  const handleScroll = () => {
    // Check if the user has scrolled beyond a certain threshold (e.g., 100px)
    const threshold = 10;
    setIsSticky(window.scrollY > threshold);
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    console.log("sedeNav", sideNav);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSideNav(!sideNav);
  };

  return (
    <>
      <SiteNav />
      {/* <div
        className={`container-fluid ${isSticky ? "sticky-top" : ""} ${
          isStickyHeader ? "absolute-header" : "bg-white"
        } p-0`}
        id="navBar"
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0">
            <div className="d-flex">
              <span
                className="navbar-toggler me-0 w-auto  border-0"
                onClick={toggleSidebar}
              >
                <span className="navbar-toggler-icon"></span>
              </span>
              <Link to="/" className="navbar-brand">
                <img
                  className="img-fluid logo-image"
                  src={Logo}
                  alt="Logo"
                  height="100%"
                  width="100%"
                />
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-sm p-0 mx-2 whatsapp-icon"
                aria-label="WhatsApp"
              >
                <WhatsApp height="1.5rem" fill="#4caf50" />
              </button>
              <Link
                className="navbar-toggler ms-auto me-2 w-auto border-0"
                to="/"
                aria-label="Cart Navbar"
              >
                <CartIcon height="1.5rem" fill="#000" />
              </Link>
            </div>
            <div
              className={`collapse navbar-collapse ${sideNav ? "show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto mobileSideBar">
                <Link
                  to="/"
                  className="nav-item nav-link"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-item nav-link"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="nav-item nav-link"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
                <div className="nav-item dropdown">
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
                </Link>
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
            </div>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Header;
