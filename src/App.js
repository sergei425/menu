import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import HomePage from "./components/home-page";
import DriftPage from "./components/drift-page";
import TimeAttackPage from "./components/time-attack-page";
import ForzaPage from "./components/forza-page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
