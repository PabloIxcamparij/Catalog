import { useState, useEffect } from "react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import CardImg from "@/components/CardImg";
import ModalShirt from "@/components/ModalShirt";
import { shirt as shirtData } from "@/data/shirt.json";

export default function IndexPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState("Todos");
  const [filteredShirts, setFilteredShirts] = useState(shirtData);

  useEffect(() => {
    if (selectedTeam === "Todos") {
      setFilteredShirts(shirtData);
    } else {
      setFilteredShirts(shirtData.filter((shirt) => shirt.team === selectedTeam));
    }
  }, [selectedTeam]);

  const handleOpenModal = (shirt : any) => {
    setSelectedShirt(shirt);
    setIsOpen(true);
  };

  return (
    <DefaultLayout onSelectTeam={setSelectedTeam}> {/* Se pasa la función al Layout */}
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

      <section className="flex flex-wrap justify-center gap-4">
        {filteredShirts.map((shirt, index) => (
          <CardImg key={index} shirt={shirt} onOpen={() => handleOpenModal(shirt)} />
        ))}
      </section>
    </DefaultLayout>
  );
}
