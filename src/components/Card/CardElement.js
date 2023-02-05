import Card from "./Card"
import CImg from "../../images/Black.png";
import DevImg from "../../images/AppDev.png";
import TestingImg from "../../images/Frame 74.png";
import ConstImg from "../../images/Online Construction Data.png";
import "./CardElement.css"

const CardElement= ()=>{
    return(
        <div>
            <div className="c-element">
                <Card url={CImg} title="Web Development" ></Card>
                <Card url={DevImg} title="App Devlopment" ></Card>
                <Card url={TestingImg} title="Data Analytics" ></Card>           
                <Card url={ConstImg} title="Data Engineering" ></Card>
                
            </div>
        </div>
    )
}

export default CardElement;