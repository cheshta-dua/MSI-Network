import { useNavigate } from "react-router-dom";
import "./index.css";
const AddProfile = () => {
    const navigate = useNavigate();
    var userData = localStorage.getItem('User') || "[]";
    const user = JSON.parse(userData);
    const NextbtnHandle = () => {
        navigate('/upload-resume-page');
    }
    return (

        <div className="addP-container">
            <div>
                <h2>Welcome, {user.name}!</h2>
                <p class="subheading">Complete your profile to start networking</p>
            </div>
            <div>
                <form class="profileForm">
                    <div class="details1">
                        <div>
                            <label>
                                Course:
                            </label>
                            <select>
                                <option>BCA</option>
                                <option>BBA</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Batch:
                            </label>
                            <select>
                                <option>2017-2020</option>
                                <option>2016-2019</option>
                                <option>2015-2018</option>
                            </select>
                        </div>
                    </div>
                    <div class="details2">
                        <label>
                            Headline of your profile:
                        </label>
                        <input type="text" placeholder="where do you work?" required/>
                    </div>
                    <div>
                        <button type="submit" onClick={NextbtnHandle}>Next</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default AddProfile;