import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { HomeContent } from "./components/HomeContent";
import { ContactContent } from "./components/ContactContent";
import { NoMatch } from "./components/NoMatch";
import "./App.css";

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<ContactContent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
