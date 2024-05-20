
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./pages/Testimonial";
import  Footer  from "./pages/Footer";
import ViewProperty from "./pages/View_Property";
import   Listings from "./pages/Listings";



const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
    < Listings/>
    <ViewProperty/>
 <Testimonial/>
 <Footer />
    
   </div>
  );
}

export default App
