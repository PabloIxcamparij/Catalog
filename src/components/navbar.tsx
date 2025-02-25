import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/react";
import { ThemeSwitch } from "@/components/theme-switch";

export const teams = [
  { key: "Todos", label: "Todos" },
  { key: "Barcelona", label: "Barcelona" },
  { key: "Real Madrid", label: "Real Madrid" },
  { key: "Arsenal", label: "Arsenal" },
  { key: "Milan", label: "Milan" },

];

export const Navbar = ({ onSelectTeam } : any) => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="end">
        <Select
          className="w-3/4 mt-10"
          label="Equipo"
          placeholder="Seleccione el equipo"
          color={"warning"}
          onSelectionChange={(label) => onSelectTeam(label.currentKey)}
        >
          {teams.map((team) => (
            <SelectItem key={team.key} textValue={team.label}>
              {team.label}
            </SelectItem>
          ))}
        </Select>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
