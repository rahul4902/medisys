import React, { Fragment, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import "./assets/css/style.css";
// import "./assets/css/admin.css";
import "./assets/css/nav.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Client/Header";
import Loader from "./components/Loader";
import Cart from "./components/Client/pages/Cart";
import Search from "./components/Client/pages/Search";
import ContextProvider from "./ContextProvider";
import Checkout from "./components/Client/pages/Checkout";

const Home = React.lazy(() => import("./components/Client/Home"));

// const WhatsAppIcon = React.lazy(() =>
//   import("./components/Client/WhatsAppIcon")
// );
const SearchResults = React.lazy(() =>
  import("./components/Client/pages/SearchResults")
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

  const routeArray = [
    { path: "/", isStickyHeader: true, component: <Home /> },
    { path: "/about", isStickyHeader: false, component: <About /> },
    { path: "/contact", isStickyHeader: false, component: <Contact /> },
    { path: "/search", isStickyHeader: false, component: <Search /> },
    {
      path: "/test/:slug",
      isStickyHeader: false,
      component: <SearchResults />,
    },
    {
      path: "/cart",
      isStickyHeader: false,
      component: <Cart />,
    },
    {
      path: "/checkout",
      isStickyHeader: false,
      component: <Checkout />,
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
      <ContextProvider>
        <Router>
          <Fragment>
            <Routes>
              {routeArray.map((linkItem, index) => (
                <Route
                  key={index}
                  path={linkItem.path}
                  element={
                    <div className="App">
                      <Header isStickyHeader={linkItem.isStickyHeader} />
                      <Suspense fallback={<Loader />}>
                        {linkItem.component}
                      </Suspense>
                      {/* <WhatsAppIcon /> */}
                    </div>
                  }
                />
              ))}
            </Routes>
          </Fragment>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
