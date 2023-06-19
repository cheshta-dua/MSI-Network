import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
const A_Card = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [vis, setVis] = useState(false); //for alumni details popup
    const { key, para } = props;
    const { UserName, CurrentCompany, gitUrl = null, LinkedinID = null, email = null, ImageLink = null, Designation = null } = para;
    // console.log(para._id);
    useEffect(() => {
        if (email === null) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    })
 
    
    return <>
        <div className="cardContainer" key={key} onClick={()=>navigate(`/profile/${para._id}`)}>
            <div className="userImg">
                <img src={ImageLink|| "images/dummy_profile.webp"} alt="alumnus" 
                    onError={(e) =>
                        (e.target.onerror = null)(
                          (e.target.src =
                            "images/dummy_profile.webp")
                        )
                      }
                    style={{ width: "100%", height: "100%" }} 
                />
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
                        <div>  <a href={LinkedinID}> <LinkedInIcon /></a></div>
                        : null}
                </div>
            </div>
        </div>
        {/* <div id="asset" style={{ display: vis ? 'block' : 'none' }}>
        <div className="closealumni" onClick={() => setVis(false)}><CloseIcon/></div>
            <div className="assetContainer">
                <h3>Assets</h3>
                
                
            </div>
        </div> */}
    </>
}

export default A_Card;


{/* <a href={"http://" + gitUrl}></a> */ }