import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/IndexPage";
import SoccerWorldPage from "@/pages/SoccerWorldPage";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SoccerWorldPage />} path="/World" />
    </Routes>
  );
}

export default App;
