
import Banner from "./Banner"
import BannerButton from "./BannerButton";
import BodyContent from "./BodyContent";
import BodyTitle from "./BodyTitle"


 const Body=()=>{
    return(

            <div>
                <Banner></Banner>
                <BodyTitle></BodyTitle>
                <BodyContent></BodyContent>
                <BannerButton></BannerButton>
            </div>

        
    )
 }

 export default Body;