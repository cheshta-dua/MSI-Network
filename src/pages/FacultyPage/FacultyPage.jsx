import { useState, useEffect } from "react";

import Faculty from "../../components/Faculty/Faculty";
import { facultyData } from "../../Resorce/FacultyData";
const FacultyPage=()=>{
    const [data,setData]=useState(facultyData);
    useEffect(()=>{
        setData(facultyData);
    },[]);
    return(
        <>
        <Faculty />
        </>
    )
}

export default FacultyPage;