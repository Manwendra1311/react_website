import "./SocialMedia.css";
import SocialImg from "./SocialImg";
import FbImage from "../../images/li.png"
import TwitterImage from "../../images/twiiter.png"
import LinkedImage from "../../images/linked.png"
import InstaImage from "../../images/insta.png"

const SocialMedia= ()=>{

    const Foot_img= [FbImage, TwitterImage,LinkedImage,InstaImage ]
    return(
        <div className="social-media">
            {Foot_img.map((img_src)=>{
                return (<SocialImg url={img_src}></SocialImg>)
            })}
        </div>
    )
}

export default SocialMedia