import { useEffect, useState } from "react";
import "../Alumni_HomePage/Alumni.css";
const A_Card =(props)=>{
    const [show,setShow]=useState(false);
    
    const {key,para}= props;
    const {name,company,gitUrl=null,LinkedinUrl=null,email=null}=para;
    useEffect(()=>{
        if(email===null){
            setShow(false);
        }
        else{
            setShow(true);
        }
    })
    console.log("name: ",name,props);
    return <>
    <div className="cardContainer" key={key}>
        <div className="userImg"></div>
        <div className="userDetail">
            <div className="userName">{name}</div>
            <div className="userCompany">
                <div>{company}</div>
                <div>
                    {show?<a href={"mailto:" + email}>Email</a>:null} 
                    {!show? 
                        <div>  <a href={"http://"+ LinkedinUrl}>LinkedIn</a></div>
                        : null}  
                </div>
            </div>
        </div>
    </div>
    </>
}

export default A_Card;


{/* <a href={"http://" + gitUrl}></a> */}