import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
const Contact = () => {
   return(
      <>
      <h1>   
          Contact Page <br/>

<NavLink style={{color:"Blue"}} to="https://www.facebook.com/profile.php?id=100049951252722">Facebook</NavLink><br/>
<NavLink style={{color:"Green"}}  to="https://web.whatsapp.com/" >WhatsApp</NavLink><br/>
<NavLink style={{color:"purple"}} to="https://www.linkedin.com/signup">Linkedin</NavLink><br/>
<NavLink style={{color:"Black"}}  to="https://github.com/vinayakpatilkailas">Github</NavLink>
</h1>
</>
   );
}
export default Contact;

