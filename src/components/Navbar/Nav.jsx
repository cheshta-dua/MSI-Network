import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlumniL from "../Alumni_LandingPage/AlumniL";
import { alumniData } from "../../data";
import "./Nav.css";
const Nav = ({dataChangefunc}) => {
    const navigate = useNavigate();

    //how to get url and pathname
    // console.log('current URL 👉️', window.location.href);
    // console.log('current Pathname 👉️', window.location.pathname);

    const [user, setUser] = useState({});
    const [vis, setVis] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    //navigate to about us page
    const about = (e) => {
        e.preventDefault();
        navigate('/about-us');
    }
    //navigate to login page
    const login = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    //login button visibility
    var u;
    useEffect(() => {
        var a = localStorage.getItem('User') || "[]";
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
    useEffect(()=>{
        const FilterData = alumniData.filter((ele) => {
            const searchTerm = searchValue.toLowerCase();
            const fullName = ele.name.toLowerCase();
            const company=ele.company.toLowerCase(); 
            return (
                searchTerm &&
                fullName.startsWith(searchTerm) || company.startsWith(searchTerm) &&
                fullName !== searchTerm 
            );
        });
        if(FilterData.length !=0){
            console.log(typeof FilterData);
            dataChangefunc(FilterData);
        }
        
    },[searchValue])
    //clear Filter btn
    const ClearFilter = () => {
        //changing to its normal value
        console.log(typeof alumniData);
        dataChangefunc(alumniData);
        setSearchValue("");
        
    }
    
    // console.log("nav ",setData());

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
                        <input type="text" placeholder="Search by name or company" value={searchValue} onChange={(e) => { inputChange(e) }} />
                        <span onClick={() => { ClearFilter() }}>Clear</span>
                    </div>
                    : <div className="NavRight-Left">
                        <a href="#Alumni" onClick={() => { logoClickHandle() }} className="links">
                            Alumni
                        </a>
                        <div className="links" onClick={about}>About Us</div>
                        <a href="#ReachOut" className="links">Reach Out</a>
                    </div>
                }

                <div className="links">
                    <button className="button" onClick={login} hidden={vis}>
                        Login
                    </button>
                    <img src={user.picture} alt="user " hidden={!vis} height={"50px"} width={"50px"} />
                </div>
            </div>
        </div>
    </>
}

export default Nav;