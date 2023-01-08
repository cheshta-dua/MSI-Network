import { useEffect, useState } from "react";
import "./card.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const A_Card = (props) => {
    const [show, setShow] = useState(false);

    const { key, para } = props;
    const { name, company, gitUrl = null, LinkedinUrl = null, email = null, image = null, Designation = null } = para;
    useEffect(() => {
        if (email === null) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    })
    // console.log("name: ", name, props);
    return <>
        <div className="cardContainer" key={key}>
            <div className="userImg">
                <img src={image} alt="alumnus" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="userDetail">
                <div className="userDetailsText">
                    <div className="userName">{name}</div>
                    <div className="userCompany">
                        <div>
                            {show ? Designation : company}
                        </div>
                    </div>
                </div>
                <div class="userDetailsIcons">
                    {show ? <a href={"mailto:" + email}> <EmailIcon /> </a> : null}
                    {!show ?
                        <div>  <a href={"http://" + LinkedinUrl}> <LinkedInIcon /></a></div>
                        : null}
                </div>
            </div>
        </div>
    </>
}

export default A_Card;


{/* <a href={"http://" + gitUrl}></a> */ }