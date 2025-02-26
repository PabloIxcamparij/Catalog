import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { shirtType, teamsType } from "@/types/index";
import { supabase } from "@/supabaseClient";

type ShirtContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedShirt?: shirtType;
  filteredShirts: shirtType[];
  filteredShirtsWorld: shirtType[];
  isLoading: boolean;
  handleOpenModal: (shirt: shirtType) => void;
  setSelectedTeam: (team: string) => void;
  setSelectedTeamNational: (team: string) => void;

  selectedTeam: string;
  selectedTeamNational: string;

  teams: teamsType[];
  teamsNational: teamsType[];
};

const ShirtContext = createContext<ShirtContextType | undefined>(undefined);

export const ShirtProvider = ({ children }: { children: ReactNode }) => {
  const [selectedShirt, setSelectedShirt] = useState<shirtType>();

  const [selectedTeam, setSelectedTeam] = useState("Todos");
  const [selectedTeamNational, setSelectedTeamNational] = useState("Todos");

  const [shirts, setShirts] = useState<shirtType[]>([]);
  const [shirtsWorld, setShirtsWorld] = useState<shirtType[]>([]);

  const [filteredShirts, setFilteredShirts] = useState<shirtType[]>([]);
  const [filteredShirtsWorld, setFilteredShirtsWorld] = useState<shirtType[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [teams, setTeams] = useState<teamsType[]>([]);
  const [teamsNational, setTeamsNational] = useState<teamsType[]>([]);

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

  // Fetch shirts World
  useEffect(() => {
    const fetchShirtsWorld = async () => {
      const { data, error } = await supabase.from("shirtWorld").select("*");
      if (error) console.error("Error fetching shirts:", error);
      else {
        setShirtsWorld(data);
        setFilteredShirtsWorld(data);
      }
      setIsLoading(false);
    };
    fetchShirtsWorld();
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

  // Fetch national teams
  useEffect(() => {
    const fetchTeamsNational = async () => {
      const { data, error } = await supabase
        .from("nationalTeams")
        .select("id, team, inserted_at, updated_at");

      if (error) {
        console.error("Error fetching teams:", error);
      } else {
        const sortedData = data.sort((a, b) => (a.id === 1 ? -1 : b.id === 1 ? 1 : 0));
        setTeamsNational(sortedData as teamsType[]);
      }
    };
    fetchTeamsNational();
  }, []);

  // Filter shirts when selected team changes
  useEffect(() => {
    setFilteredShirts(
      selectedTeam === "Todos"
        ? shirts
        : shirts.filter((shirt) => shirt.team === selectedTeam)
    );
  }, [selectedTeam, shirts]);

  // Filter shirts when selected team World changes
  useEffect(() => {
    setFilteredShirtsWorld(
      selectedTeamNational === "Todos"
        ? shirtsWorld
        : shirtsWorld.filter((shirt) => shirt.team === selectedTeamNational)
    );
  }, [selectedTeamNational, shirtsWorld]);

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

        filteredShirtsWorld,
        teamsNational,
        selectedTeamNational,
        setSelectedTeamNational,
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
