import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { HomeContent } from "./Pages/Home/HomeContent";
import { ContactContent } from "./Pages/Contact/ContactContent";
import { NoMatch } from "./Pages/NoMatch/NoMatch";
import { Footer } from "./components/Footer";


const App = () => {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<ContactContent />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};


export default App;
