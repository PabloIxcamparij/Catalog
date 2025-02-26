import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import IndexPage from "@/pages/IndexPage";
import SoccerWorldPage from "@/pages/SoccerWorldPage";


import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";

import { shirtType } from "@/types/index";
function App() {

  const [selectedTeam, setSelectedTeam] = useState("Todos");

  const [shirts, setShirts] = useState<shirtType[]>([]);
  const [selectedShirt, setSelectedShirt] = useState<shirtType> ();
  const [filteredShirts, setFilteredShirts] = useState<shirtType[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchShirts = async () => {
      const { data, error } = await supabase.from("shirt").select("*");
      if (error) {
        console.error("Error fetching shirts:", error);
      } else {
        setShirts(data);
        setFilteredShirts(data);
      }
      setIsLoading(false);
    };

    fetchShirts();
  }, []);

  useEffect(() => {
    if (selectedTeam === "Todos") {
      setFilteredShirts(shirts);
    } else {
      setFilteredShirts(shirts.filter((shirt) => shirt.team === selectedTeam));
    }
  }, [selectedTeam, shirts]);


  return (
    <Routes>
      <Route element={<DefaultLayout onSelectTeam={setSelectedTeam} />}>
        <Route element={<IndexPage />} path="/" />
        <Route element={<SoccerWorldPage />} path="/World" />
      </Route>
    </Routes>
  );
}

export default App;
