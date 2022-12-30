import "./Devs.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Devs = () => {
    return (
        <div class="aboutContent">
            <div class="title">
                <h1>Our Story</h1>
                <p> Hover over the cards to find out :)</p>
            </div>

            <div class="profiles">
                <div class="profileContainer">
                    <div className="profileFront">
                        <div>
                            <img src="images/avatar-akanccha.png" alt="akanchha" />
                        </div>
                        <div>
                            <h3>Akanchha Singh</h3>
                            <p>Frontend Developer</p>
                        </div>
                    </div>
                    <div className="profileBack">
                        <p>I just know a little bit of React JS. Nothing to brag about really, just enough to build a couple of websites in my sleep. And, I like to call myself a competitive coder because that's cooler than saying that I participate in online coding challenges.</p>
                        <p className="contactLinks">
                            <a href="https://github.com/Akanchha112" target="_blank">
                                <GitHubIcon style={{ backgroundColor: 'transparent' }}/>
                            </a>
                            <a href="https://www.linkedin.com/in/akanchha-singh-9138bb202/" target="_blank">
                                <LinkedInIcon />
                            </a>
                        </p>
                    </div>
                </div>
                <div class="profileContainer">
                    <div className="profileFront">
                        <div>
                            <img src="images/avatar-ambika.png" alt="ambika" />
                        </div>
                        <div>
                            <h3>Ambika Bhandari</h3>
                            <p>Backend Developer</p>
                        </div>
                    </div>
                    <div className="profileBack">
                        <p>This place is too short to mention my talents. But basically, I'm a Flutter developer by day and a serial chiller by night.</p>
                        <p className="contactLinks">
                            <a href="https://github.com/ambs17" target="_blank">
                                <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/ambika-bhandari-177833206/" target="_blank">
                                <LinkedInIcon />
                            </a>
                        </p>
                    </div>
                </div>
                <div class="profileContainer">
                    <div className="profileFront">
                        <div>
                            <img src="images/avatar-ayush.png" alt="ayush" />
                        </div>
                        <div>
                            <h3>Ayush Thakur</h3>
                            <p>Backend Developer</p>
                        </div>
                    </div>
                    <div className="profileBack">
                        <p>My college attendance might be low but my enthusiasm to learn new things is not. I'm a curious human who's trying to master MongoDB.</p>
                        <p className="contactLinks">
                            <a href="https://github.com/Ayush-Thakur-21" target="_blank">
                                <GitHubIcon />
                            </a>
                        </p>
                    </div>
                </div>
                <div class="profileContainer">
                    <div className="profileFront">
                        <div>
                            <img src="images/avatar-cheshta.png" alt="cheshta" />
                        </div>
                        <div>
                            <h3>Cheshta Dua</h3>
                            <p>Frontend Developer</p>
                        </div>
                    </div>
                    <div className="profileBack">
                        <p>I worry about fonts & colors while others stress about syntax errors. You can find me bossing around while sipping coffee.</p>
                        <p className="contactLinks">
                            <a href="https://github.com/cheshta-dua" target="_blank">
                                <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/cheshta-dua" target="_blank">
                                <LinkedInIcon />
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Devs;