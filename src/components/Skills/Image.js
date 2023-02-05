import "./Image.css";


const Image= (props)=>{
    return(<div className="skill-image-display">
        <img src={props.ImgSrc} alt="" className="skill-image"></img>
    </div>)
}

export default Image