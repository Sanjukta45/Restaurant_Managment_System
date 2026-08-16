import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Cart from "./assets/pages/Cart";

function App() {
  
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
    </>
  )
}

export default App
