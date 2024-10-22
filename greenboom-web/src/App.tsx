import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css"; // Import Ant Design styles

import "./App.css";
// import "react-toastify/dist/ReactToastify.css";
import Login from "./Screens/Login/Login";
import { LoadingProvider } from "./Components/providers/LoadingProvider";
import SecondHome from "./Screens/SecondHome/Home";
import Products from "./Screens/Products/Products";

import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";
import Instructions from "./Screens/Instructions/Instructions";
import About from "./Screens/About/About";
import Teams from "./Screens/Teams/Teams";
import Science from "./Screens/Science/Science";
import Contact from "./Screens/Contact/Contact";
import Home from "./Screens/Home/Home";
function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <Routes>
          <Route path="/header" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SecondHome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/science" element={<Science />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
