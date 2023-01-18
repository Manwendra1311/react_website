import "./CardImage.css";


const CardImage=(props)=>{
    return(
        <div className="card-img">
        <img src={props.img_url} alt="" ></img>
        </div>
    )
}

export default CardImage;