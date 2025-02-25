import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";

export default function ModalShirt({ isOpen, onClose, shirt } : any) {
  
  if (!shirt) return null; // Evita errores si el modal se abre sin datos

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-4/5 gap-4 p-2" scrollBehavior="inside" placement="center">
      <ModalContent>
        <>
          <ModalHeader>{shirt.title}</ModalHeader>
          <ModalBody>
            <p><strong>Equipo:</strong> {shirt.team}</p>
            <p><strong>Tallas:</strong> {shirt.sizes}</p>
            <p><strong>Descripción:</strong> {shirt.description}</p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}
