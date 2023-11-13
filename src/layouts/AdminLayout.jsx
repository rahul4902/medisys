import { Suspense, useEffect, useState } from "react";
import "../assets/css/admin.css";
import Footer from "../components/admin/Footer";
import NavBar from "../components/admin/NavBar";
import SideBar from "../components/admin/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Test from "../components/admin/components/Test/Test";
import TestEdit from "../components/admin/components/Test/TestEdit";
import Department from "../components/admin/components/department/Department";
import TestList from "../components/admin/components/Test/TestList";
import Package from "../components/admin/components/packages/List";
import Loader from "../components/Loader";
import Category from "../components/admin/components/category/Category";

const AdminLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    const storedSidebarState = localStorage.getItem("sidebarState");
    console.log(storedSidebarState);
    if (storedSidebarState === "closed") {
      setSidebarOpen(false);
    }
  }, []);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    localStorage.setItem("sidebarState", !sidebarOpen ? "open" : "closed");
  };

  const routeArray = [
    { path: "/", component: <Dashboard /> },
    { path: "/diagnostic/test/", component: <TestList /> },
    { path: "/diagnostic/test/create", component: <Test /> },
    { path: "/diagnostic/test/edit", component: <TestEdit /> },
    { path: "/diagnostic/department/", component: <Department /> },
    { path: "/diagnostic/category/", component: <Category /> },
    { path: "/packages", component: <Package /> },
  ];

  return (
    <div className="admin-app">
      <SideBar isOpen={sidebarOpen} />
      <div className="main-content">
        <NavBar onSidebarToggle={handleSidebarToggle} />
        <main className="main">
          <Routes>
            {routeArray.map((linkItem, index) => (
              <Route
                key={index}
                path={linkItem.path}
                element={
                  <>
                    <Suspense fallback={<Loader />}>
                      {linkItem.component}
                    </Suspense>
                  </>
                }
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default AdminLayout;
