
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
            <img src="images/hellogif.gif" />
            
            {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_pejowq8e.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop controls autoplay></lottie-player> */}
            <h1>
                Welcome, <span>{userName}!</span>
            </h1>
            <h3>Please select a contact to start messaging</h3>
        </div>
    );
}
export default Welcome;