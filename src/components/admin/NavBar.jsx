import { useState } from "react";
import ListIcon from "../../icons/ListIcon";
import ProfileContainer from "./ProfileContainer";

const NavBar = ({ onSidebarToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-theme", isDarkMode);
  };
  return (
    <>
      <div className="nav-bar">
        <div>
          <button className="btn " onClick={onSidebarToggle} type="button">
            <ListIcon />
          </button>
        </div>
        <div className="d-flex gap-2">
          <ProfileContainer />
        </div>
      </div>
    </>
  );
};
export default NavBar;
