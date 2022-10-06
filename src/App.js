import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Student from "./Pages/Student";

 
 import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





