import { useState } from "react";
import SkillsHeading from "./SkillsHeading";
import "./Skills.css";
import SkillType from "./SkillType";
import WebDevSkills from "./WebDevSkills";
import AppDevSkills from "./AppDevSkills";
import DataEngineering from "./DataEngineering";
import Cloud from "./Cloud";


const Skills= ()=>{
    const [showWebDevSkills,setshowWebDevSkills]=useState(true)
    const [showAppDevSkills,setShowAppDevSkills]= useState(false)
    const [showDataEngineeringSkills,setShowsDataEngineeringSkills]= useState(false)
    const [showCloudSkills, setShowCloudSkills]= useState(false);

    

    const webDevSkillHandler= ()=>{
        setshowWebDevSkills(true)
        setShowAppDevSkills(false)
        setShowsDataEngineeringSkills(false) 
        setShowCloudSkills(false)
    }

    const appDevSkillHandler = ()=>{
        setShowAppDevSkills(true)
        setshowWebDevSkills(false)
        setShowsDataEngineeringSkills(false)
        setShowCloudSkills(false)
    }

    const dataEngineeringSkillHandler= ()=>{
        setShowAppDevSkills(false)
        setshowWebDevSkills(false)
        setShowsDataEngineeringSkills(true)
        setShowCloudSkills(false)
    }

    const cloudSkillHandler= ()=>{
        setShowAppDevSkills(false)
        setshowWebDevSkills(false)
        setShowsDataEngineeringSkills(false)
        setShowCloudSkills(true)
    }
    
    const Style={
        border: ` 1px solid #FF6C00`,
        borderRadius: 14,
        color: `#FF6C00`,
        width:   showDataEngineeringSkills?259:209,
        paddingBottom: 45,
        marginRight: 0
    } 
    return(
        <div>
            <SkillsHeading></SkillsHeading>
            <SkillType skillType="Web Development" webDevHandler={webDevSkillHandler} state={showWebDevSkills?{Style}:{}}></SkillType>
            <SkillType skillType="App Development" appDevHandler={appDevSkillHandler} state={showAppDevSkills?{Style}:{}}></SkillType>
            <SkillType skillType="Data Engineering & Analytics" dataEngineeringHandler={dataEngineeringSkillHandler} state={showDataEngineeringSkills?{Style}:{}} ></SkillType>
            <SkillType skillType="Cloud" cloudHandler={cloudSkillHandler} state={showCloudSkills?{Style}:{}} ></SkillType>
            {showWebDevSkills && <WebDevSkills></WebDevSkills>}
            {showAppDevSkills && <AppDevSkills></AppDevSkills>}
            {showDataEngineeringSkills && <DataEngineering></DataEngineering>}
            {showCloudSkills && <Cloud></Cloud>}
        </div>
    )
}

export default Skills;