import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";

// Pages.

import { Home, Access, About } from "./pages";

// Partial components.

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {

  return (
  <>
    <GlobalStyle/>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route index path="/access" element={<Access />}/>
        <Route index path="/about" element={<About />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App
