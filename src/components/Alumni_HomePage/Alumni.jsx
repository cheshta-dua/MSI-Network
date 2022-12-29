import "./Alumni.css";
import Card from "../AlumniCard/A_Card";
import { alumniData } from "../../data";
import { useState } from "react";
const Alumni = () => {
    const [visible, setvisible] = useState(10);
    const loadmore = () => {
        setvisible(visible + 10);
    }
    return <>
        <div className="AlumniContainer" id="Alumni">
            <h1 className="AlumniHead">Meet Your Alumni</h1>
            <div className="alumnidata">
                {alumniData.map((ele) => {
                    return (<Card
                        para={ele}
                    />)
                }).slice(0, visible)}
            </div>
            <div className="morebtn" onClick={loadmore}>View More</div>
        </div>
    </>
}

export default Alumni;