
import React,{ useEffect, useState  }  from "react";
import {useNavigate} from "react-router-dom";

import "./Nav.css";
const Nav = () => {
    const navigate = useNavigate();


    const [user,setUser]=useState({});
    const [vis,setVis]=useState(false);

    const about= (e)=>{

        e.preventDefault();
        navigate('/about-us');
    }
    const login = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    var u; 
    useEffect(()=>{
        var a=localStorage.getItem('User') || "[]";
        // console.log("a ",a);
        u=JSON.parse(a); 
        setUser(u);
    
        if(a=="[]" || a ==null){
            setVis(false);
        }
        else{
            setVis(true);
        }
        
    },[]);
    
    console.log("inside nav  ",user);
    
    return<>

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
                    <button className="button" onClick={login} hidden={vis}>
                        Login
                    </button>
                    <img src={user.picture} alt="user " hidden={!vis} height={"50px"} width={"50px"}/>
                </div>
            </div>
        </div>
    </>
}

export default Nav;