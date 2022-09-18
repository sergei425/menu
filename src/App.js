import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home-page";
import DriftPage from "./components/drift-page";
import TimeAttackPage from "./components/time-attack-page";
import ForzaPage from "./components/forza-page";
import Layout from "./components/layout";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/drift" element={<DriftPage />} />
              <Route path="/timeattack" element={<TimeAttackPage />} />
              <Route path="/forza" element={<ForzaPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
