import Nav from "../../components/Navbar/Nav";
import { alumniData } from "../../data";
import AlumniL from "../../components/Alumni_LandingPage/AlumniL";
import { useState } from "react";
const LandingPage=()=>{
    const [data,setData]=useState(alumniData);
    
    
    return(
        <>
            <Nav datafunc={setData}/>
            <AlumniL data={data}/>
        </>
    )
}
export default LandingPage;