
import AboutUs from "./AboutUs";
import Banner from "./Banner"

import BodyContent from "./BodyContent";
import BodyTitle from "./BodyTitle"


 const Body=()=>{
    return(

            <div>
                <Banner></Banner>
                <BodyTitle></BodyTitle>
                <BodyContent></BodyContent>
                <AboutUs displayText="About Us ->" buttonClass="about-us"></AboutUs>
                <AboutUs displayText="Contact Us ->" buttonClass="banner-button"></AboutUs>
                

            </div>

        
    )
 }

 export default Body;