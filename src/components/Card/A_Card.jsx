import { useEffect, useState } from "react";
import "./card.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const A_Card = (props) => {
    const [show, setShow] = useState(false);

    const { key, para } = props;
    const { UserName, CurrentCompany, gitUrl = null, LinkdinID = null, email = null, ImageLink = null, Designation = null } = para;
    useEffect(() => {
        if (email === null) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    })
    console.log("name: ", UserName, LinkdinID);
    return <>
        <div className="cardContainer" key={key}>
            <div className="userImg">
                <img src={typeof ImageLink==="undefined"?"images/MSI_logo.png":ImageLink} alt="alumnus" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="userDetail">
                <div className="userDetailsText">
                    <div className="userName">{UserName}</div>
                    <div className="userCompany">
                        <div>
                            {show ? Designation : CurrentCompany}
                        </div>
                    </div>
                </div>
                <div class="userDetailsIcons">
                    {show ? <a href={"mailto:" + email}> <EmailIcon /> </a> : null}
                    {!show ?
                        <div>  <a href={"http://" + LinkdinID}> <LinkedInIcon /></a></div>
                        : null}
                </div>
            </div>
        </div>
    </>
}

export default A_Card;


{/* <a href={"http://" + gitUrl}></a> */ }