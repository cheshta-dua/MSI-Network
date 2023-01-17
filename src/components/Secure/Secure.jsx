import { useNavigate } from "react-router-dom";

const Secure =(props)=>{
    const navigate=useNavigate();
    const auth=localStorage.getItem('auth');
    if(auth==true){
        return props.component;
    }
    else{
        navigate('/login');
    }
}
export default Secure;