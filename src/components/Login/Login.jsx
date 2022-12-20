import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                {
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            var userObject = jwt_decode(credentialResponse.credential);
                            localStorage.setItem('User', JSON.stringify(userObject));
                            navigate('/complete-your-profile');   //here we navigate to landing page if user name is found in db otherwise to complete-your-profile page
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                }
            </div>
        </>
    )
}

export default Login;