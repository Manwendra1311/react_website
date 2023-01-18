import BannerImage from "../../images/banner-img.png.svg";
import "./Banner.css";

const Banner= ()=>{
    return(
        <div >
        <img src={BannerImage} alt="" className="banner-image" ></img>
        </div>
    )
}

export default Banner