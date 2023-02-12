import "./App.css";
import Header from "./components/Header/Header"
import Body from "./components/Body/Body";
import SubHeading from "./components/SubHeading/SubHeading";
import CardElement from "./components/Card/CardElement";
import CompanyDescription from "./components/CompanyDescription/CompanyDescription";
import Frame from "./components/Frame/Frame";
import Skills from "./components/Skills/Skills";
import Client from "./components/Client/Client";
import Working from "./components/WorkingProcess/Working";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";


 const App=()=> {
  return (
    <div className="horizontal-bar">
      <Header></Header>
      <Body></Body>
      <SubHeading></SubHeading>
      <CardElement></CardElement>
      <Skills></Skills>
      <Client></Client>
      <CompanyDescription></CompanyDescription>
      <Frame></Frame>
      <Working></Working>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
