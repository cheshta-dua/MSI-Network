import { useState, useEffect } from "react";
import "./Profile.css";
import {useParams} from "react-router-dom";
import Myprofile from "../../components/MyProfile/Myprofile";
const Profile = () => {
    const{id}=useParams();
    const [user, setUser] = useState(undefined);
    var a = localStorage.getItem('User') || "[]";
    const u = JSON.parse(a);
    console.log("Profile page id ",user);
    const apicall = async () => {
        const apiToCall = `http://localhost:5000/user/user/${id}`;
        const resp = await fetch(`${apiToCall}`);
        const res = await resp.json();


        setUser(res);
    }
    
    useEffect(() => {
        apicall();
    }, []);
    return (<>
        <div className="profile-maincontainer">
            <div>
                <Myprofile  user={user} u={u}/>
            </div>
        </div>
    </>
    )
}
export default Profile;