import "./Header.css"
import Button from "./Button"
import DarkBuild from "./DarkBuild"
import NavButtons from "./NavButtons"

const Header= ()=>{
     return <div className="dark_build">
        <DarkBuild/>
        <NavButtons/>
        <Button/>
     </div>
}
export default Header