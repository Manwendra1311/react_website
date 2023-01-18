import SubHeadingContent from "./SubHeadingContent";
import SubHeadingTitle from "./SubHeadingTitle";
import Title from "./Title";
import "./SubHeading.css";

const SubHeading= ()=>{
    return(
        <div className="sub-heading">
        <Title></Title>
        <SubHeadingTitle></SubHeadingTitle>
        <SubHeadingContent></SubHeadingContent>
        </div>
    )
}

export default SubHeading;