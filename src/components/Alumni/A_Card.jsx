import "./Alumni.css";
const A_Card =({para})=>{
    return <>
    <div className="cardContainer">
        <div className="userImg"></div>
        <div className="userDetail">
            <div className="userName">{para.name}</div>
            <div className="userCompany">{para.company}</div>
        </div>
    </div>
    </>
}

export default A_Card;