import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function BodySection() {
    
  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
}

export default BodySection;
