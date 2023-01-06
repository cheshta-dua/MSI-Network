import A_Card from "../Card/A_Card";
import { achieversData } from "../../Resorce/achieversData";
import "./Achievers.css";
const achievers=()=>{
    return(
        <div className="achievers-container">
            <h1>Alumni Achievers</h1>
            <div className="achievers-card">
            {achieversData.map((e)=>{
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

export default achievers;