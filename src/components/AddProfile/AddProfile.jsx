import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const AddProfile = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [course,setCourse]=useState("BCA");
    const [batch,setBatch]=useState("2017-2020");
    const [company,setCompany]=useState("");
    var userData = localStorage.getItem('User') || "[]";
    const user = JSON.parse(userData);
    const NextbtnHandle = () => {
        // navigate to other page when these fileds are not empty
        if(course !== "" && batch !== "" && company !== ""){
            navigate('/upload-resume-page');
        }
        else{
            alert("Kindly fill all the informations.");
            console.log("not filled");
        }
        
    }
    console.log("select",typeof company);
    return (

        <div className="addP-container">
            <div>
                <h2>Welcome, {user.name}!</h2>
                <p class="subheading">Complete your profile to start networking</p>
            </div>
            <div>
                <form class="profileForm">
                    <div className="formData">
                        <div class="details1">
                            <div>
                                <label>
                                    Course:
                                </label>
                                <select value={course} onChange={(e)=>setCourse(e.target.value)} placeholder="BCA" required>
                                    <option selected>BCA</option>
                                    <option>BBA</option>
                                </select>
                            </div>
                            <div>
                                <label>
                                    Batch:
                                </label>
                                <select value={batch} onChange={(e)=>setBatch(e.target.value)} placeholder="2016-2019" required>
                                    <option selected>2017-2020</option>
                                    <option>2016-2019</option>
                                    <option>2015-2018</option>
                                </select>
                            </div>
                        </div>
                        <div class="details2">
                            <label>
                                Headline of your profile:
                            </label>
                            <input type="text" placeholder="where do you work?" required value={company} onChange={(e)=>setCompany(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit" onClick={NextbtnHandle}>Next</button>
                        </div>
                    </div>
                    <div className="formImg">
                        <div><img src={user.picture} /></div><br />
                        <label for="myfile">Edit:</label>
                        <input type="file" id="myfile" name="myfile" className="chhosebtn"  onChange={(e) => setSelectedFile(e.target.files[0])}/>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default AddProfile;