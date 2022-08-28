import React from "react";
import { Route, Routes } from "react-router-dom";

//Importing all items
import Navbar from "./components/navbar/Navabr";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/ContactUs";
import Admin from "./components/Admin/Admin";
import Home from "./pages/Home";
import Form from "./pages/upload_form";
import Testimonials from "./pages/testimonials";
import Aboutus from "./pages/aboutus";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
