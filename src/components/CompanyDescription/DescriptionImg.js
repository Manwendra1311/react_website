import "./DescriptionImg.css";
import DImg from "../../images/company-img.jpg.svg";

const DescriptionImg= ()=>{
    return(
        <div className="description-image">
        <img src={DImg} alt="" ></img>
        </div>

    )
}

export default DescriptionImg;