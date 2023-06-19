import { useState, useEffect } from "react";
import "./myprofile.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Myprofile = (props) => {
    // console.log("myProfile  ",props.user);
    
    const { UserName, CurrentCompany, gitUrl = null, LinkedinID = null, email = null, ImageLink = null, Designation = null, Batch = null, Education = null, PastCompany = null, Description = null, CurrentPosition = null } = props.user || {};

    return (

        <main className="profile">
            <div className="profile-bg"></div>
            <section className="container">
                <aside className="profile-image">
                    <img 
                        src={ImageLink ||"images/dummy_profile.webp"}
                        // onError={({ currentTarget }) => {
                        //     currentTarget.onError = null;  prevents looping
                        //     currentTarget.src = "images/dummy_profile.webp" || props.u[0].picture;
                        // }}
                        // style={{ width: "20px", height: "30px" }}
                    />

                </aside>
                <section className="profile-info">
                    <h1 className="first-name">{props.user ? UserName : props.u[0].given_name}</h1>

                    {props.user ? <h2 className="companyInfo">{CurrentPosition} @ {CurrentCompany}</h2 > : <h2 className="companyInfo">ABOUT</h2>}

                </section>
                <p className="profile-info description">
                    {Description ? Description : <div> hello, I'm {props.user ? UserName : null}, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!</div>}
                </p>
                <div className="otherInfo">
                    <h3>Worked at: <span> {PastCompany ? PastCompany : "no information"}</span></h3>
                    <h3>College:<span> {Education ? Education : "no information"}</span></h3>
                    <h3>Batch:<span> {Batch ? Batch : "no information"}</span></h3>
                </div>
                <div>
                    <a href={"mailto:" + email ? email : null}> <EmailIcon /> </a>
                    <a href={props.user ? LinkedinID : null}><LinkedInIcon /></a>
                </div>


            </section>
            {/* <button className="icon close"></button> */}
        </main>
        // </div >
    )
}

export default Myprofile;