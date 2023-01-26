import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
    const navigate = useNavigate();
    const apiToCall = "http://localhost:5000/user/login";
    const loginHandle = async (userObject) => {
        localStorage.setItem('User', JSON.stringify(userObject));
        var user = localStorage.getItem('User') || "[]";
        const u = JSON.parse(user);
        //send data to backend
        const data = {
            "email": u.email,
        };
        // console.log("login ", data, " ", u.email);
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        localStorage.setItem('auth', true);
        const res = await resp.json();
        // console.log("res ",typeof res.user);
        // console.log("User ",Object.assign(u, res.user));
        if (res.message === 'User does not exist') {
            toast("Login Successful");
            navigate('/complete-your-profile');
        }
        else {
            //const items = JSON.parse(localStorage.getItem("myItems"));
            // const newItems = JSON.stringify([...items,{name:"new item"}])
            // localStorage.setItem("myItems",newItems);
            const newuser=JSON.stringify([Object.assign(u, res.user)]);
            localStorage.setItem('User',newuser);
            toast.success("Login Successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/Landing-page');
        }
    }

    return (
        <div class="loginCard">
            <div className="loginImg">
                <img src="images/login-page-illustration.png" alt="illustration" />
            </div>
            <div class="logincard-content">
                <h2 >Welcome to the community!</h2>
                <p>Join our alumni network and stay connected with your fellow graduates</p>
                <div class="logincard-action">
                    {
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                var userObject = jwt_decode(credentialResponse.credential);
                                localStorage.removeItem('User');

                                loginHandle(userObject);
                                //navigate('/complete-your-profile');   //here we navigate to landing page if user name is found in db otherwise to complete-your-profile page
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    }
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>

    )
}

export default Login;