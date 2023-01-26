import { ToastContainer} from 'react-toastify';
import AlumniL from "../../components/Alumni_LandingPage/AlumniL";
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router-dom";
const LandingPage=({data})=>{
    const navigate=useNavigate();
    const ChatHandle=()=>{
        navigate('/chat');
    }
    return(
        <>
            <AlumniL data={data}/>
            <div onClick={ChatHandle} className="ChatIcon"><ChatIcon /></div>
        </>
    )
}
export default LandingPage;