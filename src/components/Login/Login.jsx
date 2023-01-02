import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
    const navigate = useNavigate();

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
                                navigate('/complete-your-profile');   //here we navigate to landing page if user name is found in db otherwise to complete-your-profile page
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