import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import "./index.css";
const AddProfile = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [User,setUser]=useState({
        "UserName":"",
        "Email": "",
        "CurrentCompany":"",
        "CurrentPosition":"",
        "PastCompany":"",
        "Education":"",
        "Batch":"2017-2020",
        "Course":"BCA",
        "Description":"",
        "LinkedinUrl":""
    });
    
    
    var userData = localStorage.getItem('User') || "[]";
    const user = JSON.parse(userData);
    
    // post api
    const apiToCall = "http://localhost:5000/user/register";
    const ProfileApiHanlde= async (e) => {
        e.preventDefault();
        const data = {
            
            ...User,
            "UserName":user.name,
            "Email": user.email,
        };
        
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await resp.json();
        // console.log("profile", res);
        if(res.user){
            toast.success("Registered Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            navigate('/Landing-page');
        }
        // if (res.message === 'User does not exist') {
        //     navigate('/complete-your-profile');
        // }
        // else {
        //     navigate('/Landing-page');
        // }
    }

    const NextbtnHandle = (e) => {
        e.preventDefault();
        // navigate to other page when these fields are not empty
        if (User.Course !== "" && User.Batch !== "" && User.CurrentCompany !== "") {
            ProfileApiHanlde(e);
        }
        else {
            alert("Please write a headline, it will help your peers know you better.");
            console.log("not filled");
        }

    }
    
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
                                <select value={User.Course} onChange={(e) => setUser({...User,Course:e.target.value})} placeholder="BCA" required>
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
                                <select value={User.Batch} onChange={(e) =>setUser({...User,Batch:e.target.value})} placeholder="2016-2019" required>
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
                                <input type="text" placeholder="where are you currently working?" required value={User.CurrentCompany} onChange={(e) => setUser({...User,CurrentCompany:e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Designation:
                                </label>
                            </td>
                            <td>
                                <input type="text" placeholder="what are you currently doing?" value={User.CurrentPosition} onChange={(e) => setUser({...User,CurrentPosition:e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Past Company:
                                </label>
                            </td>
                            <td>
                            <input type="text" placeholder="where did you work in past?" value={User.PastCompany} onChange={(e) => setUser({...User,PastCompany:e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Past Education/schooling:
                                </label>
                            </td>
                            <td>
                            <input type="text" placeholder="where did you work in past?" value={User.Education} onChange={(e) =>setUser({...User,Education:e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    LinkedIn Profile:
                                </label>
                            </td>
                            <td>
                            <input type="url" placeholder="it will help other's contact you easily" value={User.LinkedinUrl} onChange={(e) => setUser({...User,LinkedinUrl:e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Description:
                                </label>
                            </td>
                            <td>
                            <input type="url" placeholder="it will help other's to know you" value={User.Description} onChange={(e) => setUser({...User,Description:e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" onClick={(e)=>NextbtnHandle(e)}>Save</button>
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