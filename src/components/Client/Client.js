import "./Client.css";
import ClientImage from "./ClientImage";
import ClientTitle from "./ClientTitle";
import BlackDropImg from "../../images/Frame 62.png"
import PlotagonImg from "../../images/Frame 63.png"
import EasyAcquireImg from "../../images/Frame 64.png"
import WineAuctionImg from "../../images/Frame 65.png"


const Client= ()=>{
    const Style={
        marginLeft:130
    }
    return(
        <div>
            <ClientTitle></ClientTitle>
            <div className="client">
                <ClientImage url={BlackDropImg}></ClientImage>
                <ClientImage url={PlotagonImg} ></ClientImage>
                <ClientImage url={EasyAcquireImg} Style={{marginLeft:-30}}></ClientImage>
                <ClientImage url={WineAuctionImg} Style={Style}></ClientImage>
            </div>
        </div>
    )
}

export default Client;