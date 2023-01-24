import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// import { data } from "../../Resorce/data";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./Nav.css";


const Nav = ({ dataChangefunc = "",data="" }) => {
    const navigate = useNavigate();

    // console.log('current URL 👉️', window.location.href);
    // console.log('current Pathname 👉️', window.location.pathname);
    const[originalData,setOriginalData]=useState();
    const [user, setUser] = useState({});
    const [vis, setVis] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(()=>{
        setOriginalData(data);
        // console.log(data,"::",originalData);
    },[]);
    
    const about = (e) => {

        e.preventDefault();
        navigate('/about-us');
    }
    const login = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    //logout button handle
    const logoutHandle = () => {
        setUser({});
        toast.success("Logged out Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigate('/');
        localStorage.removeItem('User');
        localStorage.removeItem('auth');
    }
    //login button visibility
    var u;
    var a = localStorage.getItem('User') || "[]";
    useEffect(() => {
        u = JSON.parse(a);
        setUser(u);

        if (a == "[]" || a == null) {
            setVis(false);
        }
        else {
            setVis(true);
        }

    }, [a]);

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
        var FilterData = [];
        if (searchValue.length != 0) {
            FilterData = data.filter((ele) => {
                const searchTerm = searchValue.toLowerCase();
                const fullName = ele.UserName.toLowerCase();
                const company = ele.CurrentCompany.toLowerCase();
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
            // console.log("not found");


        }

    }, [searchValue]);
    //clear Filter btn
    const ClearFilter = () => {
        //changing to its normal value
        dataChangefunc(originalData);
        console.log("nav ",originalData,"=>",data);
        setSearchValue("");
    }

    return (<>

        <div className="NavContainer">
            <div className="NavLeft">
                <div onClick={() => { logoClickHandle() }}>
                    <img src="images/MSI_logo.png" alt="msi logo" className="DomainImg" />
                </div>
                <div onClick={() => { logoClickHandle() }}>
                    <h1 className="DomainName">MSI Network</h1>
                </div>
            </div>

            <div className="NavRight">

                {window.location.pathname == "/Landing-page" || window.location.pathname == "/faculty" || window.location.pathname == "/support" || window.location.pathname == "/Achievers" || window.location.pathname == "/Societies"
                    ? <div className="NavRight-Left">  {/*change its css and classname if required I just gave classname of below's div */}
                        <div className="links" onClick={() => navigate('/Landing-page')}>Alumni</div>
                        <div className="links" onClick={() => navigate('/Achievers')}>Achievers</div>
                        <div className="links" onClick={() => navigate('/Societies')}>Updates</div>
                        <div className="links facu" onClick={() => navigate('/faculty')}>Faculty</div>
                        <div className="links" onClick={() => navigate('/support')}>Support MSI</div>
                        {window.location.pathname == "/Landing-page"
                            ? <div className="search-box">
                                <input type="text" placeholder="search for people or companies" value={searchValue} onChange={(e) => { inputChange(e) }} />
                                <i class="search-icon"><SearchIcon /></i>
                                <i class="clear" onClick={() => { ClearFilter() }}>Clear</i>
                            </div> : null
                        }

                    </div>
                    : <div className="NavRight-Left">

                        <a href="#AbtClg" onClick={() => { logoClickHandle() }} className="links">About College</a>
                        <a href="#InstaPosts" className="links" onClick={() => { logoClickHandle() }}>Past Meets</a>
                        <div className="links" onClick={about}>About Us</div>
                        <a href="#ReachOut" onClick={() => { logoClickHandle() }} className="links">Reach Out</a>
                    </div>
                }

                <div className="links loginbtn">
                    <button className="button" onClick={login} hidden={vis}>
                        Login
                    </button>
                    <img src={user.picture} alt="user-avatar" hidden={!vis} height={"50px"} width={"50px"} />

                    <div className="logoutbtn" style={{ visibility: vis ? "visible" : "hidden" }}>
                        <div className="navpbtn" onClick={()=>navigate('/profile')}>
                            Profile
                        </div>
                        <div className="LogoutBtn" onClick={() => logoutHandle()}  >
                            Log Out
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="navbar-mobile">
            <div className="NavLeft-mobile">
                <div onClick={() => { logoClickHandle() }}>
                    <img src="images/MSI_logo.png" alt="msi logo" className="DomainImg" />
                </div>
                <div onClick={() => { logoClickHandle() }}>
                    <h1 className="DomainName">MSI Network</h1>
                </div>
            </div>
            <div class="sidePanel">
                <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <MenuIcon />
                </div>
                <div className="navbar__menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                    <div className="NavRight-mobile">
                        {window.location.pathname == "/Landing-page" || window.location.pathname == "/faculty" || window.location.pathname == "/support" || window.location.pathname == "/Achievers" || window.location.pathname == "/Societies"
                            ? <div className="NavRight-Left-mobile">
                                <div className="links" onClick={() => navigate('/Landing-page')}>Alumni</div>
                                <div className="links" onClick={() => navigate('/Achievers')}>Achievers</div>
                                <div className="links" onClick={() => navigate('/Societies')}>Updates</div>
                                <div className="links facu" onClick={() => navigate('/faculty')}>Faculty</div>


                                <div className="links" onClick={() => navigate('/college')}>College</div>
                                <div className="search-box">

                                    {/* <div className="links" >College</div> */}
                                    {/* <div className="search-box">


                                    <input type="text" placeholder="search for people or companies" value={searchValue} onChange={(e) => { inputChange(e) }} />
                                    <i class="search-icon"><SearchIcon /></i>
                                    <i class="clear" onClick={() => { ClearFilter() }}>Clear</i>
                                </div> */}
                                </div>
                            </div>
                            : <div className="NavRight-Left-mobile">
                                {/* <a href="#Alumni" onClick={() => { logoClickHandle() }} className="links">
                                    Alumni
                                </a> */}

                                <a href="#AbtClg" onClick={() => { logoClickHandle() }} className="links">About College</a>
                                <a href="#InstaPosts" className="links" onClick={() => { logoClickHandle() }}>Past Meets</a>
                                <div className="links" onClick={about}>About Us</div>
                                <a href="#ReachOut" onClick={() => { logoClickHandle() }} className="links">Reach Out</a>
                            </div>
                        }


                    </div>
                </div>
                <div className="links loginbtn">
                    <button className="button" onClick={login} hidden={vis}>
                        Login
                    </button>
                    <img src={user.picture} alt="user-avatar" hidden={!vis} height={"50px"} width={"50px"} />
                    <div className="logoutbtn" style={{ visibility: vis ? "visible" : "hidden" }}>
                        <div  onClick={()=>navigate('/profile')}>
                           Profile
                        </div>
                        <div className="LogoutBtn" onClick={() => logoutHandle()}  >
                            Log Out
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default Nav;
