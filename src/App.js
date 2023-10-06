import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import "./assets/css/style.css";
import "./assets/css/admin.css";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./components/Client/Home";
import AdminLogin from "./components/admin/Login";
import AdminRegister from "./components/admin/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateAdminRoute from "./helper/PrivateAdminRoute";
import Header from "./components/Client/Header";
import WhatsAppIcon from "./components/Client/WhatsAppIcon";
import Footer from "./components/Client/Footer";
import SearchResults from "./components/Client/SearchResults";
import QueryFormPopup from "./components/Client/QueryFormPopup";
import About from "./components/Client/About";
import Contact from "./components/Client/Contact";
function App() {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      // Show a custom install button or similar UI element
    });
  }, []);

  // const showSuccessToast = () => {
  //   toast.success("This is a success message", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // };

  const routeArray = [
    { path: "/", isStickyHeader: true, component: <Home /> },
    { path: "/about", isStickyHeader: false, component: <About /> },
    { path: "/contact", isStickyHeader: false, component: <Contact /> },
    {
      path: "/search/details/:id",
      isStickyHeader: false,
      component: <SearchResults />,
    },
  ];

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            {routeArray.map((linkItem, index) => (
              <Route
                key={index}
                path={linkItem.path}
                element={
                  <div className="App">
                    <Header isStickyHeader={linkItem.isStickyHeader} />
                    {linkItem.component}
                    <WhatsAppIcon />
                    <Footer />
                    <QueryFormPopup />
                  </div>
                }
              />
            ))}

            <Route
              path="/admin/*"
              element={
                <PrivateAdminRoute
                  element={
                    <AdminLayout>
                      <Outlet />
                    </AdminLayout>
                  }
                />
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
