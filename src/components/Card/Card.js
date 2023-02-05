import CardImage from "./CardImage"


import "./Card.css"
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import Underline from "./Underline";


const Card=(props)=>{
    return(
        <div className="card-element">
        <CardImage img_url={props.url}></CardImage>
        <CardTitle  title={props.title}></CardTitle>
        <Underline></Underline>
        <CardContent></CardContent>
        </div>
    )
}

export default Card;