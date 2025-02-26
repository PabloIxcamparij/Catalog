import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { shirtType } from "@/types";

type ModalShirtProps = {
  isOpen: boolean;
  onClose: () => void;
  shirt: shirtType;
};

export default function ModalShirt({
  isOpen,
  onClose,
  shirt,
}: ModalShirtProps) {
  if (!shirt) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="w-4/5 p-2"
      scrollBehavior="inside"
      placement="center"
    >
      <ModalContent>
        <>
          <ModalHeader>{shirt.title}</ModalHeader>
          <ModalBody>
            <p>
              <strong>Equipo:</strong> {shirt.team}
            </p>
            <p>
              <strong>Tallas:</strong> {shirt.sizes}
            </p>
            <p>
              <strong>Descripción:</strong> {shirt.description}
            </p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}
