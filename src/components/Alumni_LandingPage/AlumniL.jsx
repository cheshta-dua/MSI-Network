import A_Card from "../AlumniCard/A_Card";
import "./AlumniL.css";
const AlumniL =( {data})=>{
    
    return(
    <div className="AlumniL-container">
        {Array.isArray(data)?
        data.map((ele) => {
                    return (<A_Card
                        key={ele.id}
                        para={ele}
                    />)
                }) : null}
    </div>)
}

export default AlumniL;