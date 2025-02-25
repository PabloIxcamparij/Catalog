import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/react";
import { ThemeSwitch } from "@/components/ThemesButton";
import { supabase } from "@/supabaseClient";
import { useState, useEffect } from "react";

export const Navbar = ({ onSelectTeam, scrollToFooter }: any) => {
    const [teams, setTeams] = useState<any[]>([]);

    useEffect(() => {
      const fetchTeams = async () => {
        const { data, error } = await supabase.from("teams").select("id, team");
        if (error) {
          console.error("Error fetching teams:", error);
        } else {
          setTeams(data);
        }
      };
      fetchTeams();
    }, []);
  
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
          onSelectionChange={(selectedKeys) => {
            const selectedTeam = teams.find(team => team.id.toString() === Array.from(selectedKeys)[0]);
            if (selectedTeam) {
              onSelectTeam(selectedTeam.team);
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