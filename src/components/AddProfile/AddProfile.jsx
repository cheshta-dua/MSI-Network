import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const AddProfile = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [course, setCourse] = useState("BCA");
    const [batch, setBatch] = useState("2017-2020");
    const [company, setCompany] = useState("");
    var userData = localStorage.getItem('User') || "[]";
    const user = JSON.parse(userData);
    const NextbtnHandle = () => {
        // navigate to other page when these fields are not empty
        if (course !== "" && batch !== "" && company !== "") {
            navigate('/Landing-page');
        }
        else {
            alert("Please write a headline, it will help your peers know you better.");
            console.log("not filled");
        }

    }
    console.log("select", typeof company);
    return (
        <div className="addP-container">
            <div>
                <h2>Welcome, {user.name}!</h2>
                <p class="subheading">Complete your profile to start networking</p>
            </div>
            <div>
                <form class="profileForm">
                    <table>
                        <tr>
                            <td>
                                <label>
                                    Course:
                                </label>
                            </td>
                            <td>
                                <select value={course} onChange={(e) => setCourse(e.target.value)} placeholder="BCA" required>
                                    <option selected>BCA</option>
                                    <option>BBA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Batch:
                                </label>
                            </td>
                            <td>
                                <select value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="2016-2019" required>
                                    <option selected>2018-2021</option>
                                    <option >2017-2020</option>
                                    <option>2016-2019</option>
                                    <option>2015-2018</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                   Headline:
                                </label>
                            </td>
                            <td>
                                <input type="text" placeholder="what are you currently doing?" required value={company} onChange={(e) => setCompany(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Current Company:
                                </label>
                            </td>
                            <td>
                                <input type="text" placeholder="where are you currently working?" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Past Company:
                                </label>
                            </td>
                            <td>
                            <input type="text" placeholder="where did you work in past?" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    LinkedIn Profile:
                                </label>
                            </td>
                            <td>
                            <input type="url" placeholder="it will help other's contact you easily" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" onClick={NextbtnHandle}>Save</button>
                            </td>
                        </tr>
                    </table>
                    <div className="formImg">
                        <div><img src={user.picture} /></div><br />
                        <label for="myfile">Edit:</label>
                        <input type="file" id="myfile" name="myfile" className="choosebtn" onChange={(e) => setSelectedFile(e.target.files[0])} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProfile;