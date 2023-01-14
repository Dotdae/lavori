import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages.

import { Home, Access } from "./pages";

// Partial components.

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {

  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home />}/>
      <Route index path="/access" element={<Access />}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
