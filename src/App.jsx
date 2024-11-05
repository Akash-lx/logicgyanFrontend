import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./Sections/HomeSection/HomeSection";
import About from "./Sections/About/About";
import Blog from "./Sections/Blog/Blog";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import CotactUs from "./Sections/ContactUs/CotactUs";
import Feature from "./Sections/Features/Feature";
import TermsAndCondition from "./Sections/TermsPrivacy/TermsAndCondition";
import RefundAndPolicy from "./Sections/TermsPrivacy/RefundAndPolicy";
import PrivacyAndPolicy from "./Sections/TermsPrivacy/PrivacyAndPolicy";
import TermsLayout from "./layout/TermsLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactUs" element={<CotactUs />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
            <Route path="/RefundAndPolicy" element={<RefundAndPolicy />} />
            <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
