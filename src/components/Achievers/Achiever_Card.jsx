import { useEffect, useState } from "react";
import "./Achievers.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const A_Card = (props) => {
    const [show] = useState(false);
    const { key, para } = props;
    const { name, achievement, LinkedinUrl = null, image = null, desc } = para;

    
    return <>
        <div className="A-CardContainer" key={key}>
            <div className="A-userImg">
                <img src={image} alt="alumni-pic" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="A-userDetail">
                <div className="userDetailsText">
                    <div className="Name">{name}</div>
                    <div className="Ach">{achievement}</div>
                    <div className="Desc">{desc}</div>
                </div>
                <div class="userDetailsIcons">
                    {!show ?
                        <div>  <a href={LinkedinUrl} target="_blank"> <LinkedInIcon /></a></div>
                        : null}
                </div>
            </div>
        </div>
    </>
}

export default A_Card;