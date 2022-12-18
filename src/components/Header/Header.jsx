import "./header.css";
const Header =()=>{
    return <>
    <div className="HeaderContainer">
        <div className="HeaderText">
            <div>
                <h1>Welcome to MSI Network!</h1>
            </div>
            <div>
                <h3>Connect, engage and grow with students of Maharaja Surajmal Institute</h3>
            </div>
        </div>
        <div className="HeaderIllustration">
            <img src="images/illustration.png" alt="illustration"/>
        </div>
    </div>
    </>
}

export default Header;