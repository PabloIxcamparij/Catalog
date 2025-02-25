import { useState, useEffect } from "react";
import { title, subtitle } from "@/components/Themes";
import DefaultLayout from "@/layouts/default";
import CardImg from "@/components/CardImg";
import ModalShirt from "@/components/ModalShirt";
import { supabase } from "@/supabaseClient";

export default function IndexPage() {
  const [shirts, setShirts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState<any | null>(null);
  const [selectedTeam, setSelectedTeam] = useState("Todos");
  const [filteredShirts, setFilteredShirts] = useState<any[]>([]);

  useEffect(() => {
    const fetchShirts = async () => {
      const { data, error } = await supabase.from("shirt").select("*");
      if (error) {
        console.error("Error fetching shirts:", error);
      } else {
        setShirts(data);
        setFilteredShirts(data); // Inicialmente, mostrar todos los datos
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

  const handleOpenModal = (shirt: any) => {
    setSelectedShirt(shirt);
    setIsOpen(true);
  };

  return (
    <DefaultLayout onSelectTeam={setSelectedTeam}>
      <ModalShirt isOpen={isOpen} onClose={() => setIsOpen(false)} shirt={selectedShirt} />

      <section className="flex flex-col items-center justify-center gap-4 mt-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "yellow" })}>Fantásticas </span>
          <span className={title()}>camisas deportivas</span>
          <div className={subtitle({ class: "mt-4" })}>
            Con variedad de equipos y tallas
          </div>
        </div>
      </section>

      {isLoading ? (
        <p className="text-center mt-5">Cargando camisas...</p>
      ) : (
        <section className="flex flex-wrap justify-center gap-4">
          {filteredShirts.length > 0 ? (
            filteredShirts.map((shirt, index) => (
              <CardImg key={index} shirt={shirt} onOpen={() => handleOpenModal(shirt)} />
            ))
          ) : (
            <p className="text-center">No hay camisas disponibles</p>
          )}
        </section>
      )}
    </DefaultLayout>
  );
}
