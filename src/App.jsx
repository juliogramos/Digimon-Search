import { BrowserRouter, Routes, Route } from "react-router";
import SearchScreen from "./screens/SearchScreen";
import DigimonScreen from "./screens/DigimonScreen";
import { Container } from "@mui/material";
import { mainContainerSx } from "./utils/styles";
import "./index.css";

function App() {
  return (
    <Container sx={mainContainerSx}>
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
