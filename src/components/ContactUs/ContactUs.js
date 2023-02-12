import "./ContactUs.css";
import ContactUsButton from "./ContactUsButton";
import ContactUsFields from "./ContactUsFields";
import ContactUsTitle from "./ContactUsTitle";

const ContactUs= ()=>{
    return(
        <div className="contact-us">
            <ContactUsTitle></ContactUsTitle>
            <div className="contact-us-div">
            <ContactUsFields LabelName="Name" PlaceHolder="Enter your name" Type="text"></ContactUsFields>
            <ContactUsFields LabelName="Choose Service" PlaceHolder="Choose your required services" Type="dropdown"></ContactUsFields>
            </div>
            <div className="contact-us-div">
            <ContactUsFields LabelName="Email" PlaceHolder="Enter your email" Type="email"></ContactUsFields>
            <ContactUsFields LabelName="Phone Number" PlaceHolder="Enter your mobile number" Type="number"></ContactUsFields>
            </div>
            <div className="contact-us-div">
            <ContactUsFields LabelName="Message" PlaceHolder="Write a message" Type="text" Style={{width:714, height:94}}></ContactUsFields>
            </div>
            <ContactUsButton></ContactUsButton>
        </div>
    )
}


export default ContactUs