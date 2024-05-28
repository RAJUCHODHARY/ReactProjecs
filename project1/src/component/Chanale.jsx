import React, { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import "./css/Chanale.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={isOpen ? "sidebar open" : "sidebar"}>
            <ul className="sidebar-menu">
              
                <NavLink className="navlink" to="company">Paragrap</NavLink>
                <NavLink className="navlink" to="chanale">Sidebar</NavLink>
                <NavLink className="navlink" to="Other">other</NavLink>
                <NavLink className="navlink" to="useRef">useref</NavLink>
                <NavLink className="navlink" to="usereducer">reducer</NavLink>
                <NavLink className="navlink" to="taxtarea">taxtarea</NavLink>
                <Outlet />
            </ul>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                X
            </div>
        </div>
    );
};

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Logo</h1>
                <div className="menu-icon" onClick={toggleSidebar}>
                    <h3>...</h3>
                </div>
            </div>
        </nav>
    );
};

const Chanale = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="content">
                <h2>Main Content Area</h2>
                <p>This is the main content of your page.</p>
            </div>
        </div>
    );
};

export default Chanale;
