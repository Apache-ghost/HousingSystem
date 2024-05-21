
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./pages/Testimonial";
import  Footer  from "./pages/Footer";
import ViewProperty from "./pages/View_Property";
import   Listings from "./pages/Listings";
import  HouseForm from "./pages/Add_Properties";
import  AddComment from "./pages/Add_Comment";


const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
    < HouseForm />
    < Listings/>
  
    <ViewProperty/>
    < AddComment/>
 <Testimonial/>
 <Footer />
    
   </div>
  );
}

export default App
