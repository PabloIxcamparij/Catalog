import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/react";
import { ThemeSwitch } from "@/components/ThemesButton";
import { Link } from "react-router-dom";

import { useShirt } from "@/context/ShirtContext";

export const BarMenu = ({ scrollToFooter }: { scrollToFooter: () => void }) => {
  const { teams, setSelectedTeam } = useShirt();

  return (
    <HeroUINavbar position="sticky">
      <NavbarContent className="w-full h-2/4 flex items-center justify-center mt-10 gap-4">
        <Select
          className="w-2/6"
          label="Menu"
          placeholder="Seleccione"
          color={"warning"}
        >
          <SelectItem key={1} textValue="Comprar" onClick={scrollToFooter}>
            Compra
          </SelectItem>
          <SelectItem key={2} textValue="Clubes">
            <Link to={"/"}> Clubes</Link>
          </SelectItem>
          <SelectItem key={3} textValue="Mundiales">
            <Link to={"/World"}> Mundiales</Link>
          </SelectItem>
        </Select>

        <Select
          className="w-3/4"
          label="Equipo"
          placeholder="Seleccione el equipo"
          color="warning"
          onSelectionChange={(selectedKeys) => {
            const selectedTeamId = Array.from(selectedKeys)[0];
            const selectedTeam = teams.find(
              (team) => team.id.toString() === selectedTeamId
            );

            if (selectedTeam) {
              setSelectedTeam(selectedTeam.team);
            }
          }}
        >
          {teams.map((team) => (
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
