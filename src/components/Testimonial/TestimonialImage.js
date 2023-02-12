import "./TestimonialImage.css";


const TestimonialImage= (props)=>{
    return(
        <div>
            <img alt="" src={props.url} className="testimonial-img"></img>
        </div>
    )
}

export default TestimonialImage