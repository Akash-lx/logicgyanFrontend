import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./Sections/HomeSection/HomeSection";
import About from "./Sections/About/About";
import Blog from "./Sections/Blog/Blog";
import CotactUs from "./Sections/ContactUs/CotactUs";
import Feature from "./Sections/Features/Feature";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<CotactUs />} />
          <Route path="/feature" element={<Feature />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
