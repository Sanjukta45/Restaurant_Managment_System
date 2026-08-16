import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Cart from "./assets/pages/Cart";
import Menu from "./assets/pages/Menu";
import AboutPage from "./assets/pages/AboutPage";

function App() {
  
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
    </>
  )
}

export default App
