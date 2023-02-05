import "./Cloud.css";
import Image from "./Image";
import AmazonImg from "../../images/amazon_aws-ar21 1.png"
import GloudImg from "../../images/google_cloud-ar21 1.png"
import MicrosoftImg from "../../images/microsoft_azure-ar21 1.png"

const Cloud= ()=>{
    return(
        <div className="cloud-skills">
            <div className="cloud-img">
                <Image ImgSrc={AmazonImg}></Image>
                <Image ImgSrc={GloudImg}></Image>
                <Image ImgSrc={MicrosoftImg}></Image>
            </div>
        </div>
    )
}

export default Cloud