import Image from "./Image";
import "./WebDevSkills.css";
import MySql from "../../images/01-mysql-official 1.png"
import ReactImg from "../../images/3.svg.png"
import AngularImg from "../../images/4.svg.png"
import PhpImg from "../../images/PHP-Logo.wine 1.png"
import NodeImg from "../../images/6.svg.png"
import PythonImg from "../../images/python.png.png"
import MongoImg from "../../images/mongodb-ar21 1.png"
import TerraImg from "../../images/terraformio-ar21 1.png"
import CssImg from "../../images/7.svg.png"
import HtmlImg from "../../images/8.svg.png"
import DockerImg from "../../images/docker-ar21 1.png"

const WebDevSkills= ()=>{
    return(
        <div className="web-dev-skills">
            <div className="web-dev-img">
                <Image ImgSrc={MySql}></Image>
                <Image ImgSrc={ReactImg}></Image>
                <Image ImgSrc={AngularImg}></Image>
                <Image ImgSrc={PhpImg}></Image>
                <Image ImgSrc={NodeImg}></Image>
            </div>
            <div className="web-dev-img">
                <Image ImgSrc={PythonImg}></Image>
                <Image ImgSrc={MongoImg}></Image>
                <Image ImgSrc={TerraImg}></Image>
                <Image ImgSrc={CssImg}></Image>
                <Image ImgSrc={HtmlImg}></Image>
            </div>
            <div>
                <Image ImgSrc={DockerImg}></Image>
              
            </div>
        </div>
    )
}

export default WebDevSkills