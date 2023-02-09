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
    </div>
  );
}

export default App;
