import { Link, useMatch } from "react-router-dom";
import HomeIcon from "../../icons/HomeIcon";
import VialIcon from "../../icons/VialIcon";
import UserIcons from "../../icons/UserIcons";
import { useState } from "react";

const SideBar = ({ isOpen, onSidebarToggle }) => {
  const navItems = [
    { to: "/admin/dashboard/", label: "Dashboard", icon: <HomeIcon /> },
    {
      to: "/admin/clients",
      label: "Clients",
      icon: <UserIcons />,
    },
    {
      to: "/admin/diagnostic/",
      label: "Diagnostic Manager",
      icon: <VialIcon />,
      children: [
        { to: "/admin/diagnostic/department", label: "Department" },
        { to: "/admin/diagnostic/test", label: "Tests" },
      ],
    },
  ];

  function SidebarItem({ to, label, children }) {
    const match = useMatch(to);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <li className={match ? "active" : ""}>
        {children && children.length ? (
          <span onClick={toggleExpansion}>{label}</span>
        ) : (
          <Link to={to} onClick={toggleExpansion}>
            {label}
          </Link>
        )}

        {children && isExpanded && (
          <ul>
            {children.map((child) => (
              <SidebarItem key={child.to} to={child.to} label={child.label} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  const sortedNavItems = navItems.slice();
  return (
    <div className={`side-bar ${isOpen ? "close" : ""}`}>
      <div className="sidebar-icon-section">
        <ul>
          {sortedNavItems.map((item) => (
            // <NavItem key={item.to} to={item.to} label={item.icon} />
            <SidebarItem
              key={item.to}
              to={item.to}
              label={item.icon}
              children={[]}
            />
          ))}
        </ul>
      </div>
      <div
        className={`sidebar-text-section  ${isOpen ? "close-nav-text" : ""}`}
      >
        <ul>
          {sortedNavItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              label={item.label}
              children={item.children}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
