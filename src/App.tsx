import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import BodySection from "./screns/BodySection";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <BrowserRouter>
        <BodySection />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
