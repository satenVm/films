import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// veredardznuma massiv arajin arjeq et state kardalu hamar,erkrord argumentov talisa func vori mijocov et state poxuma
