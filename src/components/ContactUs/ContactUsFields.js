import "./ContactUsField.css";

const ContactUsFields= (props)=>{
    return(
        <div className="contact-us-fields">
            <label className="contact-us-label">{props.LabelName}</label>
            <input placeholder={props.PlaceHolder} className="contact-us-input" type={props.Type} style={props.Style}></input>
        </div>
    )
}


export default ContactUsFields