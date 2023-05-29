// import { useState } from 'react'
import Home from "./pages/Home";
import Header from "./components/navigation/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import { WhitePaper } from "./pages/WhitePaper.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard";
import CompanyRegPage from "./pages/CompanyRegPage";
import AboutUs from "./pages/AboutUs";
import Privacy from "./components/homepage_components/Privacy";
import Partners from "./pages/Partners";
import Plastic_deposit_screen from "./pages/plastic_deposit_screen";
import RecyclingCompanies from "./pages/RecyclingCompanies";
import Test from "./pages/Test";
import DashboardUserSettings from "./pages/user_dashboard/DashboardUserSettings";
import HistoryPage from "./pages/user_dashboard/HistoryPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CompanyRegPage />} />
        <Route path="/white-paper" element={<WhitePaper />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/plastic-deposit" element={<Plastic_deposit_screen />} />
        <Route path="/prc" element={<RecyclingCompanies />} />
        <Route path="/user-registration" element={<CompanyRegPage />} />
        <Route path="/company-registration" element={<RecyclingCompanies />} />
        <Route path="/test" element={<Test />} />
        <Route path="/user-dashboard/settings" element={<DashboardUserSettings/>} />
        <Route path="/user-dashboard/history" element={<HistoryPage/>} />
      </Routes>

    </>
  );
}

export default App;
