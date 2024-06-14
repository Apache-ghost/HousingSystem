import { Suspense } from "react";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Residence from "./pages/Residences/Residence";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Website/>}/>
            <Route path="/Residence" element = {<Residence/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen = {false}/>
    </QueryClientProvider>

  );
}

export default App