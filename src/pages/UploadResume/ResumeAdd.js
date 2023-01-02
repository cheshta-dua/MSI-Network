import ResumeUpload from "../../components/AddResume/ResumeUpload";
import Nav from "../../components/Navbar/Nav";
const ResumeAdd=()=>{
    return(
        <>
            <Nav dataChangefunc={()=>{}}/>
           
            <ResumeUpload />
        </>
    )
}
export default ResumeAdd;