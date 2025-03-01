import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";

import { ThemeSwitch } from "@/components/ThemesButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useShirt } from "@/context/ShirtContext";
import { useEffect } from "react";

import { useTheme } from "@/hook/useTheme";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const ChevronDown = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const BarMenu = ({ scrollToFooter }: { scrollToFooter: () => void }) => {
  const theme = useTheme();

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
  const currentThemes = theme === "light" ? "black" : "white";

  useEffect(() => {
    currentTeamsSelect("Todos");
  }, [location.pathname]);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Navbar>
      <NavbarBrand className="hidden min-[400px]:flex">
        <AcmeLogo />
      </NavbarBrand>

      <NavbarContent className=" gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Menu
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="ACME features"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Compra"
              description="Realizar compra"
              onPress={scrollToFooter}
              startContent={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L6 8M6 8H19L21 12H7M6 8L7 12M10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17ZM17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17Z"
                    stroke={currentThemes}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Compra
            </DropdownItem>

            <DropdownItem
              key="Clubes"
              description="Ver clubes"
              onPress={navigateHome}
              startContent={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L3 6V12C3 17.5 7 21 12 22C17 21 21 17.5 21 12V6L12 2Z"
                    stroke={currentThemes}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Clubes
            </DropdownItem>

            <DropdownItem
              key="SoccerWorld"
              description="Ver selecciones"
              onPress={navigateSoccerWorldShirt}
              startContent={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke={currentThemes}
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2C14 4 16 8 16 12C16 16 14 20 12 22M12 2C10 4 8 8 8 12C8 16 10 20 12 22M2 12H22"
                    stroke={currentThemes}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Selecciones
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Busqueda de equipo
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Lista de Equipos"
            itemClasses={{ base: "gap-4" }}
          >
            {currentTeams.map((team) => (
              <DropdownItem
                key={team.id}
                onPress={() => currentTeamsSelect(team.team)}
              >
                {team.team}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </Navbar>
  );
};
