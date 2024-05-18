
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";


const App = () => {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>

      <Navbar/>
    <Hero />
    <Testimonial/>
    
    </div>
  
    <Contact/>
   </div>
  );
}

export default App
