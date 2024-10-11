import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Screens/Login/Login";
import Home from "./Screens/Home/Home";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
