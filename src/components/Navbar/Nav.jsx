import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    const navigate = useNavigate();
    const about = (e) => {
        e.preventDefault();
        navigate('/about-us');
    }
    const login = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    return <>
        <div className="NavContainer">
            <div className="NavLeft">
                <div>
                    <img src="images/MSI_logo.png" alt="msi logo" className="DomainImg" />
                </div>
                <div>
                    <h1 className="DomainName">MSI Network</h1>
                </div>
            </div>
            <div className="NavRight">
                <a href="#Alumni" className="links">
                    Alumni
                </a>
                <div className="links" onClick={about}>
                    About Us
                </div>
                <a href="#ReachOut" className="links">
                    Reach Out
                </a>
                <div className="links">
                    <button className="button" onClick={login}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Nav;