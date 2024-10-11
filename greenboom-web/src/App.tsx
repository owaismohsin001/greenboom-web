import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import "react-toastify/dist/ReactToastify.css";
import Login from "./Screens/Login/Login";
import Home from "./Screens/Home/Home";
import Products from "./Screens/Products/Products";

import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  return (
    <BrowserRouter>
     <ToastContainer 
        position="top-right" // Position of the toast notifications
        autoClose={5000} // Time before the toast closes automatically
        hideProgressBar={false} // Show or hide the progress bar
        closeOnClick // Close the toast when clicked
        pauseOnHover // Pause the auto-close timer on hover
        draggable // Enable dragging
        theme="colored" // Theme of the toast (default, colored, light, dark)
      />
      <Routes>
        <Route path="/header" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
