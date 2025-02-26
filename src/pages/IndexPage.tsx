import { title, subtitle } from "@/components/Themes";
import CardImg from "@/components/CardImg";
import ModalShirt from "@/components/ModalShirt";

import { useShirt } from "@/hook/useShirt";

export default function IndexPage() {
  const {
    isOpen,
    setIsOpen,
    isLoading,
    selectedShirt,
    filteredShirts,
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
          <span className={title()}>camisas de clubes</span>
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
