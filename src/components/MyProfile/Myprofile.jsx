import { useState, useEffect } from "react";
import "./myprofile.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Myprofile = () => {
    const [user, setUser] = useState(undefined);
    var a = localStorage.getItem('User') || "[]";
    const u = JSON.parse(a);
    
    const apicall = async () => {
        const apiToCall = `http://localhost:5000/user/user/${u[0].id}`;
        const resp = await fetch(`${apiToCall}`);
        const res = await resp.json();
        

        setUser(res);
    }
    useEffect(() => {
        apicall();
    }, []);
    return (
        <div className="profile-maincontainer">
            <main class="profile">
                <div class="profile-bg"></div>
                <section class="container">
                    <aside class="profile-image">
                        {/* <a class="camera" href="#"> */}
                        <img src={u[0].picture} alt="user" />

                    </aside>
                    <section class="profile-info">
                        <h1 class="first-name">{user ? user.UserName : u[0].given_name}</h1>

                        {user?<h2>{user.CurrentPosition} @ {user.CurrentCompany}</h2>:<h2>ABOUT</h2>} 
                        <p>
                            {user ? user.Description : <div> hello, I'm angela, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!</div>}
                        </p>



                    </section>
                </section>
                <section class="statistics">

                    <a href={user?"http://" + user.LinkdinID:null}><LinkedInIcon/></a>

                </section>
                <button class="icon close"></button>
            </main>
        </div >
    )
}

export default Myprofile;