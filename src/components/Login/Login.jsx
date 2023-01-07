import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
    const navigate = useNavigate();
    const apiToCall = "http://localhost:5000/user/login";
    const loginHandle = async () => {
        var a = localStorage.getItem('User') || "[]";
        const u = JSON.parse(a);
        const data = {
            "Email": u.email
        };
        console.log(data);
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await resp.json();
        console.log("res ",res);
        if (res.message === 'User does not exist') {
            navigate('/complete-your-profile');
        }
        else {
            navigate('/Landing-page');
        }
    }

    return (
        <div class="loginCard">
            <div className="loginImg">
                <img src="images/login-page-illustration.png" alt="illustration" />
            </div>
            <div class="logincard-content">
                <h2>Welcome to the community!</h2>
                <p>Join our alumni network and stay connected with your fellow graduates</p>
                <div class="logincard-action">
                    {
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                var userObject = jwt_decode(credentialResponse.credential);
                                localStorage.removeItem('User');
                                localStorage.setItem('User', JSON.stringify(userObject));
                                loginHandle();
                                //navigate('/complete-your-profile');   //here we navigate to landing page if user name is found in db otherwise to complete-your-profile page
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    }
                </div>
            </div>
        </div>

    )
}

export default Login;