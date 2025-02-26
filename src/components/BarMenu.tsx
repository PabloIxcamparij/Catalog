import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/react";
import { ThemeSwitch } from "@/components/ThemesButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useShirt } from "@/context/ShirtContext";
import { useEffect } from "react";

export const BarMenu = ({ scrollToFooter }: { scrollToFooter: () => void }) => {
  const { teams, teamsNational, setSelectedTeam, setSelectedTeamNational } =
    useShirt();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHome = () => navigate("/");
  const navigateSoccerWorldShirt = () => navigate("/World");

  // What route the page is
  const currentTeams = location.pathname === "/World" ? teamsNational : teams;
  const currentTeamsSelect =
    location.pathname === "/World" ? setSelectedTeamNational : setSelectedTeam;

  useEffect(() => {
    currentTeamsSelect("Todos");
  }, [location.pathname]);

  return (
    <HeroUINavbar position="sticky">
      <NavbarContent className="w-full h-2/4 flex items-center justify-center mt-10 gap-4">
        <Select
          className="w-2/6"
          label="Menu"
          placeholder="Seleccione"
          color={"warning"}
          data-fill={1}
        >
          <SelectItem key={1} textValue="Comprar" onPress={scrollToFooter}>
            Compra
          </SelectItem>
          <SelectItem key={2} textValue="Clubes" onPress={navigateHome}>
            Clubes
          </SelectItem>
          <SelectItem
            key={3}
            textValue="Mundiales"
            onPress={navigateSoccerWorldShirt}
          >
            Mundiales
          </SelectItem>
        </Select>

        <Select
          className="w-3/4"
          label="Equipo"
          placeholder="Seleccione el equipo"
          color="warning"
          onSelectionChange={(selectedKeys) => {
            const selectedTeamId = Array.from(selectedKeys)[0];

            const selectedTeam  : any = currentTeams.find(
              (team) => team.id.toString() === selectedTeamId
            );

            if (selectedTeam) {
              currentTeamsSelect(selectedTeam.team);
            }
          }}
        >
          {currentTeams.map((team) => (
            <SelectItem key={team.id} textValue={team.team}>
              {team.team}
            </SelectItem>
          ))}
        </Select>

        <div className="w-1/5 flex justify-center">
          <ThemeSwitch />
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};
