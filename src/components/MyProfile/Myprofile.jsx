import "./myprofile.css";
const Myprofile = () => {
    var a = localStorage.getItem('User') || "[]";
    const u = JSON.parse(a);
    return (
        <div className="profile-maincontainer">
            <main class="profile">
                <div class="profile-bg"></div>
                <section class="container">
                    <aside class="profile-image">
                        {/* <a class="camera" href="#"> */}
                            <img src={u.picture} alt="user" />
                        
                    </aside>
                    <section class="profile-info">
                        <h1 class="first-name">{u.given_name}</h1>
                        <h1 class="second-name">{u.family_name}</h1>
                        <h2>ABOUT</h2>
                        <p>
                            hello hello, I'm angela, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!
                        </p>

                        <aside class="social-media-icons">
                            <a href="https://twitter.com/zephybite" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://codepen.io/zephyo" target="_blank">
                                <i class="fab fa-codepen"></i>
                            </a>
                            <a href="https://github.com/zephyo" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        
                        <a href="https://medium.com/@zephyo" target="_blank">
                            <i class="fab fa-medium"></i>
                        </a>
                    </aside>
                </section>
            </section>
            <section class="statistics">
                <button class="icon arrow left"></button>
                <button class="icon arrow right"></button>
                <p><strong>29</strong> Followers</p>
                <p><strong>184</strong> Following</p>
                <p><strong>6</strong> Likes</p>
            </section>
            <button class="icon close"></button>
        </main>
        </div >
    )
}

export default Myprofile;