import "./header.css";
import { Fade } from "react-awesome-reveal";
const Header = () => {
    return <>
        <Fade triggerOnce delay={100}>
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
                    <img src="images/illustration.png" alt="illustration" />
                </div>
            </div>
        </Fade>
    </>
}

export default Header;