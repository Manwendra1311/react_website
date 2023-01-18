import Card from "./Card"
import CImg from "../../images/s1.png.svg";
import DevImg from "../../images/s1.png.svg";
import TestingImg from "../../images/s1.png.svg";
import "./CardElement.css"

const CardElement= ()=>{
    return(
        <div>
            <div className="c-element">
                <Card url={CImg} title="Visual Design" ></Card>
                <Card url={DevImg} title="Devlopment" ></Card>
                <Card url={TestingImg} title="QA Testing" ></Card>
            </div>
            <div className="c-element">
                <Card url={CImg} title="IT Management" ></Card>
                <Card url={DevImg} title="Cyber Security" ></Card>
                <Card url={TestingImg} title="Wireless Connectivity" ></Card>
            </div>
        </div>
    )
}

export default CardElement;