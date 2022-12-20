import { useNavigate } from "react-router-dom";
const ResumeUpload=()=>{
    const navigate=useNavigate();
    const NextbtnHandle=()=>{
        navigate('/Landing-page');
    }
    return(
        <div>
            <h1>Resume Upload</h1>
            <button onClick={NextbtnHandle}>Next</button>
        </div>
    )
}
export default ResumeUpload;