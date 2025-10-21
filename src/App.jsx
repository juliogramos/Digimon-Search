import { BrowserRouter, Routes, Route } from "react-router";
import SearchScreen from "./screens/SearchScreen";
import DigimonScreen from "./screens/DigimonScreen";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/:digimonId" element={<DigimonScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
