
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Value from "./pages/value/value"

import Testimonial from "./pages/Testimonial";


const App = () => {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>

      <Navbar/>
    <Hero />
    <Testimonial/>
    <Value/>
    
    </div>
  
    <Contact/>
   </div>
  );
}

export default App
