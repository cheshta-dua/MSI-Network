import "./Insta.css";
import { InstagramEmbed } from 'react-social-media-embed';
const Insta = () => {
    return (
        <>
            <div className="instaContainer" id="InstaPosts">
                <div>
                    <h1>
                        Past Alumni Meets
                    </h1>
                </div>
                <div className="posts">
                <InstagramEmbed url="https://www.instagram.com/p/CkC_NMpBg1o/?utm_source=ig_web_copy_link" width={328} captioned className="Post"/>
                <InstagramEmbed url="https://www.instagram.com/p/CkC42kABWoF/?utm_source=ig_web_copy_link" width={328} captioned className="Post"/>
                <InstagramEmbed url="https://www.instagram.com/reel/CkC4R7MBFAL/?utm_source=ig_web_copy_link" width={328} captioned className="Post"/>
                <InstagramEmbed url="https://www.instagram.com/p/Cj-ZVMdPGH4/?utm_source=ig_web_copy_link" width={328} captioned className="Post"/>
                </div> 
            </div>
        </>
    )
}

export default Insta;