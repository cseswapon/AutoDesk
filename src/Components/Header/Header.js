import React from 'react';
import './Header.css';
import img from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            {/* header top section */}
            <div className="header-subbort">
                <p><i className="fas fa-envelope"></i> abc@abcSupport.com</p>
                <p><i className="fas fa-phone-square-alt"></i> +88-012-98-856</p>
                <p><i className="fas fa-university"></i> Institute Account</p>
            </div>
            {/* header main section */}
            <div className="header-menu">
                <div className="logo-img">
                    <img src={img} alt="log not found" />
                </div>
                <div className="nav-link">
                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#1976d3",
                            borderBottom: "2px solid #1976d3"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#1976d3",
                            borderBottom: "2px solid #1976d3"
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/service"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#1976d3",
                            borderBottom: "2px solid #1976d3"
                        }}
                    >
                        Service
                    </NavLink>
                    <NavLink
                        to="/support"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#1976d3",
                            borderBottom: "2px solid #1976d3"
                        }}
                    >
                        Support
                    </NavLink>
                    <NavLink
                        to="/help"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#1976d3",
                            borderBottom: "2px solid #1976d3"
                        }}
                    >
                        Help
                    </NavLink>
                </div>
            </div>
        </>

    );
};

export default Header;