
import { useState, useEffect } from "react";
import { shirtType, teamsType } from "@/types/index";
import { supabase } from "@/supabaseClient";


export const useShirt = () => {

  const [selectedTeam, setSelectedTeam] = useState("Todos");

  const [shirts, setShirts] = useState<shirtType[]>([]);
  const [selectedShirt, setSelectedShirt] = useState<shirtType>();
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

  const handleOpenModal = (shirt: shirtType) => {
    setSelectedShirt(shirt);
    setIsOpen(true);
  };

  // In NavBar
  const [teams, setTeams] = useState<teamsType[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase
        .from("teams")
        .select("id, team, inserted_at, updated_at");
      if (error) {
        console.error("Error fetching teams:", error);
      } else {
        setTeams(data);
      }
    };
    fetchTeams();
  }, []);

  return {
    isOpen,
    setIsOpen,
    selectedShirt,
    filteredShirts,
    isLoading,
    handleOpenModal,
    setSelectedTeam,
    selectedTeam,
    teams
  };
};
