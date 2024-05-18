
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./pages/Testimonial";
import  Footer  from "./pages/Footer";




const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
 <Testimonial/>
 <Footer />
    
   </div>
  );
}

export default App
