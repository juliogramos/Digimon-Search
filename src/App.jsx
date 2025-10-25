import { BrowserRouter, Routes, Route } from "react-router";
import SearchScreen from "./screens/SearchScreen";
import DigimonScreen from "./screens/DigimonScreen";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchScreen />} />
          <Route path="/:digimonId" element={<DigimonScreen />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
