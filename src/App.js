import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import MySlider from "./pages/MySlider";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import About from "./pages/About";
import TestModal from "./pages/TestModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="calc" element={<Calculator />} />
            <Route path="slider" element={<MySlider />} />
            <Route path="cart" element={<Cart />} />
            <Route path="test" element={<TestModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
