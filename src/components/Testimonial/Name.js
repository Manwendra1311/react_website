import "./Name.css";

const Name= (props)=>{
    return(
        <div className="name" style={props.Style}>{props.name}</div>
    )
}


export default Name