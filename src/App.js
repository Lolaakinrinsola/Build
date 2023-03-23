import  Navbar  from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage  from "./Components/Homepage";
import BusinessHome from "./Pages/BusinessHome";
import AboutUs from "./Pages/AboutUs";
import FAQs from "./Pages/FAQs";
import Contact from "./Pages/Contact";
import Stories from "./Pages/Stories";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}  />
          <Route path='/business' element={<BusinessHome/>}  />
          <Route path='/About' element={<AboutUs/>}  />
          <Route path='/FAQs' element={<FAQs/>}  />
          <Route path='/contact' element={<Contact/>}  />
          <Route path='/stories' element={<Stories/>}  />
          <Route path='/blog' element={<Blog/>}  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
