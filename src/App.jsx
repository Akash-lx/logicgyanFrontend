import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./Sections/HomeSection/HomeSection";
import About from "./Sections/About/About";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
