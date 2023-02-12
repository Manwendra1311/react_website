import "./SocialMedia.css";
import SocialImg from "./SocialImg";
import FbImage from "../../images/li.png"
import TwitterImage from "../../images/twiiter.png"
import LinkedImage from "../../images/linked.png"
import InstaImage from "../../images/insta.png"

const SocialMedia= ()=>{
    return(
        <div className="social-media">
            <SocialImg url={FbImage}></SocialImg>
            <SocialImg url={TwitterImage}></SocialImg>
            <SocialImg url={LinkedImage}></SocialImg>
            <SocialImg url={InstaImage}></SocialImg>
        </div>
    )
}

export default SocialMedia