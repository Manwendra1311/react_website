import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import TestimonialDescription from "./TestimonialDescription";
import TestimonialHeading from "./TestimonialHeading";
import TestimonialTitle from "./TestimonialTitle";
import JhonDoeImg from "../../images/t1.png.png";
import KnotDoe from "../../images/t4.png.png";
import JohnSmithImg from "../../images/t5.png.png";
import Slider from "./Slider";


const Testimonial= ()=>{
    return (
        <div className="testimonial">
                <TestimonialHeading></TestimonialHeading>
                <TestimonialTitle></TestimonialTitle>
                <TestimonialDescription></TestimonialDescription>
                <TestimonialCard url={JhonDoeImg} name="John Doe"></TestimonialCard>
                <TestimonialCard url={KnotDoe} name="Knot Doe" Style={{backgroundColor:"#FF6C00", color:"#FFFFFF"}}></TestimonialCard>
                <TestimonialCard url={JohnSmithImg} name="John Smith"></TestimonialCard>
                <Slider></Slider>
        </div>
    )
}

export default Testimonial