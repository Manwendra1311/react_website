import styles from "./SkillType.module.css";


const SkillType = (props)=>{
    const size= props.skillType==="Data Engineering & Analytics";
    const margin= props.skillType==="Cloud";
    
    const clickHandler=()=>{

        props.skillType==="Web Development" && props.webDevHandler()
        props.skillType==="App Development" && props.appDevHandler()
        size && props.dataEngineeringHandler()
        margin && props.cloudHandler()
  
    }
    const state=props.state
    console.log(state)

    return(
        <div className={styles.type} style={{marginLeft:margin?50:0}}>
            <p className={styles.skills} onClick={clickHandler}  style={state.Style}>{props.skillType}</p>
        </div>
    )
}

export default SkillType