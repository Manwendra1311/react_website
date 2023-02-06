import "./ClientImage.css";


const ClientImage= (props)=>{
    const Style=props.Style
    console.log(Style)
    return(
        <div className="client-image">
            <img alt="" src={props.url} style={Style}></img>
        </div>
    )
}

export default ClientImage