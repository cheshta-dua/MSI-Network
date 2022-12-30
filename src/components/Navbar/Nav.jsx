
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import AlumniL from "../Alumni_LandingPage/AlumniL";
import { alumniData } from "../../data";
import SearchIcon from "@mui/icons-material/Search";


import "./Nav.css";


const Nav = ({dataChangefunc}) => {
    const navigate = useNavigate();

    // console.log('current URL 👉️', window.location.href);
    // console.log('current Pathname 👉️', window.location.pathname);

    const [user, setUser] = useState({});
    const [vis, setVis] = useState(false);
    const[searchValue,setSearchValue]=useState("");
    const about = (e) => {

        e.preventDefault();
        navigate('/about-us');
    }
    const login = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    //login button visibility
    var u;
    useEffect(() => {
        var a = localStorage.getItem('User') || "[]";
        // console.log("a ",a);
        u = JSON.parse(a);
        setUser(u);

        if (a == "[]" || a == null) {
            setVis(false);
        }
        else {
            setVis(true);
        }

    }, []);

    //from logo to home page navigate
    const logoClickHandle = () => {
        navigate("/");
    }

    //store input value in searchbox
    const inputChange = (e) => {
        setSearchValue(e.target.value);
    }

    // filter logic
    useEffect(() => {
        var FilterData=[];
        if (searchValue.length !=0) {
            FilterData = alumniData.filter((ele) => {
                const searchTerm = searchValue.toLowerCase();
                const fullName = ele.name.toLowerCase();
                const company = ele.company.toLowerCase();
                return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) || company.startsWith(searchTerm) &&
                    fullName !== searchTerm
                );
            });
        }

        if (FilterData.length != 0) {
            console.log(typeof FilterData);
            dataChangefunc(FilterData);
            
        }
        else {
            console.log("not found");
            
        }

    }, [searchValue]);
    //clear Filter btn
    const ClearFilter = () => {
        //changing to its normal value
        console.log(typeof alumniData);
        dataChangefunc(alumniData);
        setSearchValue("");
    }

    return <>

        <div className="NavContainer">
            <div className="NavLeft">
                <div onClick={() => { logoClickHandle() }}>
                    <img src="images/MSI_logo.png" alt="msi logo" className="DomainImg" />
                </div>
                <div>
                    <h1 className="DomainName">MSI Network</h1>
                </div>
            </div>

            <div className="NavRight">
                {window.location.pathname == "/Landing-page"
                    ? <div className="search-box">
                        <input type="text" placeholder="search for people or companies" value={searchValue} onChange={(e)=>{inputChange(e)}}/>
                        <i class="search-icon"><SearchIcon /></i>
                        <i class="clear" onClick={()=>{ClearFilter()}}>Clear</i>
                    </div>
                    : <div className="NavRight-Left">
                        <a href="#Alumni" onClick={() => { logoClickHandle() }} className="links">
                            Alumni
                        </a>
                        <div className="links" onClick={about}>About Us</div>
                        <a href="#ReachOut" onClick={() => { logoClickHandle() }} className="links">Reach Out</a>
                    </div>
                }

                <div className="links">
                    <button className="button" onClick={login} hidden={vis}>
                        Login
                    </button>
                    <img src={user.picture} alt="user-avatar" hidden={!vis} height={"50px"} width={"50px"} />
                </div>
            </div>
        </div>
    </>
}

export default Nav;
