import "./Footer.css";
import FooterDescription from "./FooterDescription";
import FooterImage from "./FooterImage";
import SocialMedia from "./SocialMedia";



const Footer= ()=>{
    return(
        <div className="footer">
            <FooterImage></FooterImage>
            <FooterDescription> </FooterDescription>
            <SocialMedia></SocialMedia>
        </div>
    )
}

export default Footer