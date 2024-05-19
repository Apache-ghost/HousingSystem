
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./pages/Testimonial";
import  Footer  from "./pages/Footer";
import ViewProperty from "./pages/View_Property";




const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
    <ViewProperty/>
 <Testimonial/>
 <Footer />
    
   </div>
  );
}

export default App
