import "./Years.css";

const Years= (props)=>{
    const styles=props.styles;
    console.log(styles)
    return (
        <div className="years">
            <div className="number-content">
                <div className="year-number">{props.years}</div>
                <div className="years-symbol" style={{marginLeft: styles}}>{props.symbol}</div>
            </div>
            <div className="years-text">{props.content}</div>
        </div>
    )
}

export default Years