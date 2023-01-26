import { useNavigate } from "react-router-dom";
import A_Card from "../Card/A_Card";
import "./AlumniL.css";
import ChatIcon from '@mui/icons-material/Chat';
const AlumniL =( {data})=>{
    const navigate=useNavigate();
    const ChatHandle=()=>{
        navigate('/chat');
    }
    return(
    <div className="AlumniL-container">
        {Array.isArray(data)?
        data.map((ele) => {
            
                    return (<A_Card
                        key={ele.id}
                        para={ele}
                    />)
                }) : null}
        
        
    </div>
    )
}

export default AlumniL;