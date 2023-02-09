import "./WorkProcessImage.css"
// import NextImg from "../../images/next2.png.png"

const WorkProcessImage= (props)=>{
   return( <div>
        <img alt="" src={props.url} className="work-process-image" style={props.Style}></img>
        {/* <span>...........</span>
        <img alt="" src={NextImg}></img>
        <span>...........</span> */}
    </div>)
}

export default WorkProcessImage