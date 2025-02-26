import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import IndexPage from "@/pages/IndexPage";
import SoccerWorldPage from "@/pages/SoccerWorldPage";
import { ShirtProvider } from "./context/ShirtContext";

function App() {
  return (
    <ShirtProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<IndexPage />} path="/" />
          <Route element={<SoccerWorldPage />} path="/World" />
        </Route>
      </Routes>
    </ShirtProvider>
  );
}

export default App;
