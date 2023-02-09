import "./WorkProcess.css"
import WorkProcessTitle from "./WorkProcessTitle"
import WorkProcessImage from "./WorkProcessImage";

import WorkProcessText from "./WorkProcessText";

const WorkProcess= (props)=>{
    return(
        <div className="work-process">
            <WorkProcessImage url={props.url} Style={props.Style}></WorkProcessImage>
            <WorkProcessTitle title={props.title} ></WorkProcessTitle>
            <WorkProcessText></WorkProcessText>
        </div>
    )
}

export default WorkProcess