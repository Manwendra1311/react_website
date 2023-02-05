import "./AppDevSkills.css";
import Image from "./Image";
import FlutterImg from "../../images/flutterio-ar21 1.png"
import ReactNativeImg from "../../images/react-native-1 1.png"
import AppengineImg from "../../images/google-appengine-seeklogo.com 1.png"
import FireBaseImg from "../../images/firebase-ar21 1.png"

const AppDevSkills= ()=>{
    return(
        <div className="app-dev-skills">
            <div className="app-dev-img">
                <Image ImgSrc={FlutterImg}></Image>
                <Image ImgSrc={ReactNativeImg}></Image>
                <Image ImgSrc={AppengineImg}></Image>
                <Image ImgSrc={FireBaseImg}></Image>
            </div>
        </div>
    )
}

export default AppDevSkills