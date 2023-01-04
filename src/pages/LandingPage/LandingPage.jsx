import Nav from "../../components/Navbar/Nav";
import { alumniData } from "../../Resorce/data";
import AlumniL from "../../components/Alumni_LandingPage/AlumniL";
import { useState, useEffect } from "react";

const LandingPage=()=>{
    const [data,setData]=useState(alumniData);
    useEffect(()=>{
        setData(alumniData);
    },[]);
    
    console.log("data a", data);

    return(
        <>
            <Nav dataChangefunc={setData}/>
            <AlumniL data={data}/>

        </>
    )
}
export default LandingPage;