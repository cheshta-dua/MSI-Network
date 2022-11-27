import React from "react";
import {useNavigate} from "react-router-dom";
import "./Nav.css";
const Nav=() =>{
    const navigate = useNavigate();
    const about= (e)=>{
        e.preventDefault();
        navigate('/about-us');
    }
    const login= (e)=>{
        e.preventDefault();
        navigate('/login');
    }
    return<>
        <div className="NavContainer">
            <div className="Nav_domainName nav_common">
                <div >
                    <img src="images/Msi_logo.jpg" alt="domain" className="domain_img"/>
                </div>
                <div>
                    <h1 className="domain_name">MSI NETWORK</h1>
                </div>
            </div>
            <div className="Nav_links nav_common">
                <div className="links">
                    Alumni
                </div>
                <div className="links" onClick={about}>
                    About Us
                </div>
                <div className="links">Reach Out</div>
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