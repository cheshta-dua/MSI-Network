import A_Card from "../Card/A_Card";
import { alumniData } from "../../data";
import "./faculty.css";
const Faculty=()=>{
    return(
        <div className="faculty-container">
            <h1>Faculty</h1>
            <div className="faculty-card">
            {alumniData.map((e)=>{
                return(
                    <A_Card 
                    key={e.id}
                    para={e}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default Faculty;