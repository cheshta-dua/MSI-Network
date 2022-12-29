import A_Card from "../AlumniCard/A_Card";
import "./AlumniL.css";
const AlumniL =( {data})=>{
    return(
    <div className="AlumniL-container">
        {data.map((ele) => {
                    return (<A_Card
                        key={ele.id}
                        para={ele}
                    />)
                })}
    </div>)
}

export default AlumniL;