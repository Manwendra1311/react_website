import CardImage from "./CardImage"


import "./Card.css"
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardBottom from "./CardBottom";

const Card=(props)=>{
    return(
        <div className="card-element">
        <CardImage img_url={props.url}></CardImage>
        <CardTitle  title={props.title}></CardTitle>
        <CardContent></CardContent>
        <CardBottom></CardBottom>
        </div>
    )
}

export default Card;