import "./header.css";
const Header =()=>{
    return <>
    <div className="HeaderContainer">
        <div className="header-text">
            <div>
                <h1>Welcome to MSI</h1>
            </div>
            <div>
                <h3>Connect, engage and grow with students of Maharaja Surajmal Institute</h3>
            </div>
        </div>
        <div className="header-illustration">
            <img src="images/illustration.png" alt="illustration"/>
        </div>
    </div>
    </>
}

export default Header;