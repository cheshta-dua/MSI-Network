import { ToastContainer} from 'react-toastify';
import AlumniL from "../../components/Alumni_LandingPage/AlumniL";


const LandingPage=({data})=>{
    return(
        <>
            <AlumniL data={data}/>

        </>
    )
}
export default LandingPage;