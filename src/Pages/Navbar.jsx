import { Link } from "react-router-dom";
import './Nav.css'

const  Navbar = () => {
    return (
      
       <div className="Heading">
           <ul>
               <li>
                   <Link className="navlink" to="/">Home</Link>
               </li>
               <li>
                   <Link className="navlink" to="/student">Student</Link>
               </li>
               <li>
                   <Link className="navlink" to="/contact">Contact US</Link>
               </li>
           </ul>
       </div>
      
    );
  
  
 
}
export default Navbar;










 