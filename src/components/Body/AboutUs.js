import "./AboutUs.css";

const AboutUs= (props)=>{

    
    return (
    <div className="banner-btn">
        <button className={props.buttonClass}>{props.displayText}</button>
    </div>
    )
}

export default AboutUs