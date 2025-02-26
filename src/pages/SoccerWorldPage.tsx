import { title, subtitle } from "@/components/Themes";
import { useShirt } from "@/context/ShirtContext";
import ModalShirt from "@/components/ModalShirt";
import CardImg from "@/components/CardImg";

export default function SoccerWorldPage() {
  const {
    isOpen,
    setIsOpen,
    isLoading,
    selectedShirt,
    filteredShirtsWorld,
    handleOpenModal,
  } = useShirt();

  return (
    <>
      <ModalShirt
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        shirt={selectedShirt!}
      />

      <section className="flex flex-col items-center justify-center gap-4 mt-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "yellow" })}>Fantásticas </span>
          <span className={title()}>camisas de mundiales</span>
          <div className={subtitle({ class: "mt-4" })}>
            Con variedad de naciones y tallas
          </div>
        </div>
      </section>

      {isLoading ? (
        <p className="text-center mt-5">Cargando camisas...</p>
      ) : (
        <section className="flex flex-wrap justify-center gap-4">
          {filteredShirtsWorld.length > 0 ? (
            filteredShirtsWorld.map((shirt, index) => (
              <CardImg
                key={index}
                shirt={shirt}
                onOpen={() => handleOpenModal(shirt)}
              />
            ))
          ) : (
            <p className="text-center">No hay camisas disponibles</p>
          )}
        </section>
      )}
    </>
  );
}
