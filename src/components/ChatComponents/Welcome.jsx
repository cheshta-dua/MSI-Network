
import { useState, useEffect } from "react";
import "./index.css";
const Welcome = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        setUserName(
            JSON.parse(
                localStorage.getItem('User')
            )[0].given_name
        );
    }, []);
    return (
        <div className="welcome-container">
            <img alt="" />
            <h1>
                Welcome, <span>{userName}!</span>
            </h1>
            <h3>Please select a contact to start messaging</h3>
        </div>
    );
}
export default Welcome;