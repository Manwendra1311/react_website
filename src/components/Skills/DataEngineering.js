import "./DataEngineering.css";
import Image from "./Image";
import PythonImg from "../../images/python.png.png"
import SparkImg from "../../images/Apache_Spark_logo 1.png"
import HadoopImg from "../../images/apache_hadoop-ar21 1.png"
import BigdataImg from "../../images/image 4.png"
import NifiImg from "../../images/apache_nifi-ar21 1.png"
import wordmark from "../../images/wordmark_1 1.png"
import DockerImg from "../../images/docker-ar21 1.png"
import KafkaImg from "../../images/apache_kafka-ar21 1.png"
import PowerBiImg from "../../images/microsoft_powerbi-ar21 1.png"
import TableauImg from "../../images/tableau-logo 1.png"
import HiveImg from "../../images/hive-ar21 1.png"
import SnowFlakeImg from "../../images/snowflake-ar21 1.png"
import AzureImg from "../../images/Azure-SQL 1.png"
import MongoImg from "../../images/mongodb-ar21 1.png"

const DataEngineering= ()=>{
    return(
        <div className="web-dev-skills">
        <div className="web-dev-img">
            <Image ImgSrc={PythonImg}></Image>
            <Image ImgSrc={SparkImg}></Image>
            <Image ImgSrc={HadoopImg}></Image>
            <Image ImgSrc={BigdataImg}></Image>
            <Image ImgSrc={NifiImg}></Image>
        </div>
        <div className="web-dev-img">
            <Image ImgSrc={wordmark}></Image>
            <Image ImgSrc={DockerImg}></Image>
            <Image ImgSrc={KafkaImg}></Image>
            <Image ImgSrc={PowerBiImg}></Image>
            <Image ImgSrc={TableauImg}></Image>
        </div>
        <div>
            <Image ImgSrc={HiveImg}></Image>
            <Image ImgSrc={SnowFlakeImg}></Image>
            <Image ImgSrc={AzureImg}></Image>
            <Image ImgSrc={MongoImg}></Image>
        </div>
    </div>
    )
}

export default DataEngineering