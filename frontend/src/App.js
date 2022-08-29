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
import KnowMore from "./pages/KnowMore";
import Signin from "./components/SignIn/Signin";
import Profile from "./pages/profile";
import Imggg from "./pages/img";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knowmore" element={<KnowMore />} />
        <Route path="/form" element={<Form />} />
        <Route path="/img" element={<Imggg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
