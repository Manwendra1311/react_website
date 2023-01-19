import "./CompanyDescription.css";
import CompanyDescriptionTitle from "./CompanyDescriptionTitle";
import Description from "./Description";
import DescriptionImg from "./DescriptionImg";
import KnowMore from "./KnowMore";
import OurCompany from "./OurCompany";

const CompanyDescription= ()=>{
    const SampleText1 = "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.";
    const SampleText2 ="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages."
    return(
        <div className="company-description">
            <div className="description-card">
                <OurCompany></OurCompany>
                <CompanyDescriptionTitle></CompanyDescriptionTitle>
                <Description text={SampleText1}></Description>
                <Description text={SampleText2}></Description>
                <KnowMore></KnowMore>
            </div>
            <div className="description-card">
                <DescriptionImg/>
            </div>
        </div>
    )
}

export default CompanyDescription;