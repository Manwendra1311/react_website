import "./Footer.css";
import FooterDescription from "./FooterDescription";
import FooterImage from "./FooterImage";
import OurServices from "./OurServices";
import SocialMedia from "./SocialMedia";
import OurImg from "../../images/ourservices.png"
import LinkImg from "../../images/links.png"
import ContactInfo from "./ContactInfo";

const Footer= ()=>{
    const services=["Web Development", "App Development", "Data Analytics", "Data Engineering"]
    const Links=["Home", "Services", "About", "Join Us", "Contact"]
    return(
        <div className="footer">
            <FooterImage></FooterImage>
            <FooterDescription> </FooterDescription>
            <SocialMedia></SocialMedia>
            <div className="footer-components">
            <OurServices url={OurImg} services={services}></OurServices>
            <OurServices url={LinkImg} services={Links}></OurServices>
            <ContactInfo></ContactInfo>
            </div>
        </div>
    )
}

export default Footer