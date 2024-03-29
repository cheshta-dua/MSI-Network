import A_Card from "./Achiever_Card";
import { AchieverData } from "../../Resorce/AchieverData";
import "./achievers.css";
const Achievers=()=>{
    return(
        <div className="achievers-container">
            <h1>Alumni Achievers</h1>
            <div className="achievers-card">
            {AchieverData.map((e)=>{
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

export default Achievers;