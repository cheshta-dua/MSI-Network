import { useNavigate } from "react-router-dom";
import "./Resume.css";
const ResumeUpload=()=>{
    const navigate=useNavigate();
    const NextbtnHandle=()=>{
        navigate('/Landing-page');
    }
    var a=localStorage.getItem('User') || "[]";   
    const u=JSON.parse(a);
    // console.log("inside resume",u.name);
    return(
        <div className="Resume-container">
            <h1>Hello {u.name}</h1>
            <div className="add-content">Add your past experience to help your peers know you better</div>
            <div className="resume-btn-class">
                <button>Upload Resume</button>
                <span>-or-</span> 
                <button>Apply with LinkedIn</button>
            </div>
            <button onClick={NextbtnHandle}>Save</button>
        </div>
    )
}
export default ResumeUpload;