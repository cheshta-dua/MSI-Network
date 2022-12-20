import { useNavigate } from "react-router-dom";
import "./index.css";
const AddProfile = () => {
    const navigate=useNavigate();
    var userData = localStorage.getItem('User') || "[]";
    const user = JSON.parse(userData);
    const NextbtnHandle=()=>{
        navigate('/upload-resume-page');
    }
    return (

        <div className="addP-container">
            <div>
                <h2 className="">Welcome, {user.name}</h2>
                <p>Complete your profile to start networking</p>
            </div>
            <div>
                <div>
                    <form>
                        <label>
                            Course:
                            <select>
                                <option>BCA</option>
                                <option>BBA</option>
                            </select>
                        </label>
                        <label>
                            Batch:
                            <select>
                                <option>2019-2022</option>
                                <option>2018-2021</option>
                                <option>2017-2020</option>
                            </select>
                        </label>
                        <label >
                            Headline of your profile:
                            <input type="text"/>
                        </label>
                        <button onClick={NextbtnHandle}>Next</button>
                    </form>
                </div>
                <div></div>
            </div>

        </div>

    )
}

export default AddProfile;