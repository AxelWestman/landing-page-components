import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

    return(

        <>
        <div className="navbar" >
            <div className="container">
                <RxHamburgerMenu className="burga" />
            </div>    
        </div>
        </>

    )

}

export default Navbar;