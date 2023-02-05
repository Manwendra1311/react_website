import "./Frame.css";
import Years from "./Years";


const Frame= ()=>{
    return(
        <div className="frame">
            
            <Years years="5" content="Years Helping Business" symbol="+"  styles={-125}></Years>
            <Years years="30" content="Employee" symbol="+" ></Years>
            <Years years="150" content="Complete Projects" symbol="+" styles={-80}></Years>
            <Years years="100" content="Happy Customers" symbol="%" styles={-80}></Years>
        </div>
    )
}

export default Frame;