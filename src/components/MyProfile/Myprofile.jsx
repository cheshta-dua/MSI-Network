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
            <main className="profile">
                <div className="profile-bg"></div>
                <section className="container">
                    <aside className="profile-image">
                        {/* <a className="camera" href="#"> */}
                        <img src={u[0].picture} alt="user" />

                    </aside>
                    <section className="profile-info">
                        <h1 className="first-name">{user ? user.UserName : u[0].given_name}</h1>

                        {user ? <h2 className="companyInfo">{user.CurrentPosition} @ {user.CurrentCompany}</h2 > : <h2 className="companyInfo">ABOUT</h2>}

                    </section>
                    <p className="profile-info description">
                        {user ? user.Description : <div> hello, I'm angela, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!</div>}
                    </p>
                    <div>
                        <a href={user.LinkedinID}><LinkedInIcon /></a>
                    </div>


                </section>
                {/* <button className="icon close"></button> */}
            </main>
        </div >
    )
}

export default Myprofile;