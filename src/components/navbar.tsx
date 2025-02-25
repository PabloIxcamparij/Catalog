import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/react";
import { ThemeSwitch } from "@/components/theme-switch";
import {teams} from "@/data/teams.json"


export const Navbar = ({ onSelectTeam, scrollToFooter }: any) => {
  return (
    <HeroUINavbar position="sticky">
      <NavbarContent className="w-full h-2/4 flex items-center justify-center mt-10 gap-4">
      
        <h1
          onClick={scrollToFooter}
          className="flex justify-center font-semibold text-lg w-1/4 cursor-pointer hover:text-gray-600"
        >
          Compra
        </h1>

        <Select
          className="w-3/4"
          label="Equipo"
          placeholder="Seleccione el equipo"
          color={"warning"}
          onSelectionChange={(label) => onSelectTeam(label.currentKey)}
        >
          {teams.map((team) => (
            <SelectItem key={team.key} textValue={team.key}>
              {team.key}
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
