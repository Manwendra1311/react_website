import "./App.css";
import Header from "./components/Header/Header"
import Body from "./components/Body/Body";
import SubHeading from "./components/SubHeading/SubHeading";
import CardElement from "./components/Card/CardElement";
import CompanyDescription from "./components/CompanyDescription/CompanyDescription";

 const App=()=> {
  return (
    <div className="horizontal-bar">
      <Header></Header>
      <Body></Body>
      <SubHeading></SubHeading>
      <CardElement></CardElement>
      <CompanyDescription></CompanyDescription>
    </div>
  );
}

export default App;
