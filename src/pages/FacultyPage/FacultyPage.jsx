import { useState, useEffect } from "react";
import Nav from "../../components/Navbar/Nav";
import Faculty from "../../components/Faculty/Faculty";
import { facultyData } from "../../Resorce/FacultyData";
const FacultyPage=()=>{
    const [data,setData]=useState(facultyData);
    useEffect(()=>{
        setData(facultyData);
    },[]);
    return(
        <>
        <Nav />
        <Faculty />
        </>
    )
}

export default FacultyPage;