import WorkHeading from "./WorkHeading";
import "./Working.css";
import WorkProcess from "./WorkProcess";
import WorkProcessDescription from "./WorkProcessDescription";
import DivImg from "../../images/div.png";
import DevImg from "../../images/development.png";
import TestImg from "../../images/user.png";
import OptimisationImg from "../../images/optimisation.png";
import ProductImg from "../../images/product_handover.png";
import WorkSubHeading from "./WorkSubHeading";


const Working= ()=>{
    return(
        <div className="working">
            <WorkHeading></WorkHeading>
            <WorkSubHeading></WorkSubHeading>
            <WorkProcessDescription></WorkProcessDescription>
            <WorkProcess title="Research Process" url={DivImg}></WorkProcess>
            <WorkProcess title="Development" url={DevImg}></WorkProcess>
            <WorkProcess title="User Testing" url={TestImg}></WorkProcess>
            <WorkProcess title="Optimisation" url={OptimisationImg}></WorkProcess>
            <WorkProcess title="Product Handover" url={ProductImg} Style={{width:60}}></WorkProcess>
        </div>
    )
}


export default Working