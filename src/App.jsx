
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./pages/Testimonial";
import  Footer  from "./pages/Footer";


import  HouseForm from "./pages/Add_Properties";
import  AddComment from "./pages/Add_Comment";
import StepsSection from "./pages/Simple_Steps";
import  Services from "./pages/Our_Service";

const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
    < HouseForm />
   
  
 
    < Services/>
    <StepsSection/>
    < AddComment/>
 <Testimonial/>
 <Footer />
    
   </div>
  );
}

export default App
