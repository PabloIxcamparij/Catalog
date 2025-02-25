import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import FormNewShirt from "@/pages/FormNewShirt";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<FormNewShirt />} path="/FormNewShirt" />
    </Routes>
  );
}

export default App;
