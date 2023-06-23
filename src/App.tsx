import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomeContent } from "./components/HomeContent";
import { ContactContent } from "./components/ContactContent";
import "./App.css";

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="contact" element={<ContactContent />} />
      </Routes>
    </div>
  );
};

export default App;
