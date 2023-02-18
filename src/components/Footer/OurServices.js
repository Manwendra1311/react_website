import "./OurServices.css"

const OurServices= (props)=>{
    
    return(
        
        <div className="our">
            <img alt="" src={props.url} className="our-services"></img>
            {props.services.map((service)=>{
                return(
                    <div className="service">{service}</div>
                )
            })}
        </div>
    )
}

export default OurServices