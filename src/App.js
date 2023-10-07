import React, { Fragment, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import "./assets/css/style.css";
import "./assets/css/admin.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateAdminRoute from "./helper/PrivateAdminRoute";

import Header from "./components/Client/Header";
// import QueryFormPopup from "./components/Client/QueryFormPopup";

const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"));
const Home = React.lazy(() => import("./components/Client/Home"));
const AdminLogin = React.lazy(() => import("./components/admin/Login"));
const AdminRegister = React.lazy(() => import("./components/admin/Register"));
const WhatsAppIcon = React.lazy(() =>
  import("./components/Client/WhatsAppIcon")
);
const Footer = React.lazy(() => import("./components/Client/Footer"));
const SearchResults = React.lazy(() =>
  import("./components/Client/SearchResults")
);
const About = React.lazy(() => import("./components/Client/About"));
const Contact = React.lazy(() => import("./components/Client/Contact"));

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
  const LoadingSpinner = () => {
    return <>Loading....</>;
  };
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
                    <Suspense fallback={<LoadingSpinner />}>
                      {linkItem.component}
                    </Suspense>
                    <WhatsAppIcon />
                    <Footer />
                    {/* <QueryFormPopup /> */}
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
