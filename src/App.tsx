import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import BodySection from "./screns/BodySection";
import DevFooter from "./components/footer/DevFooter";

function App() {
  return (
    <div className="bg-slate-200 overflow-hidden">
      <Navbar />
      <BrowserRouter>
        <BodySection />
      </BrowserRouter>
      <Footer />
      <DevFooter />
    </div>
  );
}

export default App;
