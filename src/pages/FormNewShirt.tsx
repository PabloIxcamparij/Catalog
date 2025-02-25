import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";

export default function FormNewShirt() {
  const [action, setAction] = useState(null);
  const [shirts, setShirts] = useState(() => {
    const storedShirts = localStorage.getItem("shirts");
    return storedShirts ? JSON.parse(storedShirts) : [];
  });

  const handleSubmit = (e : any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newShirt = {
      id: shirts.length + 1,
      title: formData.get("title"),
      description: formData.get("description"),
      team: formData.get("team"),
      sizes: formData.get("sizes"),
      src: formData.get("src"),
    };

    const updatedShirts = [...shirts, newShirt];
    setShirts(updatedShirts);
    localStorage.setItem("shirts", JSON.stringify(updatedShirts));

    setAction(`Nueva camisa añadida: ${JSON.stringify(newShirt)}`);
    e.target.reset(); // Resetear el formulario después de agregar
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input isRequired label="Título" name="title" placeholder="Nombre de la camisa" type="text" />
        <Input isRequired label="Descripción" name="description" placeholder="Descripción" type="text" />
        <Input isRequired label="Equipo" name="team" placeholder="Equipo" type="text" />
        <Input isRequired label="Tallas" name="sizes" placeholder="Ej: S, M, L, XL" type="text" />
        <Input isRequired label="Imagen (URL)" name="src" placeholder="URL de la imagen" type="text" />

        <div className="flex gap-2">
          <Button color="primary" type="submit">Agregar Camisa</Button>
          <Button type="reset" variant="flat">Reset</Button>
        </div>
      </Form>

      {action && (
        <div className="text-small text-default-500 mt-4">
          <code>{action}</code>
        </div>
      )}
    </section>
  );
}
