import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import "react-toastify/dist/ReactToastify.css";
import Login from "./Screens/Login/Login";
import Home from "./Screens/Home/Home";
import Products from "./Screens/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
