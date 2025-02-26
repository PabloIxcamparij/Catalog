import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { shirtType, teamsType } from "@/types/index";
import { supabase } from "@/supabaseClient";

type ShirtContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedShirt?: shirtType;
  filteredShirts: shirtType[];
  isLoading: boolean;
  handleOpenModal: (shirt: shirtType) => void;
  setSelectedTeam: (team: string) => void;
  selectedTeam: string;
  teams: teamsType[];
};

const ShirtContext = createContext<ShirtContextType | undefined>(undefined);

export const ShirtProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTeam, setSelectedTeam] = useState("Todos");
  const [shirts, setShirts] = useState<shirtType[]>([]);
  const [selectedShirt, setSelectedShirt] = useState<shirtType>();
  const [filteredShirts, setFilteredShirts] = useState<shirtType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [teams, setTeams] = useState<teamsType[]>([]);

  // Fetch shirts
  useEffect(() => {
    const fetchShirts = async () => {
      const { data, error } = await supabase.from("shirt").select("*");
      if (error) console.error("Error fetching shirts:", error);
      else {
        setShirts(data);
        setFilteredShirts(data);
      }
      setIsLoading(false);
    };
    fetchShirts();
  }, []);

  // Fetch teams
  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase
        .from("teams")
        .select("id, team, inserted_at, updated_at");
  
      if (error) {
        console.error("Error fetching teams:", error);
      } else {
        setTeams(data as teamsType[]); // 🔹 Forzar el tipo a teamsType[]
      }
    };
    fetchTeams();
  }, []);
  
  // Filter shirts when selected team changes
  useEffect(() => {
    setFilteredShirts(
      selectedTeam === "Todos"
        ? shirts
        : shirts.filter((shirt) => shirt.team === selectedTeam)
    );
  }, [selectedTeam, shirts]);

  const handleOpenModal = (shirt: shirtType) => {
    setSelectedShirt(shirt);
    setIsOpen(true);
  };

  return (
    <ShirtContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedShirt,
        filteredShirts,
        isLoading,
        handleOpenModal,
        setSelectedTeam,
        selectedTeam,
        teams,
      }}
    >
      {children}
    </ShirtContext.Provider>
  );
};

export const useShirt = () => {
  const context = useContext(ShirtContext);
  if (!context) {
    throw new Error("useShirt must be used within a ShirtProvider");
  }
  return context;
};
