import "./ContactInfo.css";
import ContactImg from "../../images/contact_info.png"
import PhoneImg from "../../images/phone.png"
import EmailImg from "../../images/email.png"
import AddressImg from "../../images/address.png"
import ContactInfoImage from "./ContactInfoImage";

const ContactInfo= ()=>{
    var c=-1;
    const contactInfoImages= [PhoneImg, EmailImg, AddressImg]
    const labels= ["phone", "Email", "Address"];
    const text = ["+91 9116448192", "business@darkbuild.in", "Address"]
    return(
        <div className="contact-info">
            <img alt="" src={ContactImg}></img>
            {contactInfoImages.map((image)=>{
                c=c+1;
                return(<div>
                        <ContactInfoImage url={image}></ContactInfoImage>
                        <div className="contact-info-label">{labels[c]}</div>
                        <div className="contact-info-text">{text[c]}</div>
                     </div>
                     )
                    
                })}
            
        </div>
    )
}

export default ContactInfo