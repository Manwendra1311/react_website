import Name from "./Name";
import Statement from "./Statement";
import "./TestimonialCard.css";
import TestimonialImage from "./TestimonialImage";


const TestimonialCard= (props)=>{
    
    return(
        <div className="testimonial-card" style={props.Style}>
            <TestimonialImage url={props.url}></TestimonialImage>
            <Name name={props.name} Style={props.Style}></Name>
            <Statement></Statement>
        </div>
    )
}

export default TestimonialCard